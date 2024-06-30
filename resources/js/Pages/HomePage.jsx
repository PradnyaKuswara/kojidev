import * as React from "react";
import emailjs from "@emailjs/browser";
import { Head, Link } from "@inertiajs/react";
import App from "../Layouts/App";
import Typewriter from "../Components/Typewriter";
import Slider from "react-infinite-logo-slider";

import imageKoji from "../../../public/assets/images/kuswara2.jpg";
import { TailwindcssOriginal } from "devicons-react";
import { LaravelOriginal } from "devicons-react";
import { ReactOriginal } from "devicons-react";
import { AlpinejsOriginal } from "devicons-react";
import { MysqlOriginalWordmark } from "devicons-react";
import { Html5Original } from "devicons-react";
import { Css3Original } from "devicons-react";
import { BootstrapOriginal } from "devicons-react";

function HomePage({ auth, articles, sertificates }) {
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
                className="relative pt-12 overflow-hidden sm:pt-16 min-h-screen flex items-center justify-center"
                id="home"
            >
                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="relative mt-12 -mb-4 sm:-mb-10 lg:-mb-12 sm:mt-16 lg:mt-24">
                        <div className="absolute top-0 -left-64 transform -translate-x-1/2">
                            <svg
                                className="blur-3xl filter"
                                style={{ filter: "blur(64px)" }}
                                width="645"
                                height="413"
                                viewBox="0 0 645 413"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M181.316 218.778C86.2529 123.715 -63.7045 134.94 31.3589 39.8762C126.422 -55.1873 528.427 41.1918 623.49 136.255C718.554 231.319 470.678 289.068 375.614 384.131C280.551 479.195 276.38 313.842 181.316 218.778Z"
                                    fill="url(#d)"
                                />
                                <defs>
                                    <linearGradient
                                        id="d"
                                        x1="665.741"
                                        y1="178.506"
                                        x2="296.286"
                                        y2="474.62"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset="0%" stopColor="#06b6d4" />
                                        <stop
                                            offset="100%"
                                            stopColor="#a855f7"
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <div className="absolute inset-0">
                            <img
                                className="object-cover w-full h-full opacity-50"
                                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="relative mt-12 -mb-4 sm:-mb-10 lg:-mb-12 sm:mt-16 lg:mt-24">
                        <div className="absolute -top-40  right-[-50rem] transform -translate-x-1/2">
                            <svg
                                className="blur-3xl filter"
                                style={{ filter: "blur(64px)" }}
                                width="645"
                                height="413"
                                viewBox="0 0 645 413"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M181.316 218.778C86.2529 123.715 -63.7045 134.94 31.3589 39.8762C126.422 -55.1873 528.427 41.1918 623.49 136.255C718.554 231.319 470.678 289.068 375.614 384.131C280.551 479.195 276.38 313.842 181.316 218.778Z"
                                    fill="url(#d)"
                                />
                                <defs>
                                    <linearGradient
                                        id="d"
                                        x1="665.741"
                                        y1="178.506"
                                        x2="296.286"
                                        y2="474.62"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset="0%" stopColor="#06b6d4" />
                                        <stop
                                            offset="100%"
                                            stopColor="#a855f7"
                                        />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <div className="absolute inset-0">
                            <img
                                className="object-cover w-full h-full opacity-50"
                                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-sm font-normal tracking-widest uppercase">
                            <span className="text-transparent text-sm md:text-base bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                                <Typewriter
                                    text=" Hey There, I'm I Gusti Ngurah A Pradnya Kuswara"
                                    delay={100}
                                    infinite
                                />
                            </span>
                        </p>
                        <h1 className="mt-8 text-3xl leading-[2.8rem]  text-white sm:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6 xl:leading-[4rem] animate-fade-up animate-delay-150">
                            Building Intuitive Web Experiences with Passion
                        </h1>

                        <div className="flex flex-col items-center justify-center px-8 mt-12 space-y-5 sm:space-y-0 sm:px-0 sm:space-x-5 sm:flex-row">
                            <div className="relative inline-flex items-center justify-center w-full sm:w-auto group">
                                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                                <a
                                    href="/#contact"
                                    title=""
                                    className=" relative inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full sm:w-auto animate-wiggle animate-infinite"
                                    role="button"
                                >
                                    Hire Me
                                </a>
                            </div>

                            <a
                                href="/#about"
                                title=""
                                className="inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white transition-all duration-200 bg-black border border-gray-600 rounded-full sm:w-auto hover:border-white"
                                role="button"
                            >
                                Explore Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Slider
                    width="250px"
                    duration={40}
                    pauseOnHover={false}
                    blurBorders={false}
                    blurBoderColor={"#fff"}
                >
                    <Slider.Slide>
                        <Html5Original size="80" />
                    </Slider.Slide>
                    <Slider.Slide>
                        <Css3Original size="80" />
                    </Slider.Slide>
                    <Slider.Slide>
                        <BootstrapOriginal size="80" />
                    </Slider.Slide>
                    <Slider.Slide>
                        <TailwindcssOriginal size="80" />
                    </Slider.Slide>
                    <Slider.Slide>
                        <LaravelOriginal size="80" />
                    </Slider.Slide>

                    <Slider.Slide>
                        <ReactOriginal size="80" />
                    </Slider.Slide>
                    <Slider.Slide>
                        <AlpinejsOriginal size="80" />
                    </Slider.Slide>
                    <Slider.Slide>
                        <MysqlOriginalWordmark size="100" />
                    </Slider.Slide>
                </Slider>
            </div>

            <div
                className="max-w-screen-lg lg:mx-auto lg:my-36 mt-20"
                id="about"
            >
                <div className="container">
                    <div className="grid md:grid-cols-2 place-items-center gap-10">
                        <div className="col-span-1 order-2" data-aos="fade-up">
                            <img
                                src={imageKoji}
                                alt="About"
                                className="w-full h-96 object-cover rounded-md object-left-bottom "
                            />
                        </div>
                        <div
                            className="col-span-1 flex flex-col gap-3 order-1 mx-4"
                            data-aos="fade-right"
                        >
                            <div className="badge badge-primary badge-outline">
                                About me
                            </div>
                            <h1 className="text-3xl mt-2">
                                Web Developer based in Bali, Indonesia
                            </h1>
                            <p className="mt-4 leading-7 text-justify">
                                Motivated and enthusiastic Informatics student
                                with a passion for technology. Dedicated to
                                expanding knowledge and skills in programming
                                languages and software development
                                methodologies. Have basic knowledge of the PHP
                                programming language, Laravel framework, React
                                Js, Node Js, and MySQL database.
                            </p>
                            <div className="flex gap-4 mt-8">
                                <a
                                    target="_blank"
                                    href="https://drive.google.com/file/d/1a2IGiPmyOB_-J_4gX2lxm09_kuK-sIUB/view?usp=sharing"
                                    className="btn btn-primary btn-outline w-full"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full  p-10" id="portfolio">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex flex-col gap-4 mt-2 justify-center items-center ">
                        <div className="badge badge-accent badge-outline ">
                            Portofolio
                        </div>
                        <h1 className="text-2xl font-bold">
                            Creative Portfolio
                        </h1>
                    </div>
                    <div className="grid lg:grid-cols-3 mx-auto gap-4 mt-8">
                        <div
                            className="col-span-1"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="card w-full bg-base-100 shadow-xl rounded-none">
                                <figure className="">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                        alt="Shoes"
                                    />
                                </figure>
                            </div>
                        </div>
                        <div
                            className="col-span-1"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="card w-full bg-base-100 shadow-xl rounded-none">
                                <figure className="">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                        alt="Shoes"
                                    />
                                </figure>
                            </div>
                        </div>
                        <div
                            className="col-span-1"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="card w-full bg-base-100 shadow-xl rounded-none">
                                <figure className="">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                        alt="Shoes"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto mt-8">
                <div className="flex flex-col gap-4 mt-2 justify-center items-center">
                    <div className="badge badge-accent badge-outline">
                        Sertificate
                    </div>
                    <h1 className="text-2xl font-bold">My Sertificate</h1>
                </div>
                <div className="grid lg:grid-cols-4 gap-4 mt-8">
                    {sertificates.data.length > 0 ? (
                        sertificates.data.map((sertificate, key) => (
                            <div
                                key={key} // Jangan lupa tambahkan key
                                className="col-span-2"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <div className="border border-base-300 min-h-[28rem] relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-4xl w-full mx-auto">
                                    <div className="w-full flex flex-col space-y-4 p-3 flex-grow">
                                        <div className="flex item-center">
                                            <div className="badge badge-primary badge-outline text-xs p-4">
                                                {sertificate.organization}
                                            </div>
                                        </div>
                                        <h3 className="font-black md:text-3xl text-xl">
                                            {sertificate.name}
                                        </h3>
                                        <p className="md:text-base text-sm my-4 xl:leading-7 leading-5 text-justify">
                                            {sertificate.description}
                                        </p>
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-auto gap-2">
                                            <p className="text-sm text-success">
                                                Date:{" "}
                                                {`${sertificate.month_obtained} ${sertificate.year_obtained} - ${sertificate.month_expired} ${sertificate.year_expired}`}
                                            </p>
                                            <a
                                                target="_blank"
                                                href={sertificate.url}
                                                className="btn btn-primary w-full lg:w-52"
                                            >
                                                See More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-4">
                            <div className="flex justify-center items-center w-full h-96 bg-base-100 rounded-lg">
                                <p className="text-lg text-primary">
                                    No Sertificate
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div
                className="max-w-screen-xl mx-auto py-12 px-8 lg:p-24"
                id="skills"
            >
                <div className="max-w-screen-lg lg:mx-auto">
                    <div className="grid lg:grid-cols-2 lg:gap-8 ">
                        <div className="col-span-1" data-aos="fade-up">
                            <h1 className="text-2xl font-bold">
                                I have skills in developing and programming
                            </h1>
                            <p className="text-sm md:text-base mt-4 leading-7 text-justify">
                                I have basic knowledge of the PHP programming
                                language, Laravel framework, React Js, Node Js,
                                and MySQL database. I also have knowledge of
                                HTML, CSS, and JavaScript. I am currently
                                learning the Vue Js framework and the Nuxt Js
                                framework.
                            </p>
                        </div>
                        <div className="col-span-1" data-aos="fade-up">
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
                        {articles.data.length > 0 ? (
                            articles.data.map((article, key) => (
                                <div className="col-span-1" key={key}>
                                    <Link href={route("index")}>
                                        <article className="overflow-hidden rounded-lg shadow-lg">
                                            <a href="#">
                                                <img
                                                    alt="Placeholder"
                                                    className="block h-auto w-full"
                                                    src="https://picsum.photos/600/400/?random"
                                                />
                                            </a>

                                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                                <h1 className="text-lg">
                                                    <a
                                                        className="no-underline hover:underline text-gray-500"
                                                        href="#"
                                                    >
                                                        Article Title
                                                    </a>
                                                </h1>
                                                <p className="text-gray-200 text-xs">
                                                    24 Agustus 2021
                                                </p>
                                            </header>

                                            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                                <a
                                                    className="flex items-center no-underline hover:underline text-gray-500"
                                                    href="#"
                                                >
                                                    <img
                                                        alt="Placeholder"
                                                        className="block rounded-full"
                                                        src="https://picsum.photos/32/32/?random"
                                                    />
                                                    <p className="ml-2 text-sm">
                                                        Author Name
                                                    </p>
                                                </a>
                                                <a
                                                    className="no-underline text-grey-darker hover:text-red-dark"
                                                    href="#"
                                                >
                                                    <span className="hidden">
                                                        Like
                                                    </span>
                                                    <i className="fa fa-heart"></i>
                                                </a>
                                            </footer>
                                        </article>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-3">
                                <div className="flex justify-center items-center w-full h-96 bg-base-100 rounded-lg">
                                    <p className="text-lg text-primary">
                                        No Articles
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-screen-lg mx-auto mb-10" id="contact">
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
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
