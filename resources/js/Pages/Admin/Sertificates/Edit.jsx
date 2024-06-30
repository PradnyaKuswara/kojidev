import Dashboard from "../../../Layouts/Dashboard";

import { Head, useForm } from "@inertiajs/react";

export default function Edit({ auth, sertificate }) {
    const { data, setData, patch, errors, processing, progress } = useForm({
        name: sertificate.name,
        organization: sertificate.organization,
        month_obtained: sertificate.month_obtained,
        year_obtained: sertificate.year_obtained,
        month_expired: sertificate.month_expired,
        year_expired: sertificate.year_expired,
        url: sertificate.url,
        description: sertificate.description,
    });

    const years = () => {
        let year = new Date().getFullYear() + 10;
        let years = [];
        for (let i = 0; i < 20; i++) {
            years.push(year - i);
        }
        return years;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route("admin.sertificates.update", sertificate.uuid));
    };

    return (
        <>
            <Head title="Edit Sertificate" />
            <Dashboard title="Edit Sertificate" auth={auth}>
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
                                        htmlFor="name"
                                    >
                                        <div className="label">
                                            <span className="label-text">
                                                Name
                                            </span>
                                        </div>
                                        <input
                                            id="name"
                                            type="text"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            placeholder="Insert name sertificates"
                                            className="input input-bordered w-full text-xs "
                                        />
                                    </label>
                                    <p className="text-error text-xs mt-4">
                                        {errors.name}
                                    </p>
                                </div>

                                <div className="col-span-1">
                                    <label
                                        className="form-control w-full"
                                        htmlFor="organization"
                                    >
                                        <div className="label">
                                            <span className="label-text">
                                                Organization
                                            </span>
                                        </div>
                                        <input
                                            id="organization"
                                            type="text"
                                            value={data.organization}
                                            onChange={(e) =>
                                                setData(
                                                    "organization",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Insert organization"
                                            className="input input-bordered w-full text-xs "
                                        />
                                    </label>
                                    <p className="text-error text-xs mt-4">
                                        {errors.organization}
                                    </p>
                                </div>

                                <div className="col-span-1">
                                    <label
                                        className="form-control w-full"
                                        htmlFor="month_obtained"
                                    >
                                        <div className="label">
                                            <span className="label-text">
                                                Month Obtained
                                            </span>
                                        </div>

                                        <select
                                            className="select select-bordered w-full text-xs"
                                            value={data.month_obtained}
                                            onChange={(e) =>
                                                setData(
                                                    "month_obtained",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="" disabled>
                                                Select Month
                                            </option>
                                            <option value="January">
                                                January
                                            </option>
                                            <option value="February">
                                                February
                                            </option>
                                            <option value="March">March</option>
                                            <option value="April">April</option>
                                            <option value="May">May</option>
                                            <option value="June">June</option>
                                            <option value="July">July</option>
                                            <option value="August">
                                                August
                                            </option>
                                            <option value="September">
                                                September
                                            </option>
                                            <option value="October">
                                                October
                                            </option>
                                            <option value="November">
                                                November
                                            </option>
                                            <option value="December">
                                                December
                                            </option>
                                        </select>
                                    </label>
                                    <p className="text-error text-xs mt-4">
                                        {errors.month_obtained}
                                    </p>
                                </div>

                                <div className="col-span-1">
                                    <label
                                        className="form-control w-full"
                                        htmlFor="year_obtained"
                                    >
                                        <div className="label">
                                            <span className="label-text">
                                                Year Obtained
                                            </span>
                                        </div>

                                        <select
                                            className="select select-bordered w-full text-xs"
                                            value={data.year_obtained}
                                            onChange={(e) =>
                                                setData(
                                                    "year_obtained",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="" disabled>
                                                Select Year
                                            </option>
                                            {years().map((year) => (
                                                <option key={year} value={year}>
                                                    {year}
                                                </option>
                                            ))}
                                        </select>
                                    </label>
                                    <p className="text-error text-xs mt-4">
                                        {errors.year_obtained}
                                    </p>
                                </div>

                                <div className="col-span-1">
                                    <label
                                        className="form-control w-full"
                                        htmlFor="month_expired"
                                    >
                                        <div className="label">
                                            <span className="label-text">
                                                Month Expired
                                            </span>
                                        </div>

                                        <select
                                            className="select select-bordered w-full text-xs"
                                            value={data.month_expired}
                                            onChange={(e) =>
                                                setData(
                                                    "month_expired",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="" disabled>
                                                Select Month
                                            </option>
                                            <option value="January">
                                                January
                                            </option>
                                            <option value="February">
                                                February
                                            </option>
                                            <option value="March">March</option>
                                            <option value="April">April</option>
                                            <option value="May">May</option>
                                            <option value="June">June</option>
                                            <option value="July">July</option>
                                            <option value="August">
                                                August
                                            </option>
                                            <option value="September">
                                                September
                                            </option>
                                            <option value="October">
                                                October
                                            </option>
                                            <option value="November">
                                                November
                                            </option>
                                            <option value="December">
                                                December
                                            </option>
                                        </select>
                                    </label>
                                    <p className="text-error text-xs mt-4">
                                        {errors.month_expired}
                                    </p>
                                </div>

                                <div className="col-span-1">
                                    <label
                                        className="form-control w-full"
                                        htmlFor="year_expired"
                                    >
                                        <div className="label">
                                            <span className="label-text">
                                                Year Expired
                                            </span>
                                        </div>

                                        <select
                                            className="select select-bordered w-full text-xs"
                                            value={data.year_expired}
                                            onChange={(e) =>
                                                setData(
                                                    "year_expired",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="" disabled>
                                                Select Year
                                            </option>
                                            {years().map((year) => (
                                                <option key={year} value={year}>
                                                    {year}
                                                </option>
                                            ))}
                                        </select>
                                    </label>
                                    <p className="text-error text-xs mt-4">
                                        {errors.year_expired}
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
                                            value={data.url}
                                            onChange={(e) =>
                                                setData("url", e.target.value)
                                            }
                                            placeholder="Insert sertificate url"
                                            className="input input-bordered w-full  text-xs "
                                        />
                                    </label>
                                    <p className="text-error text-xs mt-4">
                                        {errors.url}
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
                                            onChange={(e) =>
                                                setData(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                            className="textarea textarea-bordered h-24"
                                            placeholder="Insert description sertificate"
                                            value={data.description}
                                        ></textarea>
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
