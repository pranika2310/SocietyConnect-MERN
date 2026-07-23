function VisitorCard({ name, purpose, time, status }) {

    return (

        <div className="visitor-card">

            <h3>{name}</h3>

            <p><strong>Purpose:</strong> {purpose}</p>

            <p><strong>Time:</strong> {time}</p>

            <p><strong>Status:</strong> {status}</p>

        </div>

    );

}

export default VisitorCard;