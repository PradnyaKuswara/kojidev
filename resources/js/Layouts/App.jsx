import * as React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ children, auth }) {
    React.useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return (
        <>
            <header>
                <Navbar auth={auth} />
            </header>

            <main className="min-h-screen">{children}</main>

            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
}
