import "../assets/styles/complaints.css";
import MainLayout from "../layouts/MainLayout";
import ComplaintForm from "../components/ComplaintForm";

function Complaints() {
    return (
        <MainLayout>

            <div className="complaints-container">

                <h1>Complaints</h1>

                <ComplaintForm />

            </div>

        </MainLayout>
    );
}

export default Complaints;