import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";

export default function Dashboard({ title, children, auth }) {
    return (
        <>
            <div className="flex h-screen">
                <Sidebar auth={auth} />
                <div className="flex-1">
                    <Topbar auth={auth} >
                        <h2 className="font-bold text-3xl text-primary">{title}</h2>
                    </Topbar>
                    <div className="p-10">{children}</div>
                </div>
            </div>
        </>
    );
}
