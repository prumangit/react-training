import cardImg from "../../../img/airbnb-card1.png";
import './card.css';

export default function AirbnbCard(props) {
    const { rating, reviews,img,country,cost,description, openSlots } = {...props.data};
    let status = '';
    if(openSlots === 0) {
        status = (<span className="status">SOLD OUT</span>);
    }

    return (
        <div className="card-container">
            <div className="card-img-status-container">
                <div>
                    <img className="card-img" src={img.airbnbcard1}></img>
                </div>
                <div className="status-container">
                    {status}
                </div>
            </div>
            <div className="card-content-container">
                <div>
                    <span><svg  className="rate-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg></span>
                    <span>{rating} <span className="gray-color">({reviews}) . {country}</span></span>
                </div>
                <div>
                    <span className="skill">{description}</span>
                </div>
                <div>
                    <span>from ${cost} <span className="gray-color">/ person</span></span>
                </div>
            </div>
        </div>
    )
}