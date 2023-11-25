import AboutUs from "./AboutUs"
import Approval from "./Approval"
import ContactUs from "./ContactUs"
import GetCash from "./GetCash"
import Hero from "./Hero"
import Services from "./Services"
import '../style/Home.css'
function Home () {
    return(
        <>
        <div>
        <Hero />
        <Approval />
        <Services />
        <AboutUs />
        <GetCash />
        <ContactUs />
        </div>
        </>
    )
}

export default Home