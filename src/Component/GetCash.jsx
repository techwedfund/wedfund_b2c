// import rupee from '../Images/rupee (2) 1.png'
import cv from "../Images/bj1.png"
import social from '../Images/bj.png'
import '../style/GetCash.css'

function GetCash () {
    return(
        <>
        <section className='get_cash'>
            <div className='container'>
                <h1 className='getCash-head text-center'>Get Fast <span style={{color:"#6c0505"}}>Cash Now!</span></h1>
                <div className='row'>
                    {/* <div className='col-lg-12'> */}
                        {/* <div className='col-md-6 get_cash_align'>
                            <h1 className='getCash-head tex-start' style={{fontSize:"34px"}}>Convenient Loan Comparison Tool</h1>
                            <p className='getCash-para'>Our website offers a user-friendly loan comparison tool that allows you to easily compare multiple personal loan options. save time and effort by finding the best loan that suits your needs and financial situations.</p>
                        </div>
                        <div className='col-md-6 mx-auto text-center'>
                            <img src={rupee} className='img-fluid getCash_img' alt='rupee'/>
                        </div> */}
                        <br />
                    {/* </div> */}
                    {/* <div className='col-lg-12'> */}
                        <div className='col-md-6' id='cv'>
                            <img src={social} className='img-fluid' id='getCash_img' alt='cv'/>
                        </div>
                        <div className='col-md-6 get_cash_align'>
                            <h1 className='getCash-head tex-start'  style={{fontSize:"34px"}} id='getHead'>Secure Online Application System</h1>
                            <p className='getCash-para' id='getCash-para'>Our personal loan-giving website provides a secure online application system for quick and hassle-free loan requests. With advanced encryption technology, your personal information is protected throughout the application process, ensuring peace of mind and confidentiality.</p>
                        </div>
                        <br />
                    {/* </div> */}
                    {/* <div className='col-lg-12'> */}
                        <div className='col-md-6 get_cash_align'>
                            <h1 className='getCash-head' style={{fontSize:"34px"}}>Personalized Loan Recommendations</h1>
                            <p className='getCash-para tex-start'>Get personalized loan recommendations based on your financial profile, helping you find the best loan options on WedFund. Our advanced algorithm analyzes your information and matches it with the most suitable lenders, saving you time and effort.</p>
                        </div>
                        <div className='col-md-6 mx-auto text-center'>
                            <img src={cv} className='img-fluid getCash_img' alt='social'/>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </section>
        </>
    )
}

export default GetCash