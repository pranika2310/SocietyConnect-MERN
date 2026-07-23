function EmergencyCard({title,phone,emoji}){

    return(

        <div className="emergency-card">

            <div className="emoji">

                {emoji}

            </div>

            <h2>{title}</h2>

            <p>{phone}</p>

            <button>

                Call

            </button>

        </div>

    );

}

export default EmergencyCard;