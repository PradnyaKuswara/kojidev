import Dashboard from "../../../Layouts/Dashboard";
import Table from "../../../Components/Table";
import { Link, Head } from "@inertiajs/react";

export default function Index({ auth, portfolios }) {
    const headTable = [
        {
            title: "No",
            key: "no",
        },
        {
            title: "Image",
            key: "image",
        },
        {
            title: "Title",
            key: "title",
        },
        {
            title: "Slug",
            key: "slug",
        },
        {
            title: "Description",
            key: "description",
        },
        {
            title: "Category",
            key: "project_category",
        },
        {
            title: "Client",
            key: "project_client",
        },
        {
            title: "Date",
            key: "project_date",
        },
        {
            title: "Url",
            key: "project_url",
        },
        {
            title: "Github",
            key: "project_url_github",
        },

        {
            title: "Actions",
            key: "actions",
        },
    ];

    return (
        <>
            <Head title="Portfolios" />
            <Dashboard title="Portfolios" auth={auth}>
                <Link
                    href={route("admin.portfolios.create")}
                    className="btn btn-accent"
                >
                    +Create Portfolio
                </Link>
                <Table
                    className="mt-8 w-full"
                    header={headTable}
                    datas={portfolios}
                    editRoute={route("admin.portfolios.edit", ":id")}
                    deleteRoute={route("admin.portfolios.destroy", ":id")}
                />
            </Dashboard>
        </>
    );
}
