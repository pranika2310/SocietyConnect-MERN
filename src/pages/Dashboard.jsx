import MainLayout from "../layouts/MainLayout";
import StatCard from "../components/StatCard";
import "../assets/styles/dashboard.css";
import ActionCard from "../components/ActionCard";

function Dashboard() {
    const quickActions = [
    {
        id: 1,
        title: "Raise Complaint",
    },
    {
        id: 2,
        title: "View Notices",
    },
    {
        id: 3,
        title: "Marketplace",
    },
    {
        id: 4,
        title: "Emergency Contacts",
    },
];
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
<h2>Quick Actions</h2>

<div className="actions-container">

    {quickActions.map((action) => (
        <ActionCard
            key={action.id}
            title={action.title}
        />
    ))}

</div>

            </div>
        </MainLayout>
    );
}

export default Dashboard;