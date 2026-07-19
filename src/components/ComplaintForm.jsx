import { useState } from "react";

function ComplaintForm({ addComplaint }) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const [errors, setErrors] = useState({
        title: "",
        category: "",
        description: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = {
            title: "",
            category: "",
            description: "",
        };

        if (title.trim() === "") {
            newErrors.title = "Title is required";
        }

        if (category.trim() === "") {
            newErrors.category = "Please select a category";
        }

        if (description.trim() === "") {
            newErrors.description = "Description is required";
        }

        setErrors(newErrors);

        if (
            newErrors.title ||
            newErrors.category ||
            newErrors.description
        ) {
            return;
        }

        const complaint = {
            id: Date.now(),
            title,
            category,
            description,
            status: "Pending",
        };

        addComplaint(complaint);

        setTitle("");
        setCategory("");
        setDescription("");

        setErrors({
            title: "",
            category: "",
            description: "",
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

            {errors.title && <p className="error">{errors.title}</p>}

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

            {errors.category && (
                <p className="error">{errors.category}</p>
            )}

            <textarea
                rows="5"
                placeholder="Describe your complaint"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            {errors.description && (
                <p className="error">{errors.description}</p>
            )}

            <button type="submit">
                Submit Complaint
            </button>

        </form>
    );
}

export default ComplaintForm;