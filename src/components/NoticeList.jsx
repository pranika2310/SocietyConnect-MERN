import NoticeCard from "./NoticeCard";

function NoticeList() {

    const notices = [
        {
            id: 1,
            title: "Water Supply Maintenance",
            date: "20 July 2026",
            category: "Maintenance",
        },
        {
            id: 2,
            title: "Independence Day Celebration",
            date: "15 August 2026",
            category: "Event",
        },
        {
            id: 3,
            title: "Parking Rules Updated",
            date: "25 July 2026",
            category: "Rules",
        },
    ];

    return (

        <div className="notice-list">

            {notices.map((notice) => (

                <NoticeCard
                    key={notice.id}
                    title={notice.title}
                    date={notice.date}
                    category={notice.category}
                />

            ))}

        </div>

    );

}

export default NoticeList;