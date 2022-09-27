import { ReactComponent as MemeIcon } from "../../../img/meme-icon.svg";
import './nav.css';

export default function MemeGeneratorNav() {
    return (
        <nav>
            <div className="meme-nav">
                <div className="meme-logo-container">   
                    <div className="meme-icon">
                        <MemeIcon />
                    </div>
                    <div className="logo-text">
                        <span>MemeGenerator   </span>
                    </div>
                </div>
                <div>
                    <span>React course - Project3</span>
                </div>
            </div>
        </nav>
    );
}