import Dashboard from "../../../Layouts/Dashboard";
import Table from "../../../Components/Table";
import { Link, Head } from "@inertiajs/react";

export default function Index({ auth, sertificates }) {
    const headTable = [
        {
            title: "No",
            key: "no",
        },
        {
            title: "organization",
            key: "organization",
        },
        {
            title: "Month Obtained",
            key: "month_obtained",
        },
        {
            title: "Year Obtained",
            key: "year_obtained",
        },
        {
            title: "Month Expired",
            key: "month_expired",
        },
        {
            title: "Year Expired",
            key: "year_expired",
        },
        {
            title: "URL",
            key: "url",
        },
        {
            title: "Description",
            key: "description",
        },
        {
            title: "Actions",
            key: "actions",
        },
    ];

    return (
        <>
            <Head title="Sertificates" />
            <Dashboard title="Sertificates" auth={auth}>
                <Link
                    href={route("admin.sertificates.create")}
                    className="btn btn-accent"
                >
                    +Create Sertificate
                </Link>
                <Table
                    className="mt-8 w-full"
                    header={headTable}
                    datas={sertificates}
                    editRoute={route("admin.sertificates.edit", ":id")}
                    deleteRoute={route("admin.sertificates.destroy", ":id")}
                />
            </Dashboard>
        </>
    );
}
