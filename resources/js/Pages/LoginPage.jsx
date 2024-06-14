import React from "react";
import { useForm, Head } from "@inertiajs/react";
import HeroLogin from "../../../public/assets/images/hero-login.jpg";

export default function LoginPage() {
    const { data, setData, post, errors, processing } = useForm({
        email: "",
        password: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("login.store"));
    }

    return (
        <>
            <Head title="Login" />
            <section className="bg-base-100 min-h-screen flex box-border justify-center items-center">
                <div className="bg-neutral rounded-2xl h-screen lg:h-full flex max-w-3xl p-8 items-center">
                    <div className="md:w-1/2 px-8">
                        <h2 className="font-bold text-3xl text-primary">
                            Login
                        </h2>
                        <p className="text-sm mt-4 text-primary">
                            If you already a member, easily log in now.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4"
                        >
                            <input
                                className="p-2 mt-8 rounded-xl border"
                                type="email"
                                placeholder="Email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <p className="text-error text-xs">{errors.email}</p>
                            <input
                                className="p-2 rounded-xl border w-full"
                                type="password"
                                id="password"
                                placeholder="Password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            <p className="text-error text-xs">
                                {errors.password}
                            </p>
                            <button
                                disabled={processing}
                                className="bg-primary text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                                type="submit"
                            >
                                Login
                            </button>
                        </form>
                        <div className="mt-10 text-sm border-b border-primary text-primary py-5 playfair tooltip">
                            Forget password?
                        </div>
                    </div>
                    <div className="md:block hidden w-1/2">
                        <img
                            className="rounded-2xl aspect-square"
                            src={HeroLogin}
                            alt="login form image"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
