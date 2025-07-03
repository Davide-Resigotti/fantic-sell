import React, { useState } from 'react';
import './Contacts.css';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

function Contacts() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFocus = (event) => {
    const label = event.target.closest('.input-group').querySelector('label');
    if (label) {
      label.classList.add('focused');
    }
  };

  const handleBlur = (event) => {
    const label = event.target.closest('.input-group').querySelector('label');
    if (label && !event.target.value) {
      label.classList.remove('focused');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { firstName, lastName, phone, email, message } = formState;

    const subject = encodeURIComponent('Interessato Vendita Fantic');
    const body = encodeURIComponent(`Nome: ${firstName}\nCognome: ${lastName}\nTelefono: ${phone}\nEmail: ${email}\n\nMessaggio:\n${message}`);

    const mailtoLink = `mailto:idavide.resi@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="main">

<div className="title">
      <Link to="/">
      <FaHome className='iconHome'/>
      </Link>
      <h2 >CONTATTI</h2>
    </div>


 

      <div className="subtitle">
        <h2>EMAIL : </h2>
        <a className='mailTel' href="mailto:idavide.resi@gmail.com">idavide.resi@gmail.com</a>
      </div>
  
{/* <div className="spacer"></div> */}

      <div className="subtitle">
        <h2>TELEFONO : </h2>
        <a className='mailTel' href="tel:+393703138629">+393703138629</a>
      </div>




   
      <div className="siti">
        <a href="https://www.subito.it/moto-e-scooter/fantic-50-casa-motard-2018-bergamo-597561070.htm?utm_medium=referral&utm_source=subito&utm_campaign=free-engagement-ad_detail" target="_blank" rel="noreferrer" >
          <img className='subito' src={process.env.PUBLIC_URL + '/subito.png'} alt=""  />
        </a>
        <a href="https://www.moto.it/moto-usate/fantic-motor/motard-50/motard-50-m-casa-2t-2018/9525909#google_vignette" target="_blank" rel="noreferrer" >
          <img className='subito' src={process.env.PUBLIC_URL + '/moto.jpg'} alt="" />
        </a>
      </div>



      <div className="form-container">
        <form id="contactForm" onSubmit={handleSubmit}>
          <h1>SONO INTERESSATO</h1>
          
          <div className="input-group">
            <label htmlFor="firstName">Nome</label>
            <div className="input-icon">
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                placeholder=" " 
                required 
                value={formState.firstName}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <i className="fas fa-user"></i>
            </div>
          </div>
          
          <div className="input-group">
            <label htmlFor="lastName">Cognome</label>
            <div className="input-icon">
              <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                placeholder=" " 
                required 
                value={formState.lastName}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <i className="fas fa-user"></i>
            </div>
          </div>
          
          <div className="input-group">
            <label htmlFor="phone">Telefono</label>
            <div className="input-icon">
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder=" " 
                required 
                value={formState.phone}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <i className="fas fa-phone"></i>
            </div>
          </div>
          
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <div className="input-icon">
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder=" " 
                required 
                value={formState.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          
          <div className="input-group">
            <label htmlFor="message">Messaggio</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              placeholder=" " 
              required 
              value={formState.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            ></textarea>
          </div>
          
          <button type="submit" id="submitBtn">INVIA</button>
        </form>
      </div>
      <br />



    </div>
  );
}

export default Contacts;
