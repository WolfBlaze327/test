import React, {useState} from 'react';
import './Faqs.css';
import contactimg1 from './contactimg.webp';
import iconsvg from './wired-flat-18-location-pin.gif';
import iconsvg2 from './wired-flat-177-envelope-mail-send.gif';
import iconsvg3 from './wired-flat-981-consultation.gif';



const FAQs = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [fullNameError, setFullNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [messageError, setMessageError] = useState(null);
  const [data, setData] = useState
        (
          {
            FName: "",
          }
        )

  const handleSubmit = (event) => {
    console.log("test");
      event.preventDefault();
      
      // Form validation
      if (!fullName) {
        setFullName('Please enter your first name');
        return;
      }
      if (!email) {
        setEmailError('Please enter your email');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        setEmailError('Please enter a valid email');
        return;
      }
      if (!message) {
        setMessageError('Please enter your last name');
        return;
      }

      try{
        const response = fetch('https://v1.nocodeapi.com/wolfblaze/google_sheets/ShMylIlPrkStPfCt?tabId=Sheet3', 
        {
          method: 'POST',
          headers:
          {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify([[fullName, email, message, new Date().toLocaleString()]])
        });
        response.json();
        setData({...data, Full_Name: "", Email_Add: "",  Message: ""})
        
      } catch (err){
        console.log(err);
      }
      setFullName('');
      setEmail('');
      setMessage('');
      alert("Successfully Sent");

    };

    

  return (
  <>
  <main>
  <section className="contact-container">
  <img src={ contactimg1} type="image" alt="header" />
  <div className="container header-content">
    <div className="row">
      <div className="col-sm-6 content">
    <h1>How Can We Help?</h1>
    </div>
  </div>
  </div>
</section>

{/* contact form */}
  <div className="contact1">
    <div className="cont">
      <h1>Contact Us</h1>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium quidem nostrum soluta, fugit aliquid voluptatem asperiores aperiam ipsa ducimus reprehenderit quos explicabo. Dolorem, voluptas ea?</p> */}
    </div>
    <div className="container-contact1">
      <div className="contactInfo">
        <div className="box">
          <div className="icon"><img src={ iconsvg } alt="" /></div>
           <div className="text1">
            <h3>Address</h3>
            <p>Kalipayan Resort: Unit 2, Kalipayan Resort, Emilio Aguinaldo Highway, Salitran, Dasmariñas, Cavite</p>
            <p>Soutwoods - Carmona: Unit 2, Kalipayan Resort, Emilio Aguinaldo Highway, Salitran, Dasmariñas, Cavite</p>
           </div>
        </div>
        <div className="box">
          <div className="icon"><img src={ iconsvg3 } alt="" /></div>
           <div className="text1">
            <h3>Phone</h3>
            <p>+63 991 453 5356</p>
           </div>
        </div>
        <div className="box">
          <div className="icon"><img src={ iconsvg2 } alt="" /></div>
           <div className="text1">
            <h3>Email</h3>
            <p>black-marlin@gmail.com</p>
           </div>
        </div>
      </div>
      <div className="contactForm">
        <form onSubmit={handleSubmit}>
        <h2>Send Message</h2>
        <div className="inputBox">
          <input type="text" id="Full_Name"  name="Full_Name" required="required" value={fullName} onChange={(event) => { setFullName(event.target.value); setFullNameError(null); }} />
          <span>Full Name</span>
          {fullNameError && <span className='text-danger'>{fullNameError}</span>}
        </div>
        <div className="inputBox">
          <input type="text" id="Email_Add" name="Email_Add" required="required" value={email} onChange={(event) => { setEmail(event.target.value); setEmailError(null); }} />
          <span>Email</span>
          {emailError && <span className='text-danger'>{emailError}</span>}
        </div>
        <div className="inputBox">
          <textarea id="Message" name="Message" required="required" value={message} onChange={(event) => { setMessage(event.target.value); setMessageError(null); }}></textarea>
          <span>Type your Message...</span>
          {messageError && <span className='text-danger'>{messageError}</span>}
        </div>
        <div className="inputBox">
          <input type="Submit" name="" value="Send"  />
        </div>
        </form>
      </div>
    </div>
  </div>
<section>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.4736600749247!2d120.93525807584098!3d14.341978183354676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d4f69137eeef%3A0x5cc02fee86367de0!2sKalipayan%20Resort!5e0!3m2!1sen!2sph!4v1684246677102!5m2!1sen!2sph" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.8331142739416!2d121.04159910000001!3d14.321124600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d753249ef579%3A0x1270df0ff777fed4!2sSouthwoods%20Sports%20and%20Country%20Club!5e0!3m2!1sen!2sph!4v1684250574339!5m2!1sen!2sph" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</section>
{/* faqs */}
<section className="faqs-container">

<div className="wrapper">
      <h1 className="fqs">FAQs</h1>
    <div className="parent-tab">
      <input type="radio" name="tab" id="tab-1" checked/>
      <label for="tab-1">
        <span>Do you have female coaches?</span>
        <div className="icon"><i className="fas fa-plus"></i></div>
      </label>
      <div className="content">
        <p>Yes! We do have. You can request your preferred coach.</p>
      </div>
    </div>
    <div className="parent-tab">
      <input type="radio" name="tab" id="tab-2"/>
      <label for="tab-2">
        <span>Is it required to bring goggles, swim cap and kick board?</span>
        <div className="icon"><i className="fas fa-plus"></i></div>
      </label>
      <div className="content">
        <p>Yes! They are essential tools that can help you to swim comfortably especially if you are a beginner.</p>
      </div>
    </div>
    <div className="parent-tab tab-3">
      <input type="radio" name="tab" id="tab-3"/>
      <label for="tab-3" className="tab-3">
        <span>How deep is the pool?</span>
        <div className="icon"><i className="fas fa-plus"></i></div>
      </label>
      <div className="content">
        <div className="child-tab">
          <input type="checkbox" name="sub-tab" id="tab-4"/>
          <label for="tab-4">
            <span>Kalipayan Resort:</span>
            <div className="icon"><i className="fas fa-plus"></i></div>
          </label>
          <div className="sub-content">
            <p>3ft to 6ft</p>
          </div>
        </div>
        <div className="child-tab">
          <input type="checkbox" name="sub-tab" id="tab-5"/>
          <label for="tab-5">
            <span>Southwoods - Carmona</span>
            <div className="icon"><i className="fas fa-plus"></i></div>
          </label>
          <div className="sub-content">
            <p>3ft to 5ft</p>
          </div>
        </div>
      </div>
    </div>
    <div className="parent-tab">
      <input type="radio" name="tab" id="tab-6"/>
      <label for="tab-6">
        <span>How many students per coach</span>
        <div className="icon"><i className="fas fa-plus"></i></div>
      </label>
      <div className="content">
        <p>As much as possible we limit up to 3 students only per coach to give the best quality of teaching how to swim.</p>
      </div>
    </div>
  </div>
  </section>
  </main>
  </>
);
};
export default FAQs;