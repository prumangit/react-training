const AppLogo = (
        <div className="logo-container">
        <img className="logo" src="./download.svg"></img>
    </div>
    )
    
function Content() {
    return (
        <div className="app-content">
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars in Git</li>
                <li>Is maintained by FB</li>
            </ul>
        </div>
    )
}




ReactDOM.render(<div><Content /></div>, document.getElementById("root"))