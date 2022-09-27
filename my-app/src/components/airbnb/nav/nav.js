import airbnb from '../../../img/airbnb.png';
import './nav.css';

export default function AirbnbNav() {
    return (
        <nav>
            <div className='logo-container'>
                <div>
                    <img className='logo' src={airbnb} />
                </div>
                <div>
                    <span className='logo-name'>airbnb</span>
                </div>
            </div>
        </nav>
    );
}