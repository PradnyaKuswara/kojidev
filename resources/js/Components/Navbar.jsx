import * as React from "react";
import { Link } from "@inertiajs/react";

export default function Navbar({ auth }) {
    const [scrollPosition, setScrollPosition] = React.useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div
                className={`navbar fixed p-4 lg:p-2 z-[2]  top-0 shadow-sm flex justify-between  lg:justify-around transition-colors  duration-300 ${
                    scrollPosition > 0
                        ? "bg-white text-black"
                        : "bg-transparent"
                }`}
            >
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold">KOJIDEV</h1>
                </div>
                <div className="flex-col hidden lg:flex">
                    <ul className="menu menu-horizontal ">
                        <li className="hover:bg-primary hover:text-white hover:rounded-md">
                            <Link href="/#home">Home</Link>
                        </li>
                        <li className="hover:bg-primary hover:text-white hover:rounded-md">
                            <Link href="/#about">About</Link>
                        </li>
                        <li className="hover:bg-primary hover:text-white hover:rounded-md">
                            <Link href="/#portfolio">Portofolio</Link>
                        </li>
                        <li className="hover:bg-primary hover:text-white hover:rounded-md">
                            <Link href="/#news">News</Link>
                        </li>
                        <li className="hover:bg-primary hover:text-white hover:rounded-md">
                            <Link href="/#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex-col hidden lg:flex">
                    <ul className="menu menu-horizontal ">
                        {!auth.user ? (
                            <Link
                                href={route("login")}
                                className="btn btn-primary btn-outline px-6 btn-sm"
                            >
                                Login
                            </Link>
                        ) : (
                            <div className="flex gap-4">
                                <Link
                                    href={route("admin.dashboard")}
                                    className="btn btn-primary btn-outline px-6 btn-sm"
                                >
                                    Dashboard
                                </Link>

                                <Link
                                    href={route("logout")}
                                    method="post"
                                    className="btn btn-error px-6 btn-sm"
                                >
                                    Logout
                                </Link>
                            </div>
                        )}
                    </ul>
                </div>
                <div className="dropdown lg:hidden dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-white rounded-box w-52 gap-2"
                    >
                        <li>
                            <div className="flex items-center">
                                <box-icon
                                    name="home-alt-2"
                                    size="sm"
                                ></box-icon>
                                <Link href="/#home" className="text-sm">
                                    Home
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <box-icon name="user" size="sm"></box-icon>
                                <Link href="/#about" className="text-sm">
                                    About
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <box-icon
                                    name="book-content"
                                    size="sm"
                                ></box-icon>
                                <a href="/#portfolio" className="text-sm">
                                    Portfolio
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <box-icon name="news" size="sm"></box-icon>
                                <Link href="/#news" className="text-sm">
                                    News
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <box-icon name="mail-send" size="sm"></box-icon>
                                <Link href="/#contact" className="text-sm">
                                    Contact
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
