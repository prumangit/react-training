import './content.css';
import reactjs from '../../reactjs.png';

export default function Content() {
    return (
        <div className="content-container">
            <div className="content-heading">
                <h1>Fun facts about React</h1>
            </div>
            <div className="content-body" style={{ backgroundImage:`url(${reactjs})`,backgroundRepeat:"no-repeat" ,paddingTop: "36px",paddingLeft: "28px",height: "calc(100vh - 90px)",backgroundPosition: "right top"}}>
                <ul className='facts-list'>
                    <li>
                        Was first released in 2013
                    </li>
                    <li>
                        Was originally created by Jordan Walke
                    </li>
                    <li>
                        Has well over 100K stars on GitHub
                    </li>
                    <li>
                        Is maintained by Facebook
                    </li>
                    <li>
                        Powers thousands of enterprise apps, including mobile apps
                    </li>
                </ul>
            </div>
        </div>
    )
}