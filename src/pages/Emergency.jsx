import MainLayout from "../layouts/MainLayout";
import EmergencyCard from "../components/EmergencyCard";
import emergency from "../data/emergency";
import "../assets/styles/emergency.css";

function Emergency() {

    return (
        <MainLayout>
            <div className="emergency-container">

                <h1>Emergency Contacts</h1>

                <div className="emergency-grid">

                    {emergency.map((contact) => (
                        <EmergencyCard
                            key={contact.id}
                            title={contact.title}
                            phone={contact.phone}
                            emoji={contact.emoji}
                        />
                    ))}

                </div>

            </div>
        </MainLayout>
    );

}

export default Emergency;