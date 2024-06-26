import { Link } from "@inertiajs/react";

export default function Sidebar({ auth, page }) {
    return (
        <>
            <div className=" antialiased">
                <div
                    id="view"
                    className="sidebar block fixed bottom-0 top-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300 "
                >
                    <div
                        id="sidebar"
                        className="bg-base-300 h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
                        x-show="sidenav"
                    >
                        <div className="space-y-6 md:space-y-10 mt-10">
                            <h1 className="font-bold text-4xl text-center md:hidden">
                                D<span className="text-teal-600">.</span>
                            </h1>
                            <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
                                KojiDev<span className="text-primary">.</span>
                            </h1>
                            <div id="profile" className="space-y-3">
                                <img
                                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                    alt="Avatar user"
                                    className="w-10 md:w-16 rounded-full mx-auto"
                                />
                                <div>
                                    <h2 className="font-medium text-xs md:text-sm text-center text-accent">
                                        {auth.user.name}
                                    </h2>
                                    <p className="text-xs text-gray-500 text-center">
                                        {auth.user.email}
                                    </p>
                                </div>
                            </div>

                            <div id="menu" className="flex flex-col space-y-2">
                                <Link
                                    href={route("admin.dashboard")}
                                    className={`text-sm font-medium  py-2 px-2 hover:bg-accent hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out ${
                                        route().current("admin.dashboard")
                                            ? "bg-accent text-white text-base"
                                            : ""
                                    }`}
                                >
                                    <svg
                                        className="w-6 h-6 fill-current inline-block"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                    </svg>
                                    <span className="">Dashboard</span>
                                </Link>
                                <Link
                                    href={route("admin.articles.index")}
                                    className={`text-sm font-medium  py-2 px-2 hover:bg-accent hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out ${
                                        route().current(
                                            "admin.articles.index"
                                        ) ||
                                        route().current(
                                            "admin.articles.create"
                                        ) ||
                                        route().current("admin.articles.edit")
                                            ? "bg-accent text-white text-base"
                                            : ""
                                    }`}
                                >
                                    <svg
                                        className="w-6 h-6 fill-current inline-block"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                                    </svg>
                                    <span className="">Articles</span>
                                </Link>
                                <Link
                                    href={route("admin.portfolios.index")}
                                    className={`text-sm font-medium  py-2 px-2 hover:bg-accent hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out ${
                                        route().current(
                                            "admin.portfolios.index"
                                        ) ||
                                        route().current(
                                            "admin.portfolios.create"
                                        ) ||
                                        route().current("admin.portfolios.edit")
                                            ? "bg-accent text-white text-base"
                                            : ""
                                    }`}
                                >
                                    <svg
                                        className="w-6 h-6 fill-current inline-block"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                        <path
                                            fillRule="evenodd"
                                            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="">Portfolio</span>
                                </Link>
                                <Link
                                    href={route("admin.sertificates.index")}
                                    className={`text-sm font-medium  py-2 px-2 hover:bg-accent hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out ${
                                        route().current(
                                            "admin.sertificates.index"
                                        ) ||
                                        route().current(
                                            "admin.sertificates.create"
                                        ) ||
                                        route().current(
                                            "admin.sertificates.edit"
                                        )
                                            ? "bg-accent text-white text-base"
                                            : ""
                                    }`}
                                >
                                    <svg
                                        className="w-6 h-6 fill-current inline-block"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
                                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
                                    </svg>
                                    <span className="">Sertificate</span>
                                </Link>

                                <Link
                                    href={route("admin.logout")}
                                    method="post"
                                    className="text-sm font-medium  py-2 px-2 hover:bg-accent hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                                >
                                    <svg
                                        className="w-6 h-6 fill-current inline-block"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V4a1 1 0 00-1-1H3zm14 2H3v12h14V5z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="ms-2">Logout</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
