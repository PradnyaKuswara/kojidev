import * as React from "react";
import emailjs from "@emailjs/browser";
import { Head, Link } from "@inertiajs/react";
import App from "../Layouts/App";
import Typewriter from "../Components/Typewriter";

import imageKoji from "../../../public/assets/images/kuswara.jpg";
import aboutImage from "../../../public/assets/images/hero.jpg";

function HomePage({ auth, articles }) {
    const form = React.useRef();
    let message = "";

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_pknd9zj",
                "template_m816vxd",
                form.current,
                "NSWAg7yOYEU8rai5K"
            )
            .then(
                (result) => {
                    message = result.text;
                },
                (error) => {
                    message = error.text;
                }
            );

        e.target.reset();
    };

    return (
        <App auth={auth}>
            <Head title="Home" />

            <div
                className="w-full mx-auto lg:min-h-screen lg:my-0 my-20 "
                id="home"
            >
                <div className="flex flex-wrap justify-center items-center lg:flex-nowrap flex-row-reverse ">
                    <div className="w-full mb-10">
                        <div className="container mx-auto h-full sm:p-10 ">
                            <nav className="flex px-4 justify-between items-center "></nav>
                            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0 ">
                                <div className="w-full">
                                    <div className="animate-fade-right">
                                        <h1 className="text-4xl lg:text-6xl font-bold">
                                            Hi! I Am
                                        </h1>
                                        <h1 className="text-accent text-4xl lg:text-6xl font-bold">
                                            Pradnya Kuswara
                                        </h1>
                                        <div className="w-20 h-2 bg-primary my-4"></div>
                                        <h1>
                                            <Typewriter
                                                text="Web Developer | Laravel, React Js, Node Js"
                                                delay={100}
                                                infinite
                                            />
                                        </h1>
                                    </div>
                                </div>
                            </header>
                        </div>
                    </div>

                    <img
                        src={imageKoji}
                        alt="User"
                        className="w-full h-48 object-cover object- sm:h-screen sm:w-4/12 rounded-md  "
                    />
                </div>
            </div>

            <div className="max-w-screen-lg lg:mx-auto  lg:my-36" id="about">
                <div className="container">
                    <div className="grid md:grid-cols-2 place-items-center gap-10">
                        <div className="col-span-1 order-2" data-aos="fade-up">
                            <img
                                src={aboutImage}
                                alt="About"
                                className="w-full h-96 object-cover rounded-md"
                            />
                        </div>
                        <div
                            className="col-span-1 flex flex-col gap-3 order-1 mx-4"
                            data-aos="fade-right"
                        >
                            <div className="badge badge-primary badge-outline">
                                About me
                            </div>
                            <h1 className="text-4xl">
                                Web Developer based in Indonesia, Bali
                            </h1>
                            <p className="text-gray-500 mt-4 leading-7 text-justify">
                                Motivated and enthusiastic Informatics student
                                with a passion for technology. Dedicated to
                                expanding knowledge and skills in programming
                                languages and software development
                                methodologies. Have basic knowledge of the PHP
                                programming language, Laravel framework, React
                                Js, Node Js, and MySQL database.
                            </p>
                            <div className="flex gap-4 mt-8">
                                <Link
                                    href="#"
                                    className="btn btn-primary btn-outline"
                                >
                                    Download CV
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-base-200 p-10" id="portfolio">
                <div className="max-w-screen-xl mx-auto">
                    <div className="badge badge-accent badge-outline">
                        Portofolio
                    </div>
                    <div className="flex gap-4 mt-2">
                        <h1 className="text-2xl font-bold">
                            Creative Portfolio
                        </h1>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-4 mt-8">
                        <div
                            className="col-span-1"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="card w-72 lg:w-96 bg-base-100 shadow-xl">
                                <figure className="">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                        alt="Shoes"
                                        className="rounded-xl"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>
                                        If a dog chews shoes whose shoes does he
                                        choose?
                                    </p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-span-1"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="card w-72 lg:w-96 bg-base-100 shadow-xl">
                                <figure className="">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                        alt="Shoes"
                                        className="rounded-xl"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>
                                        If a dog chews shoes whose shoes does he
                                        choose?
                                    </p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-span-1"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="card w-72 lg:w-96 bg-base-100 shadow-xl">
                                <figure className="">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                        alt="Shoes"
                                        className="rounded-xl"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>
                                        If a dog chews shoes whose shoes does he
                                        choose?
                                    </p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto mt-8">
                    <div className="badge badge-accent badge-outline">
                        Sertificate
                    </div>
                    <div className="flex gap-4 mt-2">
                        <h1 className="text-2xl font-bold">My Sertificate</h1>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-4 mt-8">
                        <div
                            className="col-span-1"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <div className="card w-72 lg:w-96 bg-base-100 shadow-xl">
                                <figure className="">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                        alt="Shoes"
                                        className="rounded-xl"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>
                                        If a dog chews shoes whose shoes does he
                                        choose?
                                    </p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-span-1"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <div className="card w-72 lg:w-96 bg-base-100 shadow-xl">
                                <figure className="">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                        alt="Shoes"
                                        className="rounded-xl"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>
                                        If a dog chews shoes whose shoes does he
                                        choose?
                                    </p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-span-1"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            <div className="card w-72 lg:w-96 bg-base-100 shadow-xl">
                                <figure className="">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                        alt="Shoes"
                                        className="rounded-xl"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>
                                        If a dog chews shoes whose shoes does he
                                        choose?
                                    </p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto py-12 px-8 lg:p-24" id="skills">
                <div className="max-w-screen-lg lg:mx-auto">
                    <div className="grid lg:grid-cols-2 lg:gap-8 ">
                        <div className="col-span-1" data-aos="fade-right">
                            <h1 className="text-2xl font-bold">
                                I have skills in developing and programming
                            </h1>
                            <p className="text-gray-500 text-xs md:text-base mt-4 leading-7 text-justify">
                                I have basic knowledge of the PHP programming
                                language, Laravel framework, React Js, Node Js,
                                and MySQL database. I also have knowledge of
                                HTML, CSS, and JavaScript. I am currently
                                learning the Vue Js framework and the Nuxt Js
                                framework.
                            </p>
                        </div>
                        <div className="col-span-1" data-aos="fade-left">
                            <div className="grid grid-cols-2">
                                <div className="stat">
                                    <div className="stat-title">Laravel</div>
                                    <div className="stat-value">75%</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-title">React Js</div>
                                    <div className="stat-value">65%</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-title">Node Js</div>
                                    <div className="stat-value">50%</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-title">MySQL</div>
                                    <div className="stat-value">80%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="max-w-screen-lg mx-auto"
                id="news"
                data-aos="fade-up"
            >
                <div className="container mx-auto p-4">
                    <div className="badge badge-primary badge-outline">
                        News
                    </div>
                    <div className="flex gap-4 mt-2">
                        <h1 className="text-2xl font-bold">Latest News</h1>
                    </div>
                    <div className="grid lg:grid-cols-3 mt-4 gap-4">
                        {articles &&
                            articles.map((article, key) => (
                                <div className="col-span-1" key={key}>
                                    <Link href={route("index")}>
                                        <div className="card w-80 mx-auto bg-base-100 shadow-xl">
                                            <figure>
                                                <img
                                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                                    alt="Shoes"
                                                />
                                            </figure>

                                            <div className="card-body">
                                                <div className="badge badge-secondary">
                                                    NEW
                                                </div>
                                                <h2 className="card-title">
                                                    {article.title}
                                                </h2>
                                                <p className="mt-4">
                                                    If a dog chews shoes whose
                                                    shoes does he choose?
                                                </p>
                                                <div className="card-actions justify-end mt-4">
                                                    <div className="badge badge-outline">
                                                        Fashion
                                                    </div>
                                                    <div className="badge badge-outline">
                                                        Products
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            <div className="max-w-screen-lg mx-auto" id="contact">
                <div
                    data-aos="fade-in"
                    data-offset="200"
                    id="contact"
                    className="mt-20 max-w-xs sm:max-w-lg lg:max-w-2xl  mx-auto"
                >
                    <h2 className="mb-4 text-5xl tracking-tight font-extrabold  ">
                        Contact Me
                    </h2>
                    <p className="mb-8 lg:mb-16 font-light  sm:text-xl">
                        Love to hear from you, lets get in touch!
                    </p>
                    <form ref={form} onSubmit={sendEmail} className="space-y-8">
                        <p className="mb-8 text-sm text-primary">{message}</p>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium "
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Your email"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                className="block mb-2 text-sm font-medium "
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Your Subject"
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium "
                            >
                                Your message
                            </label>
                            <textarea
                                id="message"
                                rows="6"
                                name="message"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Leave a message..."
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium text-center transition ease-in-out delay-150 hover:bg-opacity-75 hover:scale-110 text-white rounded-lg bg-accent border border-teal-900 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Message{" "}
                            <i className="ms-1 fas fa-solid fa-arrow-right"></i>
                        </button>
                    </form>
                </div>
            </div>
        </App>
    );
}

export default HomePage;
