import Dashboard from "../../../Layouts/Dashboard";

import { Head, useForm, router } from "@inertiajs/react";

const formattedDate = (date) => {
    const projectDate = new Date(date);
    const year = projectDate.getFullYear();
    const month = String(projectDate.getMonth() + 1).padStart(2, "0"); // Bulan dimulai dari 0
    const day = String(projectDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};

export default function Edit({ auth, portfolio }) {
    const portofolioDate = formattedDate(portfolio.project_date);
    const { data, setData, patch, errors, processing, progress } = useForm({
        title: portfolio.title,
        project_category: portfolio.project_category,
        project_client: portfolio.project_client,
        project_date: portofolioDate,
        project_url: portfolio.project_url,
        project_url_github: portfolio.project_url_github,
        description: portfolio.description,
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route("admin.portfolios.update", portfolio.slug), {
            _method: "patch",
            ...data,
        });
    };

    return (
        <>
            <Head title="Edit Portfolio" />
            <Dashboard title="Edit Portfolio" auth={auth}>
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
                                            placeholder="Insert title project"
                                            className="input input-bordered w-full text-xs "
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
                                                Image
                                            </span>
                                        </div>
                                        <input
                                            id="thumbnail"
                                            type="file"
                                            onChange={(e) =>
                                                setData(
                                                    "image",
                                                    e.target.files[0]
                                                )
                                            }
                                            className="file-input file-input-bordered file-input-info w-full text-xs "
                                            accept="image/*"
                                        />
                                    </label>
                                    <p className="text-error text-xs mt-4">
                                        {errors.image}
                                    </p>
                                </div>

                                <div className="col-span-1">
                                    <label
                                        className="form-control w-full"
                                        htmlFor="title"
                                    >
                                        <div className="label">
                                            <span className="label-text">
                                                Project Category
                                            </span>
                                        </div>
                                        <input
                                            id="title"
                                            type="text"
                                            value={data.project_category}
                                            onChange={(e) =>
                                                setData(
                                                    "project_category",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Insert project category"
                                            className="input input-bordered w-full text-xs "
                                        />
                                    </label>
                                    <p className="text-error text-xs mt-4">
                                        {errors.project_category}
                                    </p>
                                </div>

                                <div className="col-span-1">
                                    <label
                                        className="form-control w-full"
                                        htmlFor="title"
                                    >
                                        <div className="label">
                                            <span className="label-text">
                                                Project Client
                                            </span>
                                        </div>
                                        <input
                                            id="title"
                                            type="text"
                                            value={data.project_client}
                                            onChange={(e) =>
                                                setData(
                                                    "project_client",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Insert project client"
                                            className="input input-bordered w-full text-xs"
                                        />
                                    </label>
                                    <p className="text-error text-xs mt-4">
                                        {errors.project_client}
                                    </p>
                                </div>

                                <div className="col-span-1">
                                    <label
                                        className="form-control w-full"
                                        htmlFor="title"
                                    >
                                        <div className="label">
                                            <span className="label-text">
                                                Project Date
                                            </span>
                                        </div>
                                        <input
                                            id="title"
                                            type="date"
                                            value={data.project_date}
                                            onChange={(e) =>
                                                setData(
                                                    "project_date",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Insert project date"
                                            className="input input-bordered w-full text-xs "
                                        />
                                    </label>
                                    <p className="text-error text-xs mt-4">
                                        {errors.project_date}
                                    </p>
                                </div>

                                <div className="col-span-1">
                                    <label
                                        className="form-control w-full"
                                        htmlFor="title"
                                    >
                                        <div className="label">
                                            <span className="label-text">
                                                Project Url
                                            </span>
                                        </div>
                                        <input
                                            id="title"
                                            type="text"
                                            value={data.project_url}
                                            onChange={(e) =>
                                                setData(
                                                    "project_url",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Insert project url"
                                            className="input input-bordered w-full  text-xs "
                                        />
                                    </label>
                                    <p className="text-error text-xs mt-4">
                                        {errors.project_url}
                                    </p>
                                </div>

                                <div className="col-span-2">
                                    <label
                                        className="form-control w-full"
                                        htmlFor="title"
                                    >
                                        <div className="label">
                                            <span className="label-text">
                                                Project Url Github
                                            </span>
                                        </div>
                                        <input
                                            id="title"
                                            type="text"
                                            value={data.project_url_github}
                                            onChange={(e) =>
                                                setData(
                                                    "project_url_github",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Insert project url github"
                                            className="input input-bordered w-full text-sm"
                                        />
                                    </label>
                                    <p className="text-error text-xs mt-4">
                                        {errors.project_url_github}
                                    </p>
                                </div>

                                <div className="col-span-2">
                                    <label
                                        className="form-control w-full "
                                        htmlFor="Content"
                                    >
                                        <div className="label">
                                            <span className="label-text">
                                                Description
                                            </span>
                                        </div>

                                        <textarea
                                            id="Content"
                                            value={data.description}
                                            onChange={(e) =>
                                                setData(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                            className="textarea textarea-bordered h-24"
                                            placeholder="Insert description project"
                                        >
                                            {data.description}
                                        </textarea>
                                    </label>
                                    <p className="text-error text-xs mt-4">
                                        {errors.description}
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
