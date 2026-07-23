import {
    FaBullhorn,
    FaExclamationCircle,
    FaStore,
    FaUsers,
    FaClipboardList,
    FaBell,
    FaPhoneAlt
} from "react-icons/fa";
import MainLayout from "../layouts/MainLayout";
import StatCard from "../components/StatCard";
import ActionCard from "../components/ActionCard";
import NoticeCard from "../components/NoticeCard";

import "../assets/styles/dashboard.css";

function Dashboard() {

    const statistics = [
        {

            id: 1,
            title: "Total Notices",
            value: 12,
            icon: <FaBullhorn />,
        },
        {
            id: 2,
            title: "Pending Complaints",
            value: 5,
            icon: <FaExclamationCircle />,
        },
        {
            id: 3,
            title: "Marketplace Items",
            value: 18,
            icon: <FaStore />,
        },
        {
            id: 4,
            title: "Visitors Today",
            value: 9,
            icon: <FaUsers />,
        },
    ];

    const quickActions = [
        {
            id: 1,
            title: "Raise Complaint",
            description: "Report maintenance issues",
            link: "/complaints",
            icon: <FaClipboardList />,
        },
        {
            id: 2,
            title: "View Notices",
            description: "Latest society announcements",
            link: "/notices",
            icon: <FaBullhorn />,
        },
        {
            id: 3,
            title: "Marketplace",
            description: "Buy & Sell products",
            link: "/marketplace",
            icon: <FaStore />,
        },
        {
            id: 4,
            title: "Emergency",
            description: "Important contact numbers",
            link: "/emergency",
            icon: <FaPhoneAlt />,
        },
        {
            id: 5,
            title: "Visitors",
            description: "Manage visitor entries",
            link: "/visitors",
            icon: <FaUsers />,
        },
        {
            id: 6,
            title: "Profile",
            description: "View your profile",
            link: "/profile",
            icon: <FaUsers />,
        },
        {
            id: 7,
            title: "Settings",
            description: "Manage your preferences",
            link: "/settings",
            icon: <FaBell />,
        }
    ];

    const notices = [
        {
            id: 1,
            title: "Water Supply Maintenance",
            date: "20 July 2026",
            category: "Maintenance",
        },
        {
            id: 2,
            title: "Parking Rules Updated",
            date: "25 July 2026",
            category: "Rules",
        },
        {
            id: 3,
            title: "Independence Day Celebration",
            date: "15 August 2026",
            category: "Event",
        },
    ];

    return (
        <MainLayout>

            <div className="dashboard-container">

                <div className="welcome-banner">

                    <div>

                        <h1>Welcome Back 👋</h1>

                        <p>
                            Manage your society activities efficiently from one dashboard.
                        </p>

                    </div>

                    <div className="resident-count">

                        <h2>124</h2>

                        <span>Residents</span>

                    </div>

                </div>

                <div className="stats-container">
                    {statistics.map((stat) => (
                        <StatCard
                            key={stat.id}
                            title={stat.title}
                            value={stat.value}
                            icon={stat.icon}
                        />
                    ))}
                </div>

                <h2>Quick Actions</h2>

                <div className="actions-container">
                    {quickActions.map((action) => (
                        <ActionCard
                            key={action.id}
                            title={action.title}
                            description={action.description}
                            icon={action.icon}
                            link={action.link}
                        />
                    ))}
                </div>

                <h2>Recent Notices</h2>

                <div className="notice-container">
                    {notices.map((notice) => (
                        <NoticeCard
                            key={notice.id}
                            title={notice.title}
                            date={notice.date}
                        />
                    ))}
                </div>

            </div>

        </MainLayout>
    );
}

export default Dashboard;