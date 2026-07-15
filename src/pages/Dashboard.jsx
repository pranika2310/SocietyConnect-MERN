import MainLayout from "../layouts/MainLayout";
import StatCard from "../components/StatCard";
import "../assets/styles/dashboard.css";

function Dashboard() {
    return (
        <MainLayout>
            <div className="dashboard-container">

                <h1>Welcome to SocietyConnect 👋</h1>

                <p>
                    Manage your society activities from one place.
                </p>

                <div className="stats-container">

                    <StatCard
                        title="Total Notices"
                        value="12"
                    />

                    <StatCard
                        title="Pending Complaints"
                        value="5"
                    />

                    <StatCard
                        title="Marketplace Items"
                        value="18"
                    />

                    <StatCard
                        title="Visitors Today"
                        value="9"
                    />

                </div>

            </div>
        </MainLayout>
    );
}

export default Dashboard;