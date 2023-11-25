import Interest from '../Images/icons2 1.png'
import money_back from '../Images/icons3 1.png'
import approvalImg from '../Images/icons1 2.png'
import '../style/Approval.css'

function Approval () {
    return(
        <>
        <section className='approval'>
            <div className='container'>
                <div className='row mx-auto'>
                <div className='col-xl-4 col-md-6 justify-content-center approve-align'>
                    <img src={Interest} className='img-fluid approveImg' alt="collateral"/>
                    <p className='approval-text'>Low Interest Rate</p>
                </div>
                <div className='col-xl-4 col-md-6 justify-content-center approve-align'>
                    <img src={money_back} className='img-fluid approveImg' alt="trade"/>
                    <p className='approval-text'>Flexible Repayment Options</p>
                </div>
                <div className='col-xl-4 col-md-6 justify-content-center approve-align'>
                    <img src={approvalImg} className='img-fluid approveImg' alt="digital"/>
                    <p className='approval-text'>Fast Approval Process</p>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Approval