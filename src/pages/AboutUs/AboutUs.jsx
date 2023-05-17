import React from "react";
import "./Aboutus.css";
import header2 from "./header2.jpg";
import aboutimg1 from './aboutimg1.jpeg';
import founderimg1 from './founderimg1.png';


const AboutUs = () => {

return (
<>
<main>
<section className="content-container">
  <img src={header2} type="image" alt="header" />
  <div className="container header-content">
    <div className="row">
      <div className="col-sm-6 content">
    <h1>Swim like <br/>a Pro.</h1>
    </div>
    <div className="col-sm-6">
      <p>BlackMarlin is the preferred training partner for swimmers and triathletes worldwide. We help you improve your technique, build your fitness and achieve your goals. An unrivalled experience that references “Swim like a Pro” wherever you are. </p>
    </div>
  </div>
  </div>
</section>
<section className="content-container2">
  <div className="container">
  <div className="row">
    <div className="col-md-6">
      <p className="text-primary text">WE GOT THIS
      </p>
              <h1 className="heading-xxl">
              OLYMPIC <br/> PHILOSOPHY
              </h1>
                <p> <br/>  All our coaches have competed at a professional level, either as a swimmer, triathlete or coach. They have many years of experience and knowledge at their disposal. Founder Johan Kenkhuis is an Olympic swimming medalli</p>
    </div>
    <div className="col-md-6">
      <img className="img1"  src={aboutimg1} alt="img1" width="100%" />
    </div>
  </div>
  </div>
</section>

<section className="content-container3">
  <div className="container">
  <div className="row">
    <div className="col-md-6">
    <img className="img1"  src={aboutimg1} alt="img1" width="100%" />
    </div>
    <div className="col-md-6">
    <p className="text-primary text2">FOR ALL LEVELS
      </p>
              <h1 className="heading-xxl">
              SWIMMERS &
              TRIATHLETES
              </h1>
                <p> <br/>  Every day we put together challenging workouts called “Swim of the Day” (SWOD), including a technique video, conditioning set and coach tips. Amongst others, through the BlackMarlin Analyser we provide you with personalised video feedback to improve your swimming.</p>
    </div>
  </div>
  </div>
</section>

<section className="content-container4">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <p><span>"</span> Our ambition is to improve the swimming of every swimmer or triathlete worldwide, regardless of their experience and initial fitness level. With our unique combination of technique and conditioning training, we make swimming both more challenging and more enjoyable. Train wherever you are. <span>"</span></p>
      </div>
      <div className="col-md-4">
        <img src={ founderimg1 } className="img1" alt="coach-img" />
      </div>
    </div>
  </div>
</section>


<section className="content-container5">
  <div className="container">
    <div className="row">
        <div className="col-md-4">
          <h3 className="heading-sm">SWIMMING POOLS</h3><br />
          <p>BlackMarlin provides the first training pool of its kind where swimmers and triathletes can train under professional supervision. Train at any time of the day, seven days a week.</p>
        </div>
        <br />
        <div className="col-md-4">
          <h3 className="heading-sm">TRAINING CAMPS & CLINICS</h3><br />
          <p>BlackMarlin organises Training Days, clinics and masterclasses for club teams, professional organisations and corporate events. </p>
        </div>
        <br />
        <div className="col-md-4">
          <h3 className="heading-sm">ACADEMY</h3><br />
          <p>We organize workshops about swimming, an inspirational speaker or an Olympic experience for your team. For coaches and clubs we offer education programs and consulting.</p>
        </div>
    </div>
  </div>
</section>

</main>
</>
);
};
export default AboutUs;