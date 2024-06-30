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
    console.log(datas);
    return (
        <div className={`max-w-[75rem] overflow-x-auto ${className} `}>
            <table className="table table-responsive table-zebra">
                <thead>
                    <tr>
                        {header.map((item, index) => (
                            <th key={index}>{item.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {datas.data.length > 0 ? (
                        datas.data.map((data, datasIndex) => (
                            <tr key={datasIndex}>
                                {header.map((item, itemsIndex) => (
                                    <td key={itemsIndex}>
                                        {item.key === "no" ? datasIndex + 1 : null}

                                        {item.key === "thumbnail" ||
                                        item.key === "image" ? (
                                            <div className="avatar">
                                                <div className="mask  mask-squircle w-20 h-20">
                                                    <img
                                                        src={`../../../storage/${
                                                            data[item.key]
                                                        }`}
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
                                                {editRoute && data.slug ? (
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
                                                ) : (
                                                    <Link
                                                        method="get"
                                                        href={editRoute.replace(
                                                            ":id",
                                                            data.uuid
                                                        )}
                                                        className="btn btn-warning"
                                                    >
                                                        Edit
                                                    </Link>
                                                )}
                                                {deleteRoute && data.slug ? (
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
                                                ) : (
                                                    <Link
                                                        method="delete"
                                                        href={deleteRoute.replace(
                                                            ":id",
                                                            data.uuid
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
            <div className="py-12 px-6 flex justify-end">
                {datas.links.map((link, index) =>
                    link.url ? (
                        link.label === "&laquo; Previous" ||
                        link.label === "Next &raquo;" ? (
                            <Link
                                key={index}
                                href={link.url}
                                className="btn btn-neutral mx-1"
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            ></Link>
                        ) : null
                    ) : (
                        <span
                            key={index}
                            className="btn btn-neutral mx-1 opacity-50 cursor-not-allowed"
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        ></span>
                    )
                )}
            </div>
        </div>
    );
}
