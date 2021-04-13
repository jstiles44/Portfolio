import React from "react";
import Layout from "../Shared/Layout/Layout.jsx";
import './Contact.css'

function Contact(props) {
  return (
    <Layout>
      <div className='contact-container'>
      <div>
        <h3>Contact Info</h3>
        <div>Email: jakestiles99@gmail.com</div>
        <div>Cell: 814-577-6479</div>
        <div>
          {" "}
          <a href="https://www.linkedin.com/in/jacob-stiles/">LinkedIn</a>
        </div>
      </div>
      <form className='contact-form'
        action="https://getform.io/f/f2959f5e-fbfc-4b7f-95cb-5c3f857d49c6"
        method="POST"
        >
          <div className='form-title'>Contact Form</div>
        <label className='name-input'>Name: 
        <input className='n-input' type="text" name="name" />
        </label>
        <label className='email-input'>Email: 
        <input className='e-input' type="email" name="email" />
        </label>
        <label className='message-input'>Message: 
        <input className='m-input' type="text" name="message" />
        </label>
        <button className='contact-button' type="submit">Send</button>
        </form>
        </div>
    </Layout>
  );
}

export default Contact;
