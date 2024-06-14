import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <>
            <div className=" border border-t p-4 border-black">
                <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-8 overflow-hidden sm:px-6 md:px-8">
                    <nav className="flex flex-wrap items-center justify-center -mx-5 -my-2">
                        <div className="px-5 flex gap-6">
                            <a
                                href="https://www.instagram.com/pkuswara/"
                                className="text-accent text-xl hover:text-gray-500"
                                target="_blank"
                            >
                                <span className="sr-only">Instagram</span>
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a
                                href="https://github.com/PradnyaKuswara"
                                className="text-accent text-xl hover:text-gray-500"
                                target="_blank"
                            >
                                <span className="sr-only">Github</span>
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/pradnya-kuswara/"
                                className="text-accent text-xl hover:text-gray-500"
                                target="_blank"
                            >
                                <span className="sr-only">Linkedin</span>
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
