import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from '../Images/logo.png'
import { Link } from "react-router-dom";
import '../style/Navbar.css'

function Navbar () {
    
    let location = useLocation();
    useEffect( () => {},[location])

    const redirectService = () => {
        const Service = document.getElementById('service')

        if(Service){
            Service.scrollIntoView({behavior: 'smooth'})
        }
    }
    const redirectAbout = () => {
        const aboutus = document.getElementById('aboutus');

        if(aboutus){
            aboutus.scrollIntoView({behavior: 'smooth'})
        }
    }
    const redirectContact = () => {
        const contact = document.getElementById('contact-us')

        if (contact) {
            contact.scrollIntoView({behavior: 'smooth'})
        }
    }
    return(
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} rel="noopener noreferrer" className='img-fluid logo' alt='logo' />WedFund</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className={`nav-link ${location.pathname==="/"? "active": ""} px-5`} rel="noopener noreferrer" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link ${location.pathname==="/how-it-works"? "active": "#6c0505"} px-5` } rel="noopener noreferrer" onClick={redirectService}  to="/#service">Services</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link ${location.pathname==="/about"? "active": "#6c0505"} px-5` } rel="noopener noreferrer" onClick={redirectAbout} to="/#aboutus" >About Us</Link>
                        </li>
                        {/* <li className="nav-item">
                        <Link className={`nav-link ${location.pathname==="/careers"? "active": ""} px-5` } rel="noopener noreferrer"  to="/careers" >Careers</Link>
                        </li> */}
                        {/* <li className="nav-item">
                        <Link className="nav-link px-5" to="https://www.lendingkart.com/dashboard/auth" rel="noopener noreferrer" target='_blank'>Track Your Application</Link>
                        </li> */}
                        <li className="nav-item">
                        <Link className={`nav-link ${location.pathname==="/#contact"? "active": "#6c0505"} px-5` }  rel="noopener noreferrer"  to="/#contact" onClick={redirectContact}>Contact Us</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar