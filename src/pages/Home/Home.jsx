import './Home.css';
import React, { useState } from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Slider from "react-slick";
import HomeModal from './HomeModal';

const Home = () => {

  var settings = 
  {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: 
    [
      {
        breakpoint: 1450,
        settings: 
        {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1250,
        settings: 
        {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1150,
        settings: 
        {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1030,
        settings: 
        {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: 
        {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 550,
        settings: 
        {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: 
        {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [modalShow1, setModalShow1] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  function openModal(title, content) {
    setModalTitle(title);
    setModalContent(content);
    setModalShow1(true);
  }

  function closeModal() {
    setModalShow1(false);
  }


  return (
    <>
      {/* !--hero section--> */}
      <section className="home1">
        <video id="background-video" autoPlay loop muted playsInline className="adsvid">
          <source src="./video/heropagevideomain.mp4" type="video/mp4" />
        </video>
        <div className="content1">
          <h1 className="tracking-in-contract-bck-top">Swim.<br />like a pro</h1>
          <p className="tracking-in-expand">7 days without swimming makes one weak</p>
          <a href="#swim_strokes">Explore</a>
        </div>
        <div className="media-icons">
          <a href="/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </section>
      {/* <!---end of hero section--> */}

      <section className="first_section" id="swim_strokes">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h2 className='title'>
                <span className="primary">TYPES OF STROKES</span>
                <span className="secondary">
                  Enroll in any of our swimming technique courses right now.
                  Follow our coaches and body conditioning programs to learn how to enhance your swimming step by step. Available for all levels of swimming
                </span>
              </h2>
            </div>
            <div className="col-md-8">
              <div className="gallery-wrapper">
                <figure className="gallery-item">
                  <img src="./img/FreeStyle.jpg" alt="" className="item-image" />
                  <figcaption className="item-description">
                    <h2 className="role">freestyle</h2>
                    <span className="name">basics</span>
                  </figcaption>
                </figure>
                <figure className="gallery-item">
                  <img src="./img/BackStroke.jpg" alt="" className="item-image" />
                  <figcaption className="item-description">
                    <h2 className="role">back</h2>
                    <span className="name">Stroke</span>
                  </figcaption>
                </figure>
                <figure className="gallery-item">
                  <img src="./img/breastStroke.jpg" alt="" className="item-image" />
                  <figcaption className="item-description">
                    <h2 className="role">breast</h2>
                    <span className="name">stroke</span>
                  </figcaption>
                </figure>
                <figure className="gallery-item">
                  <img src="./img/butterfly.jpg" alt="" className="item-image" />
                  <figcaption className="item-description">
                    <h2 className="role">butterfly</h2>
                    <span className="name">stroke</span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of swimming stroke */}
    
      <div id="second-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="content-2">People totally new to swimming may benefit from taking swimming lessons, which are offered here in BMSC. In lessons, you’ll learn different strokes, breathing techniques, and other handy tips for getting the most from your workout.</p>
              <div className="container-btn">
                <a className="button" href="/">Enroll Now!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of second section */}

      {/* third  section */}
      <div className="third-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Swimming is life-saving</h1>
              <p>
                According to the American Academy of Pediatrics, children between the ages of 1-4 that had undergone formal swimming lessons had an 88% reduction in drownings compared to those that had no training. Even if you’re not a kid anymore, knowing how to swim can not only save your life, but your child’s or someone else’s.
              </p>
            </div>
            <div className="col-md-6">
            <video autoPlay loop muted plays-inline className="vid2" style={{width: "100%"}}><source src="./video/LifeSaving.mp4" type="video/mp4"/></video>
            </div>
          </div>
        </div>
      </div>
      {/* end of third section */}

      <div className="fourth-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
                <h1 className="h1-fourth">Benefits of swimming for Kids</h1>
                  <p>Swimming keeps your child’s heart and lungs healthy, improves strength and flexibility, increases stamina and even improves balance and posture.
                  Swimming provides challenges and rewards accomplishments, which helps children to become self-confident and believe in their abilities
                  Your child will have plenty of opportunities to make friends and grow in confidence</p>
            </div>
            <div class="col-md-6">
              <video autoPlay loop muted plays-inline className="vid2" style={{width: "100%"}}><source src="./video/BenefitsKids.mp4" type="video/mp4"/></video>
            </div>
          </div>
        </div>
      </div>

      <section id="fifth-section">
        <h2 class="title">
          <span class="primary text-center">TESTIMONIALS</span>
        </h2>
        <div className="container-md">
          <Slider {...settings}>
            <div>
              <Card className="rounded-0" style={{ width: '18rem' }}>
                <Card.Img className="rounded-0" variant="top" src="http://graph.facebook.com/mommyjulievlog/picture?width=140&height=85" />
                <Card.Body>
                  <Card.Title className='text-primary'>Mommy Julie</Card.Title>
                  <Card.Text>
                    From "I only want to swim sa stairs Mommy because I'm scared"
                    To swimming and jumping on the ...
                  </Card.Text>
                  <Button className="rounded-0" variant="primary" onClick={() => openModal("Mommy Jullie", <p className="text-light">"From "I only want to swim sa stairs Mommy because Im scared" To swimming and jumping on the pool confidently 🥰 Take note nakaka 4 sessions pa lang kami 💕 Maraming maraming salamat coach Cristy and to the whole team of Black Marlin Athletes Club. Yung mga nanay talaga ang mga pusher eh char. We push our kids to try new things na sinasabi nilang "hindi ko kaya Mommy" because we know deep inside that you can. I don't know why pero we really feel it. You just need to try. Kaya as long as alam kong safe at makakaya talaga ng powers mo anak sasamahan kita at susuportahan all the way. All I wish talaga as a Mom ay maging confident enough si Cali to try new things kasi nasa age pa lang sya ng self-discovery. I really hope na matulungan ko sya to reach her full potential. Magawa nya lang yung mga bagay na gusto nya, madiscover nya lang kung ano at sino sya as a person sobra-sobra na akong magiging masaya. 🥰"<br/><a href="https://fb.watch/kaa91kevHQ/" target="_blank">Check the post on facebook</a></p>)}>Read More</Button>
                  <HomeModal show={modalShow1} handleClose={closeModal} modalTitle={modalTitle} modalContent={modalContent} />
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className="rounded-0" style={{ width: '18rem' }}>
                <Card.Img className="rounded-0" variant="top" src="http://graph.facebook.com/justjosuelle/picture?width=140&height=85" />
                <Card.Body>
                  <Card.Title className='text-primary'>Josuelle Vlogs</Card.Title>
                  <Card.Text>
                  I am thrilled to share that I have achieved something truly meaningful this month: I stepped out of ...
                  </Card.Text>
                  <Button className="rounded-0" variant="primary" onClick={() => openModal("Josuelle Vlogs", <p className="text-light">"I am thrilled to share that I have achieved something truly meaningful this month: I stepped out of my comfort zone and tried new things. It wasn't easy, but with the support that I needed, I was able to push myself to take risks and challenge myself in new ways. One of my proudest achievements this month was signing up for a swimming class!  I was able to befriend with water, wear swimsuits(for the first time!!), eat alone(which is I really hate before), don’t give a sht being called “ang itim mo na” (lol brings back bad memories we don’t need it) and meet new amazing people. @ayesam_  alam mong ikaw ang may kasalanan ng lahat hahahaha thank youuuu!!!"<br/><a href="https://facebook.com/story.php?story_fbid=pfbid0QD44MKuk68WhSU8RCyWfWrinfK9aPN34X6vHvcuJxQ5g9A5888ZC3sMfFyKjpXCgl&id=100089078374198&mibextid=Nif5oz" target="_blank">Check the post on facebook</a></p>)}>Read More</Button>
                  <HomeModal show={modalShow1} handleClose={closeModal} modalTitle={modalTitle} modalContent={modalContent} />
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className="rounded-0" style={{ width: '18rem' }}>
                <Card.Img className="rounded-0" variant="top" src="http://graph.facebook.com/100009529953434/picture?width=140&height=85" />
                <Card.Body>
                  <Card.Title className='text-primary'>Allenconda</Card.Title>
                  <Card.Text>
                    Masaya ang training dito sobrang nag eenjoy kami dahil sa mga nakakasama namin sa training. Ang ...
                  </Card.Text>
                  <Button className="rounded-0" variant="primary" onClick={() => openModal("Allenconda", <p className="text-light">"Masaya ang training dito sobrang nag eenjoy kami dahil sa mga nakakasama namin sa training. Ang babait pa ng mga coaches sobrang understanding nila. Mabilis naming natutunan yung mga tinuturo nila, dahil sa nag eenjoy kami."<br/><a href="https://www.facebook.com/allenconda.allenconda/posts/pfbid02UPHDwd1hn5QMYWj8nXB8VJRFct5wWc7jvgTmH9KpsqGu1c4HSB6L5mMJDWjfeBzfl" target="_blank">Check the post on facebook</a></p>)} >Read More</Button>
                  <HomeModal show={modalShow1} handleClose={closeModal} modalTitle={modalTitle} modalContent={modalContent} />
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className="rounded-0" style={{ width: '18rem' }}>
                <Card.Img className="rounded-0" variant="top" src="http://graph.facebook.com/100009529953434/picture?width=140&height=85" />
                <Card.Body>
                  <Card.Title className='text-primary'>Justin Badion</Card.Title>
                  <Card.Text>
                    Sobrang nag eenjoy kami sa training dito dahil masaya kasama ang mga swimmers dito. Para...
                  </Card.Text>
                  <Button className="rounded-0" variant="primary" onClick={() => openModal("Justin Badion", <p className="text-light">"Sobrang nag eenjoy kami sa training dito dahil masaya kasama ang mga swimmers dito. Para kaming magkakapatid pag dating sa training. Nakikita namin agad yung improvement ng bawat isa. Dahil sa mga coaches na mababait at magagaling magturo."<br/><a href="https://facebook.com/story.php?story_fbid=pfbid0ayC9zgyeH1WcZ7maikwfBMhpdm53XxF8YeLwTSvRzZ4gDXPw3HbjmnRSwFVMNF77l&id=100038493019124&mibextid=CDWPTG" target="_blank">Check the post on facebook</a></p>)} >Read More</Button>
                  <HomeModal show={modalShow1} handleClose={closeModal} modalTitle={modalTitle} modalContent={modalContent} />
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className="rounded-0" style={{ width: '18rem' }}>
                <Card.Img className="rounded-0" variant="top" src="http://graph.facebook.com/100009529953434/picture?width=140&height=85" />
                <Card.Body>
                  <Card.Title className='text-primary'>Allyza Palermo</Card.Title>
                  <Card.Text>
                  Masaya magtraining dito kasi sobrang friendly ng mga swimmers. Mabilis kang matututo dah...
                  </Card.Text>
                  <Button className="rounded-0" variant="primary" onClick={() => openModal("Allyza Palermo", <p className="text-light">"Masaya magtraining dito kasi sobrang friendly ng mga swimmers. Mabilis kang matututo dahil sa mga coaches na mababait at magagaling magturo. About sa training camp naman, sobrang mag eenjoy yung mga sasali dito kasi marami kayong matututunan. After camp makikita nyo yung pagbabago sa strokes nyo and mapapansin nyo din na lalakas kayo kaya sobrang worth it ang pagsali ng camp. Mabubuild up lalo yung friendship ng bawat swimmers."<br/><a href="https://facebook.com/story.php?story_fbid=pfbid0hA4Htf34u8mdaLWxbfixiGwTT2hsFETvaZzbo7ZMc3jaUEzxTjZvimE4WmzzFHRyl&id=100009272704954&mibextid=CDWPTG" target="_blank">Check the post on facebook</a></p>)} >Read More</Button>
                  <HomeModal show={modalShow1} handleClose={closeModal} modalTitle={modalTitle} modalContent={modalContent} />
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card className="rounded-0" style={{ width: '18rem' }}>
                <Card.Img className="rounded-0" variant="top" src="http://graph.facebook.com/100009529953434/picture?width=140&height=85" />
                <Card.Body>
                  <Card.Title className='text-primary'>Mary Grace Dela Peña</Card.Title>
                  <Card.Text>
                  You'll definitely have fun while learning! I appreciate how kind the instructors are, which makes...
                  </Card.Text>
                  <Button className="rounded-0" variant="primary" onClick={() => openModal("Mary Grace Dela Peña", <p className="text-light">"You'll definitely have fun while learning! I appreciate how kind the instructors are, which makes it easy for us to connect with them. The instructions given were clear and easy to understand, and they are more than willing to demonstrate it over and over for us to follow. But the laughter we share, jokes we crack, and the satisfaction we get as we grasp the lesson and techniques are the things that make this whole experience even more meaningful. So I absolutely recommend their service. Enroll now!"<br/><a href="https://facebook.com/story.php?story_fbid=pfbid02tGHbayKRvJNry4W3Dq2gWV1q2SN3Mi3KQarmWwQbTgATEzea6zG1LCQvih4SY85wl&id=100009529953434&mibextid=CDWPTG" target="_blank">Check the post on facebook</a></p>)} >Read More</Button>
                  <HomeModal show={modalShow1} handleClose={closeModal} modalTitle={modalTitle} modalContent={modalContent} />
                </Card.Body>
              </Card>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Home;
