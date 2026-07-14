import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

function Landing() {

    return (

        <MainLayout>

            <section className="hero">

                <div className="hero-left">

                    <h1>

                        Smart Society Management

                        <span> Made Simple.</span>

                    </h1>

                    <p>

                        Manage complaints, notices, visitors,
                        marketplace and community events
                        from one platform.

                    </p>

                    <div className="hero-buttons">

                        <Link
                            to="/signup"
                            className="primary-btn"
                        >
                            Get Started
                        </Link>

                        <Link
                            to="/login"
                            className="secondary-btn"
                        >
                            Login
                        </Link>

                    </div>

                </div>

                <div className="hero-right">

                    <div className="hero-image-placeholder">

                        Illustration

                    </div>

                </div>

            </section>

        </MainLayout>

    );

}

export default Landing;