import VisitorCard from "./VisitorCard";
import visitors from "../data/visitors";

function VisitorList() {

    return (

        <div className="visitor-grid">

            {visitors.map((visitor) => (

                <VisitorCard
                    key={visitor.id}
                    name={visitor.name}
                    purpose={visitor.purpose}
                    time={visitor.time}
                    status={visitor.status}
                />

            ))}

        </div>

    );

}

export default VisitorList;