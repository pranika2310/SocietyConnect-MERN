import MainLayout from "../layouts/MainLayout";
import VisitorList from "../components/VisitorList";
import "../assets/styles/visitors.css";

function Visitors() {

    return (

        <MainLayout>

            <div className="visitors-container">

                <h1>Visitor Management</h1>

                <VisitorList />

            </div>

        </MainLayout>

    );

}

export default Visitors;