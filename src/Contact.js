import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_z6afbbs', 'template_99bjg09', form.current, {
        publicKey: '7w8B0rXua-gYF4Qtg',
      })
      .then(function
        (){
          alert('SUCCESS!');
          document.getElementById('form-content').reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='cont'>
        <h1>Contact Me</h1>

    <div className='form'>
    <form ref={form} onSubmit={sendEmail} id='form-content'>
      <label>Name:</label><br />
      <input type="text" name="user_name" id="user_name" required placeholder='Your Name'/><br />
      <label>Email:</label><br />
      <input type="email" name="reply_to" id="reply_to" required placeholder='Your Email'/><br />
      <label>Message:</label><br />
      <textarea name="message" required placeholder='Message Me'/><br />
      <button className='send1'><input type="submit" value="Send" id="id"/></button>
    </form>
    </div>
    </div>
  );
};

export default Contact;