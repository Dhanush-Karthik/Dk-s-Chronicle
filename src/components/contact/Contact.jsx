import { FiMail } from "react-icons/fi";

import "./Contact.css";
import { useInView } from "react-intersection-observer";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

const Contact = () => {
  const {ref, inView} = useInView();
  const contactRef = ref;

  const form = useRef();

  const handleSubmit = () => {
    const firstName = document.getElementById("firstName").value;
    const firstNameRegex = /^[A-Za-z'-]+$/;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const phoneNumber = document.getElementById('phoneNumber').value;
    const phoneNumberRegex = /^(?:\+\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    const message = document.getElementById('message').value;

    let isValid = true;
    console.log(firstName)
    if(firstName===""){
      isValid = false;
      document.getElementById('firstNameError').textContent = "First Name is mandatory";
    }
    else if(!firstNameRegex.test(firstName)){
      isValid = false;
      document.getElementById('firstNameError').textContent = "Invalid First Name";
    }else{
      document.getElementById('firstNameError').textContent = "";
    }

    if(lastName!=="" && !firstNameRegex.test(lastName)){
      isValid = false;
      document.getElementById('lastNameError').textContent = "Invalid Last Name";
    }else{
      document.getElementById('lastNameError').textContent = "";
    }

    if(email===""){
      isValid = false;
      document.getElementById('emailError').textContent = "Email is mandatory";
    }
    else if(!emailRegex.test(email)){
      isValid = false;
      document.getElementById('emailError').textContent = "Invalid Email";
    }else{
      document.getElementById('emailError').textContent = "";
    }

    if(phoneNumber!=="" && !phoneNumberRegex.test(phoneNumber)){
      isValid = false;
      document.getElementById('phoneNoError').textContent = "Invalid Phone Number";
    }else{
      document.getElementById('phoneNoError').textContent = "";
    }

    if(message===""){
      isValid=false;
      document.getElementById('messageError').textContent = "Message is Mandatory";
    }else{
      document.getElementById('messageError').textContent = "";
    }

    isValid && emailjs.sendForm('service_bdsbx7o', 'template_h4kp2oj', form.current, 'sXzXOfh4DVKMQCbDb')
    .then((result) => {
        console.log(result.text);
        toast.success("Mail Sent", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
    }, (error) => {
        console.log(error.text);
        toast.error("Something went wrong", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
    });
  }
  return (
    <div ref={contactRef} className={`contact h-hidden ${inView?"h-show":"h-hidden"}`}>
      <div className="contact-header">
        <div className="contact-icon">
          <FiMail size={"18px"} />
        </div>
        <div className="contact-icon-name">CONTACT</div>
      </div>
      <div className="contact-content">
      <div className="contact-content-header">
            Let's Work <span className="highlight">Together!</span>
        </div>
        <div className="contact-content-sub">
            dhanushkarthik8@gmail.com
        </div>
        <form ref={form} className="contact-form">
          <div className="contact-form-namefield">
            <div className="contact-form-field">
              <div>FIRST NAME</div>
              <input id="firstName" name="first_name" className="form-input" placeholder="First Name" />
              <div id="firstNameError" className="formError"></div>
            </div>
            <div className="contact-form-field">
              <div>LAST NAME</div>
              <input id="lastName" name="last_name" className="form-input" placeholder="Last Name" />
              <div id="lastNameError" className="formError"></div>
            </div>
          </div>
          <div className="contact-form-detailfield">
            <div className="contact-form-field">
              <div>EMAIL</div>
              <input id="email" name="email" className="form-input" placeholder="Your Email address" />
              <div id="emailError" className="formError"></div>
            </div>
            <div className="contact-form-field">
              <div>PHONE</div>
              <input id="phoneNumber" name="phone_number" className="form-input" placeholder="Your Phone Number" />
              <div id="phoneNoError" className="formError"></div>
            </div>
          </div>
          <div className="contact-form-field">
            <div>MESSAGE</div>
            <textarea id="message" name="message" className="form-textarea" placeholder="Write your message here ..." />
            <div id="messageError" className="formError"></div>
          </div>
        </form>
        <div id="contact" className="contact-form-button" onClick={handleSubmit}>
            Sumbit
        </div>
      </div>
    </div>
  );
};

export default Contact;
