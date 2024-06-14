import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import { Link } from "@inertiajs/react";

export default function Table({
    header,
    datas,
    className,
    editRoute = null,
    deleteRoute = null,
    showRoute = null,
}) {
    console.log(editRoute, deleteRoute);
    return (
        <div className={`overflow-x-auto ${className} `}>
            <table className="table table-responsive table-zebra">
                <thead>
                    <tr>
                        {header.map((item, index) => (
                            <th key={index}>{item.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {datas.length > 0 ? (
                        datas.map((data, index) => (
                            <tr key={index}>
                                {header.map((item, index) => (
                                    <td key={index}>
                                        {item.key === "thumbnail" ? (
                                            <div className="avatar">
                                                <div className="mask  mask-squircle w-20 h-20">
                                                    <img
                                                        src={data[item.key]}
                                                        alt="Avatar Tailwind CSS Component"
                                                    />
                                                </div>
                                            </div>
                                        ) : item.key === "content" ? (
                                            <FroalaEditorView
                                                model={data[item.key]}
                                            />
                                        ) : (
                                            data[item.key]
                                        )}

                                        {item.key === "actions" && (
                                            <div className="flex gap-4">
                                                {editRoute && (
                                                    <Link
                                                        method="get"
                                                        href={editRoute.replace(
                                                            ":id",
                                                            data.slug
                                                        )}
                                                        className="btn btn-warning"
                                                    >
                                                        Edit
                                                    </Link>
                                                )}
                                                {deleteRoute && (
                                                    <Link
                                                        method="delete"
                                                        href={deleteRoute.replace(
                                                            ":id",
                                                            data.slug
                                                        )}
                                                        className="btn btn-error"
                                                    >
                                                        Delete
                                                    </Link>
                                                )}
                                                {showRoute && (
                                                    <Link
                                                        method="get"
                                                        href={showRoute.replace(
                                                            ":id",
                                                            data.slug
                                                        )}
                                                        className="btn btn-primary"
                                                    >
                                                        Show
                                                    </Link>
                                                )}
                                            </div>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={header.length} className="text-center">
                                No data available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
