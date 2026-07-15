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
    {statistics.map((stat) => (
        <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
        />
    ))}
</div>

            </div>
        </MainLayout>
    );
}

export default Dashboard;