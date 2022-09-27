import herobanner from "../../../img/hero-banner.jpeg";
import "./hero.css";
export default function AirbnbHero() {
    return (
        <div>
            <div className="hero-image-container">
                <img className="hero-img" src={herobanner} />
            </div>
            <div className="hero-content-container">
                <h2>
                    Online Experiences
                </h2>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    );
}