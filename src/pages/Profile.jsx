import MainLayout from "../layouts/MainLayout";
import "../assets/styles/profile.css";

function Profile() {

    const user = {
        name: "Pranika Saxena",
        email: "pranika@example.com",
        phone: "+91 9876543210",
        flat: "A-302",
        role: "Resident",
    };

    return (
        <MainLayout>

            <div className="profile-container">

                <div className="profile-card">

                    <div className="profile-avatar">
                        👩
                    </div>

                    <h2>{user.name}</h2>

                    <p>{user.role}</p>

                    <hr />

                    <div className="profile-details">

                        <p><strong>Flat:</strong> {user.flat}</p>

                        <p><strong>Email:</strong> {user.email}</p>

                        <p><strong>Phone:</strong> {user.phone}</p>

                    </div>

                    <button>Edit Profile</button>

                </div>

            </div>

        </MainLayout>
    );
}

export default Profile;