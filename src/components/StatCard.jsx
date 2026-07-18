function StatCard(props) {
    return (
        <div className="stat-card">

            <div className="stat-icon">
                {props.icon}
            </div>

            <div>

                <h3>{props.title}</h3>

                <p>{props.value}</p>

            </div>

        </div>
    );
}

export default StatCard;