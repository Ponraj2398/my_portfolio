import React from 'react';
// import './Contact.css';

const Contact = () => {
  const animateButton = (e) => {
    e.preventDefault();
    const button = e.target;
    button.classList.remove('animate');
    void button.offsetWidth; // Trigger reflow to restart the animation
    button.classList.add('animate');
    
    setTimeout(() => {
      button.classList.remove('animate');
    }, 700);
};

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>
      <form action="">
        <div className="input-group">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Subject" />
          </div>
        </div>
        <div className="input-group-2">
          <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
          <button className="bubbly-button" onClick={animateButton}>Send</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
