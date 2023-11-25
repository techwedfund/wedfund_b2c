import '../style/Hero.css'
import heroImg from '../Images/uuu.png'

function Hero () {
    return(
        <>
        <section className="">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 heroSection">
                        <h1 className='heroHead'>Get Quick Personal <br /><span style={{color:'#6c0505'}}>Loans</span></h1>
                        <p className='heroPara'>Apply online and get approved for personal loans in minutes. <br/>No hassle, no paperworks.</p>
                        <div className='text-center mt-4'>
                            <a className='btn heroBtn' href='https://portal.fibe.in/co-branded?utm_source=Wedfund'>Apply Now</a>
                        </div>
                    </div>
                    <div className="col-md-6" id='heroImg-sec'>
                        <img src={heroImg} alt='heroImg' id='heroImg' className='img-fluid'/>
                    </div>
                </div>
            </div>
        </section>        
        </>
    )
}

export default Hero