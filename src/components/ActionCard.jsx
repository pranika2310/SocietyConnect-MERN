import { Link } from "react-router-dom";

function ActionCard(props) {
    return (
        <Link
            to={props.link}
            className="action-card"
        >
            <div className="action-icon">
                {props.icon}
            </div>

            <h3>{props.title}</h3>

            <p>{props.description}</p>
        </Link>
    );
}

export default ActionCard;