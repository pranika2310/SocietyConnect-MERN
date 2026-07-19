import MainLayout from "../layouts/MainLayout";
import NoticeList from "../components/NoticeList";
import "../assets/styles/notices.css";

function Notices() {
    return (
        <MainLayout>

            <div className="notices-container">

                <h1>Society Notices</h1>

                <NoticeList />

            </div>

        </MainLayout>
    );
}

export default Notices;