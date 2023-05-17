import React, {useState} from 'react';
import './Programs.css';
import Button from 'react-bootstrap/Button';
import ProgramModal from './Modal';

const Programs = () => {
    const [modalShow, setModalShow] = React.useState(false);
        

    const [displayToddler, setDisplayDiv1] = useState(false);
    const [displayKids, setDisplayDiv2] = useState(false);
    const [displayAdult, setDisplayDiv3] = useState(true);
    const [displaySwimmingTeam, setDisplayDiv4] = useState(false);
    const [displayPrivateLesson, setDisplayDiv5] = useState(false);
    const [selectedProgram, setSelectedProgram] = React.useState('ADULT SWIMMING PROGRAM');
    const [selectedAge, setSelectedAge] = React.useState('7 and above years old');
    const [hours, setHours] = React.useState('2hrs');
    const [level, setLevel] = React.useState('BASIC | INTERMMEDIATE | ADVANCE');
    const [kalipayanPrice, setKalipayanPrice] = React.useState('Kalipayan Resort Dasmarinas | ₱4500.00');
    const [southwoodsPrice, setSouthwoodsPrice] = React.useState('Southwoods Carmona Cavite | ₱5500.00');

    const handleRadioChange = (event) => {
        const value = event.target.value;
        if (value === 'toddler') {
            setSelectedProgram('TODDLER SWIMMING PROGRAM');
            setSelectedAge('2-4 Years Old');
            setHours('1.5hrs');
            setLevel('SURVIVAL');
            setKalipayanPrice('Kalipayan Resort Dasmarinas | ₱6500.00');
            setSouthwoodsPrice('Southwoods Carmona Cavite | ₱7500.00');
            setDisplayDiv1(true);
            setDisplayDiv2(false);
            setDisplayDiv3(false);
            setDisplayDiv4(false);
            setDisplayDiv5(false);
        } else if (value === 'kids') {
            setSelectedProgram('KIDS SWIMMING PROGRAM');
            setSelectedAge('5-6 Years Old');
            setHours('1.5hrs');
            setLevel('BASIC | INTERMMEDIATE');
            setKalipayanPrice('Kalipayan Resort Dasmarinas | ₱5500.00');
            setSouthwoodsPrice('Southwoods Carmona Cavite | ₱6500.00');
            setDisplayDiv1(false);
            setDisplayDiv2(true);
            setDisplayDiv3(false);
            setDisplayDiv4(false);
            setDisplayDiv5(false);
        } else if (value === 'adult') {
            setSelectedProgram('ADULT SWIMMING PROGRAM');
            setSelectedAge('7 and above years old');
            setHours('2hrs');
            setLevel('BASIC | INTERMMEDIATE | ADVANCE');
            setKalipayanPrice('Kalipayan Resort Dasmarinas | ₱4500.00');
            setSouthwoodsPrice('Southwoods Carmona Cavite | ₱5500.00');
            setDisplayDiv1(false);
            setDisplayDiv2(false);
            setDisplayDiv3(true);
            setDisplayDiv4(false);
            setDisplayDiv5(false);
        } else if (value === 'swimmingTeam') {
        setSelectedProgram('SWIMMING TEAM PROGRAM');
        setSelectedAge('7 and above years old');
        setHours('5hrs');
        setLevel('ADVANCE | COMPETITIVE');
        setKalipayanPrice('Kalipayan Resort Dasmarinas | ₱10000.00');
        setSouthwoodsPrice('Southwoods Carmona Cavite | N/A');
        setDisplayDiv1(false);
        setDisplayDiv2(false);
        setDisplayDiv3(false);
        setDisplayDiv4(true);
        setDisplayDiv5(false);
        }else if (value === 'privateLessons') {
            setSelectedProgram('PRIVATE LESSONS PROGRAM');
            setSelectedAge('3 and above years old');
            setHours('1.5hr for kids and 2hrs for adult ');
            setLevel('BASIC | INTERMMEDIATE | ADVANCE');
            setKalipayanPrice('WILL DEPEND ON THE TIME AND LOCATION');
            setSouthwoodsPrice('');
            setDisplayDiv1(false);
            setDisplayDiv2(false);
            setDisplayDiv3(false);
            setDisplayDiv4(false);
            setDisplayDiv5(true);
        }
      };

    return (
        <>

        <section className="program_selector">
            <div className="rt-container">
                <div className="col-rt-12">
                    <div className="Scriptcontent">
                        <div className="container_program">
                            <div className="wgh-slider">
                                <input className="wgh-slider-target" type="radio" id="slide-1" name="slider" value="toddler" onChange={handleRadioChange}/>
                                <input className="wgh-slider-target" type="radio" id="slide-2" name="slider" value="kids" onChange={handleRadioChange}/>
                                <input className="wgh-slider-target" type="radio" id="slide-3" name="slider" value="adult" onChange={handleRadioChange}/>
                                <input className="wgh-slider-target" type="radio" id="slide-4" name="slider" value="swimmingTeam" onChange={handleRadioChange}/>
                                <input className="wgh-slider-target" type="radio" id="slide-5" name="slider" value="privateLessons" onChange={handleRadioChange}/>
                                <div className="wgh-slider__viewport">
                                    <div className="wgh-slider__viewbox">
                                        <div className="wgh-slider__container">
                                            <div className="wgh-slider-item">
                                                <div className="wgh-slider-item__inner">
                                                    <figure className="wgh-slider-item-figure"><img className="wgh-slider-item-figure__image" src="img/image-1.jpg" alt="Toddler"/>
                                                        <figcaption className="wgh-slider-item-figure__caption">TODDLERS<span>Survival</span></figcaption>
                                                    </figure>
                                                    <label className="wgh-slider-item__trigger" for="slide-1" title="Show product 1"></label>
                                                </div>
                                            </div>
                                            <div className="wgh-slider-item">
                                                <div className="wgh-slider-item__inner">
                                                    <figure className="wgh-slider-item-figure"><img className="wgh-slider-item-figure__image" src="img/image-2.jpg" alt="KIDS"/>
                                                        <figcaption className="wgh-slider-item-figure__caption">KIDS<span>Basic | Intermediate</span></figcaption>
                                                    </figure>
                                                    <label className="wgh-slider-item__trigger" for="slide-2" title="Show product 2"></label>
                                                </div>
                                            </div>
                                            <div className="wgh-slider-item">
                                                <div className="wgh-slider-item__inner">
                                                    <figure className="wgh-slider-item-figure"><img className="wgh-slider-item-figure__image" src="img/image-3.png" alt="ADULTS"/>
                                                        <figcaption className="wgh-slider-item-figure__caption">ADULT<span>Basic | Intermediate | Advance</span></figcaption>
                                                    </figure>
                                                    <label className="wgh-slider-item__trigger" for="slide-3" title="Show product 3"></label>
                                                </div>
                                            </div>
                                            <div className="wgh-slider-item">
                                                <div className="wgh-slider-item__inner">
                                                    <figure className="wgh-slider-item-figure"><img className="wgh-slider-item-figure__image" src="img/image-4.jpg" alt="PE CLASS"/>
                                                        <figcaption className="wgh-slider-item-figure__caption">SWIMMING TEAM<span>Intermediate | Advance</span></figcaption>
                                                    </figure>
                                                    <label className="wgh-slider-item__trigger" for="slide-4" title="Show product 4"></label>
                                                </div>
                                            </div>
                                            <div className="wgh-slider-item">
                                                <div className="wgh-slider-item__inner">
                                                    <figure className="wgh-slider-item-figure"><img className="wgh-slider-item-figure__image" src="img/image-5.jpg" alt="PRIVATE"/>
                                                        <figcaption className="wgh-slider-item-figure__caption">PRIVATE LESSONS<span>Basic | Intermediate | Advance</span></figcaption>
                                                    </figure>
                                                    <label className="wgh-slider-item__trigger" for="slide-5" title="Show product 5"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="program_details">
            <div className="container" id="toddler_program">
                <hr/>
                <div className="row mb-5">
                    <div className="col-md-4 text-light">
                        <h1>{selectedProgram}</h1><br/>
                        <h2>SUMMARY</h2><br/>
                        AGE<br/>
                        <span>{selectedAge}</span><br/>
                        DURATION<br/>
                        <span>6 Sessions | {hours} per session</span><br/>
                        SWIMMING LEVELS<br/>
                        <span>{level}</span><br/>
                        LOCATION | PRICE<br/>
                        <span>{kalipayanPrice}</span><br/>
                        <span>{southwoodsPrice}</span><br/>
                        EQUIPMENT USED(excluded)<br/>
                        <span>Kickboard | Goggles | Swim Cap</span><br/><br/>
                        <Button className='rounded-0' variant="primary" onClick={() => setModalShow(true)}>
                            Avail A Program
                        </Button>
                        <ProgramModal show={modalShow} onHide={() => setModalShow(false)}/><br/>
                    </div>
                    <div className="d-flex col-md-1 vertical " >
                        <div className="vr primary"></div>
                    </div>
                    <div className="col-md-7">
                        <div className="container" id="toddler_program" style={{ display: displayToddler ? 'block' : 'none' }}>
                            <p><h4>This program is designed to introduce your little ones to the joys and benefits of swimming in a safe and fun environment. Over the course of six sessions, our experienced instructors will guide your child through a series of activities that will help build their confidence, improve their coordination, and develop their swimming skills.</h4><br/><br/>
                            
                            <h1>What to expect?</h1><br/>

                            <h4>By the end of the program, your toddler will have gained the skills and confidence needed to enjoy swimming on their own.</h4><br/><br/>
                            
                            <h1>How does it work?</h1><br/>
                            
                            <h4>Each session will be filled with engaging exercises, and techniques that will keep your child entertained and motivated.</h4><br/><br/>
                
                            <h5><strong>Training Equipment:</strong> We advise you to use the following training equipment: a kick board, pull buoy, and a pool noddle (floating devices).</h5></p>
                        </div>

                        <div className="container" id="kids_program" style={{ display: displayKids ? 'block' : 'none' }}>
                            <p><h4>Our program is designed specifically for kids, ensuring that they learn at their own pace and have a fantastic time while doing it. We believe that swimming is not only a valuable life skill but also a great way to stay active and healthy. So get ready to jump in, make a splash, and discover the joy of swimming!</h4><br/><br/>
                            
                            <h1>What to expect?</h1><br/>

                            <h4>In our program, your kids will learn various swimming strokes, such as freestyle, backstroke, breaststroke, and butterfly.</h4><br/><br/>
                            
                            <h1>How does it work?</h1><br/>
                            
                            <h4>Our experienced and friendly swim instructors will guide you through each step, teaching you proper techniques and helping you improve your skills. We'll also teach you essential water safety tips to make sure you stay safe while enjoying the pool.</h4><br/><br/>
                
                            <h5><strong>Training Equipment:</strong> We advise you to use the following training equipment: a kick board, pull buoy, and a pool noddle (floating devices).</h5></p>
                        </div>

                        <div className="container" id="adult_program" style={{ display: displayAdult ? 'block' : 'none' }}>
                            <p><h4>Our Adult Swimming Program is designed for individuals of all skill levels, whether you're a complete beginner or looking to refine your strokes. It's never too late to learn this valuable life skill and experience the joy of swimming.</h4><br/><br/>
                            
                            <h1>What to expect?</h1><br/>

                            <h4>In our program, you'll receive expert guidance from our experienced swim instructors who understand the unique needs of adult learners. They will help you overcome any fears or challenges you may have, ensuring a comfortable and supportive learning environment.</h4><br/><br/>
                            
                            <h1>How does it work?</h1><br/>
                            
                            <h4>We'll start by focusing on basic skills such as water acclimation, floating, and breathing techniques. As you progress, we'll teach you various swimming strokes, including freestyle, backstroke, breaststroke, and butterfly. Our instructors will provide personalized feedback and tips to help you improve your technique and build confidence in the water.</h4><br/><br/>
                
                            <h5><strong>Training Equipment:</strong> We advise you to use the following training equipment: a kick board, pull buoy, and a pool noddle (floating devices).</h5></p>
                        </div>
                        <div className="container" id="swimming_team" style={{ display: displaySwimmingTeam ? 'block' : 'none' }}>
                            <p><h4>Our Swimming Team Program is designed for individuals who are passionate about swimming and ready to take their skills to the next level. Whether you have competitive swimming experience or are looking to join a team for the first time, our program offers the training and support you need to excel in the pool.</h4><br/><br/>
                            
                            <h1>What to expect?</h1><br/>

                            <h4>Being part of a swimming team also means being part of a supportive and motivated community. You'll train alongside fellow swimmers who share your passion, creating a positive and encouraging environment that fuels your progress. Teamwork, camaraderie, and friendly competition are all integral parts of our Swimming Team Program. In addition to training, our program also prepares you for competitive swimming events.</h4><br/><br/>
                            
                            <h1>How does it work?</h1><br/>
                            
                            <h4>You'll receive expert coaching from our experienced and dedicated swim coaches. They will work closely with you to improve your technique, enhance your endurance, and develop your overall performance. Our coaches will design customized training plans tailored to your specific goals, pushing you to reach new heights in your swimming abilities. We'll focus on refining your starts, turns, and finishes, as well as building your race strategy and mental resilience. You'll have opportunities to participate in local and regional swim meets, where you can showcase your skills and measure your progress against other talented swimmers.</h4><br/><br/>
                
                            <h5><strong>Training Equipment:</strong> We strongly recommend you to use the following training equipment: Swimming Cap and Goggles.</h5></p>
                        </div>
                        <div className="container" id="private_lesson" style={{ display: displayPrivateLesson ? 'block' : 'none' }}>
                            <p><h4>Our Private Swimming Lesson Program offers one-on-one instruction tailored specifically to your individual needs and goals. Whether you're a beginner seeking to learn the basics or an experienced swimmer looking to refine your technique, our program provides focused attention and customized guidance to help you achieve your swimming objectives.</h4><br/><br/>
                            
                            <h1>What to expect?</h1><br/>

                            <h4>With private lessons, you'll work closely with a highly skilled and experienced swim instructor who will design a lesson plan based on your current abilities and desired outcomes. This personalized approach allows for targeted feedback and immediate adjustments, maximizing your learning potential and accelerating your progress.</h4><br/><br/>
                            
                            <h1>How does it work?</h1><br/>
                            
                            <h4>Private lessons provide a comfortable and supportive learning environment, allowing you to build confidence in the water at your own pace. Your instructor will cater the lessons to your strengths and challenges, helping you overcome any obstacles and develop proper swimming techniques. In addition to technique refinement, private lessons are an excellent option for individuals who prefer a more flexible schedule. You can arrange lesson times that fit your availability, ensuring that you receive focused instruction without any distractions or interruptions.</h4><br/><br/>
                
                            <h5><strong>Training Equipment:</strong> We strongly recommend you to use the following training equipment: Swimming Cap and Goggles.</h5></p>
                        </div>
                    </div>
                </div>
            </div>            
        </section>
        </>

    )
}

export default Programs;