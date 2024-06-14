import Dashboard from "../../Layouts/Dashboard";
import { Head} from "@inertiajs/react";

export default function MainDashboard({ auth }) {
    return (
        <>
            <Head title="Dashboard" />
            <Dashboard title="Dashboard" auth={auth}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="card bordered">
                        <div className="card-body">
                            <h2 className="card-title">Card Title</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Aenean ac elementum ex.
                                Maecenas nec tortor nec urna luctus eleifend.
                                Integer sit amet felis sit amet elit pharetra
                                tincidunt. Sed nec metus at est tincidunt
                                lacinia. Nam et semper justo.
                            </p>
                        </div>
                    </div>
                    <div className="card bordered">
                        <div className="card-body">
                            <h2 className="card-title">Card Title</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Aenean ac elementum ex.
                                Maecenas nec tortor nec urna luctus eleifend.
                                Integer sit amet felis sit amet elit pharetra
                                tincidunt. Sed nec metus at est tincidunt
                                lacinia. Nam et semper justo.
                            </p>
                        </div>
                    </div>
                    <div className="card bordered">
                        <div className="card-body">
                            <h2 className="card-title">Card Title</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Aenean ac elementum ex.
                                Maecenas nec tortor nec urna luctus eleifend.
                                Integer sit amet felis sit amet elit pharetra
                                tincidunt. Sed nec metus at est tincidunt
                                lacinia. Nam et semper justo.
                            </p>
                        </div>
                    </div>
                </div>
            </Dashboard>
        </>
    );
}
