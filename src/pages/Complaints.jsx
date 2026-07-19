import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ComplaintForm from "../components/ComplaintForm";
import ComplaintList from "../components/ComplaintList";
import "../assets/styles/complaints.css";

function Complaints() {

    const [complaints, setComplaints] = useState([]);

    const addComplaint = (complaint) => {
        setComplaints([...complaints, complaint]);
    };

    const deleteComplaint = (id) => {
        setComplaints(
            complaints.filter(
                (complaint) => complaint.id !== id
            )
        );
    };

    return (
        <MainLayout>

            <div className="complaints-container">

                <h1>Complaints</h1>

                <ComplaintForm
                    addComplaint={addComplaint}
                />

                <ComplaintList
                    complaints={complaints}
                    deleteComplaint={deleteComplaint}
                />

            </div>

        </MainLayout>
    );
}

export default Complaints;