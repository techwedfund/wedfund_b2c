import { useRef, useState } from 'react';
import '../style/ContactUs.css';
import EmailJs from '@emailjs/browser';

function ContactUs() {
  const formData = useRef();

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    // Validate Name
    if (!formData.current.name.value.trim()) {
      errors.name = 'Name is required';
    }

    // Validate Email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!formData.current.email.value.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.current.email.value)) {
      errors.email = 'Invalid email format';
    }

    // Validate Message
    if (!formData.current.message.value.trim()) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      EmailJs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICEID,
        process.env.REACT_APP_EMAILJS_TEMPLATEID,
        formData.current,
        process.env.REACT_APP_EMAILJS_PUBLICKEY
      )
        .then((res) => {
            alert(`Thank You, ${formData.current.name.value} we will reach you soon.`)
            formData.current.name.value = '';
            formData.current.email.value = '';
            formData.current.message.value = '';
            console.log(res.text);
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <>
      <section className="contact-us" id="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6 contact-align">
              <h1 className="contactUs-head">Contact Us Now</h1>
              <p className="contactUs-para">
                Complete the contact form below to get in touch with us. We are here to assist you with any inquiries or requests you may have.
              </p>
            </div>
            <div className="col-md-6 contact-align">
              <form action="" ref={formData} onSubmit={formSubmit}>
                <div className="contactUs-style">
                  <div className={`mb-3 col-md-6 ${formErrors.name ? 'has-error' : ''}`}>
                    <label htmlFor="exampleInputName" className="form-label formLableEdit">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Enter Name"
                    />
                    {formErrors.name && <div className="error-message">{formErrors.name}</div>}
                  </div>
                  <div className={`mb-3 col-md-6 ${formErrors.email ? 'has-error' : ''}`}>
                    <label htmlFor="exampleInputEmail" className="form-label formLableEdit">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter Email"
                    />
                    {formErrors.email && <div className="error-message">{formErrors.email}</div>}
                  </div>
                </div>
                <div className={`mb-3 inputMessage ${formErrors.message ? 'has-error' : ''}`}>
                  <label htmlFor="exampleInputMessage" className="form-label formLableEdit" id="message-align">
                    Message
                  </label>
                  <textarea type='text' className='form-control' id='messasge' name='message' placeholder='Enter Message'/>
                  {formErrors.message && <div className="error-message">{formErrors.message}</div>}
                </div>
                <div className="mb-3 text-end-btn">
                  <button className="button" type="submit">
                    <span>Send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;