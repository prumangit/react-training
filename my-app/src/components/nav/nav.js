import logo from "../../logo.svg";
import './nav.css';

export default function Nav() {
    return(
        <nav class="header">
            <div className="nav-container"> 
                <div className="logo-container">
                    <img src={logo} className="app-logo"></img>
                    <div>ReactFacts</div>
                </div>
                <div className="course-name">React Course - Project1 </div>
            </div>
        </nav>
    )
}