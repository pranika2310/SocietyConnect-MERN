function NoticeCard(props) {
    return (
        <div className="notice-card">
            <h4>{props.title}</h4>
            <p>{props.date}</p>
        </div>
    );
}

export default NoticeCard;