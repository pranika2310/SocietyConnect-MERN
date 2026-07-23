import NoticeCard from "./NoticeCard";
import notices from "../data/notices";

function NoticeList() {

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