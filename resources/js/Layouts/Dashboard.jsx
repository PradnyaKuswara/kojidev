import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";

export default function Dashboard({ title, children, auth }) {
    return (
        <>
            <div className="grid grid-cols-6 gap-20">
                <div className="col-span-1">
                    <Sidebar auth={auth} />
                </div>

                <div className="flex h-screen col-span-5  ">
                    <div className="flex-1">
                        <Topbar auth={auth}>
                            <h2 className="font-bold text-3xl text-primary">
                                {title}
                            </h2>
                        </Topbar>
                        <div className="  mt-8">{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
