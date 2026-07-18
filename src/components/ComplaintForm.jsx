import { useState } from "react";

function ComplaintForm() {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log({
            title,
            category,
            description,
        });
    };

    return (
        <form className="complaint-form" onSubmit={handleSubmit}>

            <h2>Raise Complaint</h2>

            <input
                type="text"
                placeholder="Complaint Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">Select Category</option>
                <option value="Water">Water</option>
                <option value="Electricity">Electricity</option>
                <option value="Security">Security</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Other">Other</option>
            </select>

            <textarea
                rows="5"
                placeholder="Describe your complaint"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button type="submit">
                Submit Complaint
            </button>

        </form>
    );
}

export default ComplaintForm;