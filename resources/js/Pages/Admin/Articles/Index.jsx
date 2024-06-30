import Dashboard from "../../../Layouts/Dashboard";
import Table from "../../../Components/Table";
import { Link, Head } from "@inertiajs/react";

export default function Index({ auth, articles }) {
    console.log(articles);
    const headTable = [
        {
            title: "No",
            key: "no",
        },
        {
            title: "Thumbnail",
            key: "thumbnail",
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
            title: "Actions",
            key: "actions",
        },
    ];

    return (
        <>
            <Head title="Articles" />
            <Dashboard title="Articles" auth={auth}>
                <Link
                    href={route("admin.articles.create")}
                    className="btn btn-accent"
                >
                    +Create Article
                </Link>
                <Table
                    className="mt-8 w-full"
                    header={headTable}
                    datas={articles}
                    editRoute={route("admin.articles.edit", ":id")}
                    deleteRoute={route("admin.articles.destroy", ":id")}
                    showRoute={route("admin.articles.show", ":id")}
                />
            </Dashboard>
        </>
    );
}
