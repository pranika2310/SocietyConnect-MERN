import MainLayout from "../layouts/MainLayout";
import "../assets/styles/settings.css";

function Settings() {

    return (

        <MainLayout>

            <div className="settings-container">

                <h1>Settings</h1>

                <div className="settings-card">

                    <h3>Theme</h3>

                    <button>Light Mode</button>

                    <button>Dark Mode</button>

                </div>

                <div className="settings-card">

                    <h3>Notifications</h3>

                    <label>
                        <input type="checkbox" defaultChecked />
                        Email Notifications
                    </label>

                    <label>
                        <input type="checkbox" />
                        SMS Notifications
                    </label>

                </div>

                <div className="settings-card">

                    <h3>Privacy</h3>

                    <button>Change Password</button>

                </div>

            </div>

        </MainLayout>

    );

}

export default Settings;