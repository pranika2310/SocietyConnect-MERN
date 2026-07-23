function NoticeCard({ title, date, category }) {

    return (

        <div className="notice-card">

            <span className="notice-category">
                {category}
            </span>

            <h3>{title}</h3>

            <p>{date}</p>

        </div> 

    );

}

export default NoticeCard;