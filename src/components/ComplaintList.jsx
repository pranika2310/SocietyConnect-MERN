function ComplaintList({ complaints, deleteComplaint }) {
    return (
        <div className="complaints-list">

            <h2>Submitted Complaints</h2>

            {complaints.length === 0 ? (
                <p>No complaints submitted yet.</p>
            ) : (
                complaints.map((complaint) => (
                    <div
                        key={complaint.id}
                        className="complaint-card"
                    >
                        <h3>{complaint.title}</h3>

                        <p>
                            <strong>Category:</strong>{" "}
                            {complaint.category}
                        </p>

                        <p>{complaint.description}</p>

                        <span className="status pending">
                            {complaint.status}
                        </span>

                        <br />

                        <button
                            className="delete-btn"
                            onClick={() =>
                                deleteComplaint(complaint.id)
                            }
                        >
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default ComplaintList;