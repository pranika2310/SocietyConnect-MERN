import StatCard from "../components/StatCard";
import MainLayout from "../layouts/MainLayout";

function Dashboard() {
    return (
        <MainLayout>

            <h1>Welcome to SocietyConnect 👋</h1>

<p>Manage your society activities from one place.</p>

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

        </MainLayout>
    );
}

export default Dashboard;