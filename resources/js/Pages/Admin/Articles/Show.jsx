import Dashboard from "../../../Layouts/Dashboard";
import { Head } from "@inertiajs/react";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

export default function Show({ auth, article }) {
    return (
        <>
            <Head title="Show Article" />
            <Dashboard title="Show Article" auth={auth}>
                <div className="card bg-base-300">
                    <div className="card-body">
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="label">Title</label>
                                <p>{article.title}</p>
                            </div>
                            <div>
                                <label className="label">Thumbnail</label>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-20 h-20">
                                        <img
                                            src={article.thumbnail}
                                            alt="Avatar Tailwind CSS Component"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="label">Content</label>
                                <FroalaEditorView model={article.content} />
                            </div>
                        </div>
                    </div>
                </div>
            </Dashboard>
        </>
    );
}
