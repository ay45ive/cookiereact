export default function Cookie({ cookies, setCookies, cps}) {
    return(
        <div id="cookiecontainer">
            <p className="cookiecount">{cookies} cookies</p>
            <p className="cookiepersecond">{cps} cookies per second</p>
            <img onClick={() => setCookies(cookies + 1)} className="cookieimage" src="/src/assets/cookiereact.png" alt="cookiedisplay"/>
        </div>
    )
}