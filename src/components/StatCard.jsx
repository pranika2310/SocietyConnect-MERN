function StatCard({ title, value, icon }) {

    return (

        <div className="stat-card">

            <div className="stat-icon">
                {icon}
            </div>

            <div className="stat-content">

                <h2>{value}</h2>

                <p>{title}</p>

            </div>

        </div>

    );

}

export default StatCard;