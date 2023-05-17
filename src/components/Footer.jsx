import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import ModalTracker from './ModalTracker';


const Footer = () => {

  const [modalShow, setModalShow] = React.useState(false);

    return(
        <>
        <section className="site_footer">
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="menu">
      <li class="menu__item"><NavLink to="/" exact className="menu__link">HOME</NavLink></li>
        <li class="menu__item"><NavLink to="/Programs" className="menu__link">PROGRAMS</NavLink></li>
        <li class="menu__item"><NavLink to="/Gallery" className="menu__link">GALLERY</NavLink></li>
        <li class="menu__item"><NavLink to="/FAQs" className="menu__link">FAQs</NavLink></li>
        <li class="menu__item">
          <a class="menu__link" href="#footer" onClick={() => setModalShow(true)}>
            SESSION TRACKER
          </a>
          <ModalTracker show={modalShow} onHide={() => setModalShow(false)}/>
        </li>
      </ul>
      
      <ul class="social-icon">
        <li class="social-icon__item"><a class="social-icon__link" href="https://www.facebook.com/profile.php?id=100083111777740" target="_blank">
            <ion-icon name="logo-facebook"></ion-icon>
          </a></li>
        <li class="social-icon__item"><a class="social-icon__link" href="/">
            <ion-icon name="logo-twitter"></ion-icon>
          </a></li>
        <li class="social-icon__item"><a class="social-icon__link" href="/">
            <ion-icon name="logo-instagram"></ion-icon>
          </a></li>
      </ul>
      <p>&copy;2022 Black Marlin Swimming Club | All Rights Reserved</p>
    </footer>
  </section>
        </>
    )
}

export default Footer;
