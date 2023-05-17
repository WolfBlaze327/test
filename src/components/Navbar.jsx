import React, { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import ModalTracker from './ModalTracker';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuBtnRef = useRef(null);
  const navigationRef = useRef(null);
  const [ navbar , setNavbar] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    function handleClick(event) {
      if (event.target !== menuBtnRef.current) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeBackground = () => {
    if(window.scrollY >=1) {
      setNavbar(true)
    } else {
      setNavbar(false )
    }
  };

  window.addEventListener('scroll', changeBackground);


  return (
    <header className={navbar ? 'navbar1 active' : 'navbar1'}>
      <NavLink to="/" className="brand1 a">
      <img width="62vw" alt="logo" src='./img/BMAC_logo.png' />Black<span className="color-logo1">Marlin</span>
      </NavLink>
      <div className={`menu-btn ${isMenuOpen ? "active" : ""}`} ref={menuBtnRef} onClick={handleMenuClick}></div>
      <div className={`navigation1 ${isMenuOpen ? "active" : ""}`} ref={navigationRef}>
        <div className="navigation1-items1">
          <NavLink to="/" exact className="a">HOME</NavLink>
          <NavLink to="/Programs" className="a">PROGRAMS</NavLink>
          <NavLink to="/Gallery" className="a">GALLERY</NavLink>
          <NavLink to="/AboutUs" className="a">ABOUT US</NavLink>
          <NavLink to="/FAQs" className="a">FAQs</NavLink>
          <a className="a" href="#footer" onClick={() => setModalShow(true)}>
            SESSION TRACKER
          </a>
          <ModalTracker show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
      </div>
    </header>
  );
}

export default NavBar;






// import React , {useEffect} from 'react';
// import './Navbar.css';
// import { NavLink } from 'react-router-dom';
// import $ from 'jquery';


// const Navbar = () => {

//   function animation(){
//     var tabsNewAnim = $('#navbarSupportedContent');
//     var activeItemNewAnim = tabsNewAnim.find('.active');
//     var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
//     var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
//     var itemPosNewAnimTop = activeItemNewAnim.position();
//     var itemPosNewAnimLeft = activeItemNewAnim.position();
//     $(".hori-selector").css({
//       "top":itemPosNewAnimTop.top + "px", 
//       "left":itemPosNewAnimLeft.left + "px",
//       "height": activeWidthNewAnimHeight + "px",
//       "width": activeWidthNewAnimWidth + "px"
//     });
//     $("#navbarSupportedContent").on("click","li",function(e){
//       $('#navbarSupportedContent ul li').removeClass("active");
//       $(this).addClass('active');
//       var activeWidthNewAnimHeight = $(this).innerHeight();
//       var activeWidthNewAnimWidth = $(this).innerWidth();
//       var itemPosNewAnimTop = $(this).position();
//       var itemPosNewAnimLeft = $(this).position();
//       $(".hori-selector").css({
//         "top":itemPosNewAnimTop.top + "px", 
//         "left":itemPosNewAnimLeft.left + "px",
//         "height": activeWidthNewAnimHeight + "px",
//         "width": activeWidthNewAnimWidth + "px"
//       });
//     });
//   }

//   useEffect(() => {
    
//     animation();
//     $(window).on('resize', function(){
//       setTimeout(function(){ animation(); }, 500);
//     });
    
//   }, []);

//   return (
    
//   <nav className="navbar navbar-expand-lg navbar-mainbg pb-0">
//     <div className='container'>
//         <img width="62vw" src='./img/BMAC_logo.png' alt="logo" />
//       <NavLink className="navbar-brand navbar-logo" to="/" exact>
//         <span className='logo_name'>BLACK</span> MARLIN
//       </NavLink>
    
    
//       <button 
//         className="navbar-toggler"
//         onClick={ function(){
//           setTimeout(function(){ animation(); });
//         }}
//         type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <i className="fas fa-bars text-white"></i>
//       </button> 
//       <div 
//         className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav ml-auto">            
//             <div className="hori-selector">
//               <div className="left"></div>
//               <div className="right"></div>
//             </div>            
//             <li className="nav-item active">
//               <NavLink className="nav-link" to="/" exact>
//               <i className="bi bi-house-fill"></i>Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/Programs" exact>
//               <i className="far fa-clone"></i>Programs
//               </NavLink> 
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/Gallery" exact>
//               <i className="bi bi-file-earmark-image"></i>Gallery
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/AboutUs" exact>
//               <i className="bi bi-diagram-3"></i>About Us
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/Faqs" exact>
//               <i className="bi bi-question-square"></i>FAQs
//               </NavLink>
//             </li>
//         </ul>
//       </div>      
//     </div>
//   </nav>
//   )
// }
// export default Navbar;