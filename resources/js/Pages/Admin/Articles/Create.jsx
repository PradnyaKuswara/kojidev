import Dashboard from "../../../Layouts/Dashboard";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";

import FroalaEditorComponent from "react-froala-wysiwyg";
import { Head, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post, errors, processing, progress } = useForm({
        title: "",
        content: "",
        thumbnail: null,
    });

    const configEditor = {
        placeholderText: "Edit Your Content Here!",
        imageAllowedTypes: ["jpeg", "jpg", "png"],
        plainPaste: true,
        height: "300",
        width: "100%",
        paragraphFormat: {
            N: "Normal",
            heading1: "Heading 1",
            H2: "Heading 2",
        },
        pluginsEnabled: [
            "align",
            "colors",
            "image",
            "video",
            "imageManager",
            "link",
            "lists",
            "paragraphFormat",
            "quote",
            "table",
            "url",
            "wordPaste",
            "wordCounter",
            "fullscreen",
            "embedly",
            "charCounter",
            "codeView",
            "codeBeautifier",
            "getPDF",
        ],
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.articles.store"));
    };

    return (
        <>
            <Head title="Create Article" />
            <Dashboard title="Create Article" auth={auth}>
                <div className="card bg-base-300">
                    <div className="card-body">
                        <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <label
                                        className="form-control w-full"
                                        htmlFor="title"
                                    >
                                        <div className="label">
                                            <span className="label-text">
                                                Title
                                            </span>
                                        </div>
                                        <input
                                            id="title"
                                            type="text"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                            placeholder="Type here"
                                            className="input input-bordered w-full bg-white text-base-100 "
                                        />
                                    </label>
                                    <p className="text-error text-xs mt-4">
                                        {errors.title}
                                    </p>
                                </div>
                                <div className="col-span-1">
                                    <label
                                        className="form-control w-full "
                                        htmlFor="thumbnail"
                                    >
                                        <div className="label">
                                            <span className="label-text">
                                                Thumbnail
                                            </span>
                                        </div>
                                        <input
                                            id="thumbnail"
                                            type="file"
                                            onChange={(e) =>
                                                setData(
                                                    "thumbnail",
                                                    e.target.files[0]
                                                )
                                            }
                                            class="file-input file-input-bordered file-input-info w-full bg-white text-base-100 "
                                            accept="image/*"
                                        />
                                    </label>
                                    <p className="text-error text-xs mt-4">
                                        {errors.thumbnail}
                                    </p>
                                </div>
                                <div className="col-span-2">
                                    <label
                                        className="form-control w-full "
                                        htmlFor="Content"
                                    >
                                        <div className="label">
                                            <span className="label-text">
                                                Content
                                            </span>
                                        </div>
                                        <FroalaEditorComponent
                                            tag="textarea"
                                            model={data.content}
                                            onModelChange={(e) =>
                                                setData("content", e)
                                            }
                                            config={configEditor}
                                        />
                                    </label>
                                    <p className="text-error text-xs mt-4">
                                        {errors.content}
                                    </p>
                                </div>

                                <div className="col-span-2">
                                    {progress && (
                                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                                            <div
                                                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                                width={progress.percentage}
                                            >
                                                {" "}
                                                {progress.percentage}%
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="col-span-2">
                                    <button
                                        disabled={processing}
                                        className="btn btn-primary w-full"
                                        type="submit"
                                    >
                                        {processing ? "Saving..." : "Save"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Dashboard>
        </>
    );
}
