import React from 'react'
import Navbar from "./website/Navbar"
import {Route, Routes } from 'react-router-dom';
import {Link } from "react-router-dom";
import "./App.css";
import "./website/Navbar"
import home from "./website/mainPhoto/home-img.png";
import about from "./website/mainPhoto/About-img.jpg";
import goal from "./website/mainPhoto/Goal.gif"
import mission2 from "./website/mainPhoto/Mission2.gif"
import logo1 from "./website/mainPhoto/Electronics-logo1.png"
import talaash from "./website/mainPhoto/talaash-event.jpg"
import ethics from "./website/mainPhoto/ethics-event.jpg"
import mysql from "./website/mainPhoto/mysql-event.jpg"
import java from "./website/mainPhoto/java-event.jpg"
import team from "./website/mainPhoto/our-team-img.png"
import Caordinator from "./website/mainPhoto/Madhav-Singh-img.jpg"
import Cofounder from "./website/mainPhoto/Ankur-saxena-img.jpg"
import president from "./website/mainPhoto/Anshul-Sahu-img.jpg"

function Home() {
  return (
  <>
  <Navbar />
  {/* Home section */}
  <section className='text-center top' >
           <p className="heading">
              WELCOME  TO 
              </p>
            <p className=" heading2">ELECTRONICS CLUB</p>
            <p className="heading3">
              Our electronics club is open to all, so come and be a part of a
               vibrant and welcoming community <br></br>that shares your love for
               electronics.
            </p>
            <Link to= '/explore'><button className="head-button"><p>EXPLORE..</p></button></Link>
           
            <div className='home-img '  > 
             <img src={home} alt="home-img"/>
            </div>
    </section>

    {/* About Section  */}
    <section className='about'>

      <div className='about-img'>
        <img src={about} alt='about-img'/>
      </div>

      <div className='about-head'>
        <h1>ABOUT OUR<br/><span> CLUB...</span></h1>
      </div>
    
      <div className='about-head2'>
        <p>The Electronics club is a group of people who share an interest in electronics,<br/> technology, and engineering. The club may be organized through a university by enthusiasts who want to collaborate and learn from each other.</p>
      </div>

      <div className='about-head3'>
        <p>Our electronics club will provide members with opportunities to develop their skills and knowledge by organizing workshops, seminars, and projects. Members may work on individual projects or collaborate on group projects that involve designing, building, and testing electronic circuits, devices, or systems.
        </p>
      </div>

      <div className="about-num container">
              <div className=" Number "><span><i class="fa-solid fa-circle-user"></i></span>100+ <br /> <h2>Members</h2></div>
              <div className=" Number "><span><i class="fa-solid fa-lightbulb"></i></span>10+ <br /> <h2>Events</h2></div>
              <div className=" Number "><span><i class="fa-solid fa-calendar-check"></i></span>10+ <br /> <h2>Workshops</h2></div>
      </div>
    </section>
   
   {/* Target section */}
   <section className='target-club'> 
     <div className='target-head'>
      <h1><span className='t-span1'><i class="fa-solid fa-atom"></i></span><u>TARGET OF OUR CLUB</u><span className='t-span2'><i class="fa-solid fa-atom"></i></span></h1>
     </div>
     <br/>

    <div className='target-card row'>
        <div className='card t-card col-md-4 flip-right' style={{visibility:"visible", animationDelay:0.2, animationName:"flip-right" }} >
          <div ><img src={goal} alt='goal'/></div>
          <br/>
          <p>The target of an electronics club can vary depending on the specific goals and objectives of the club. Generally, the target of an electronics club is to bring together individuals who have an interest in electronics and technology. The club provides a platform for members to learn, collaborate, and share their knowledge and skills in electronics</p>
        </div>

        <div className='card t-card col-md-4 logo1 flip-right' style={{visibility:"visible", animationDelay:0.2, animationName:"flip-right" }} >
        <div><img src={logo1} alt='goal'/></div>
        <br/>
          <p>The club may target students, professionals, or hobbyists who want to develop their skills in electronics and technology. The target audience may also include individuals who are interested in pursuing careers in electronics engineering, computer science, or related fields.</p>
        </div>

        <div className='card t-card col-md-4 flip-right' style={{visibility:"visible", animationDelay:0.2, animationName:"flip-right" }} >
          <div><img src={mission2} alt='goal'/></div>
          <br/>
          <p>The club may aim to provide members with opportunities to network with other professionals in the industry, participate in competitions, and gain practical experience in designing and building electronic devices and systems. Additionally, the club may aim to inspire and encourage younger generations to pursue careers in electronics and technology.</p>
        </div>
    </div>
   </section>
   
   {/*events/workshops*/}
   <section className='text-center-event'>
           <div className="py-5" >
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='text-center'>
                  
                  <h1><span className='event-icon' style={{position: "relative",top: 0}}><i class="fa-solid   fas fa-angles-right "></i>
                  
                  </span><u className='event-heading1'>OUR EVENTS</u><span className='event-icon1' style={{position: "relative",top: 0}}>
                    <i class="fa-solid fas fa-angles-left"></i></span></h1>
              </div>
              
          <div className="event-heading2" >
               <p>In Our community we offer you interactive webinars, workshops, and much more. 
               So, stay tuned with us and contribute in our events. 
               Learn real-life skills from experts, join clubs, hangout and network with smart people and learn while having fun.
               </p>
            </div>
               <br></br><br></br><br></br><br></br>
              
              <div className='row event-row'>
              <div className='col-md-3 EVENT PY-4'>
               <img src= {talaash} alt='talaash-event'/>
               <br></br><br></br>
              <h3><u>TALAASH</u></h3> 
                <p >Talaash provides a unique and exciting way to challenge 
                participants and foster a sense of adventure and discovery.
                </p>
                
                </div>

                
              <div className='col-md-3 EVENT PY-4'>
               <img src= {ethics} alt='ethics-event'/>
               <br></br><br></br>
              <h3><u>ETHICS</u></h3> 
                <p >Ethics is an ongoing process of reflection, self-examination,
                   and it requires a willingness to challenge our  beliefs.
                </p>
                
                </div>

                
              <div className='col-md-3 EVENT PY-4'>
               <img src= {mysql} alt='mysql-event'/>
               <br></br><br></br>
              <h3><u>MY SQL</u></h3> 
                <p >MySQL is a powerful and widely-used open-source relational database management system and managment interface .
                </p>
             
                </div>

                
              <div className='col-md-3 EVENT PY-4'>
               <img src= {java} alt='java-event'/>
               <br></br><br></br>
              <h3><u>JAVA</u></h3> 
                <p >Java is known for its simplicity, readability, and maintainability, 
                  making it a popular choice for software development.
                </p>
             
                </div>
               </div>
               <button type="button" className=" event-button"><p>EXPLORE MORE..</p></button>
             
               
   </div></div></div></div>
   </section> 
<br/>
{/* our team Section  */}
<section className='our-team'>

<div className='our-team-img'>
  <img src={team} alt='team-img'/>
</div>

<div className=' row our-team-head slideInLeft'>
  <h1>Working Together
 <br/><span> is Success</span></h1>
</div>

<div className='our-team-head2'>
  <p>Teamwork is essential for any successful team. When a group of individuals come together to work towards a common goal,
     they are able to achieve far more than any one person could on their own. Through teamwork, each member of the team is
     able to bring their unique skills and strengths to the table, and work together to overcome any challenges or obstacles 
      that they may face.  organized through a university by enthusiasts who want to collaborate and learn from each other.
      </p>
</div>


</section>
<section class="container ">
               <h1 className='text-center'><span className='event-icon'><i class="fa-solid   fas fa-users-line  fa-xs"></i>
                  </span><u className='event-heading1'>OUR TEAM</u><span className='event-icon1'>
                    <i class="fa-solid  fas fa-users-line fa-xs"></i></span></h1>
           <br></br>  <br></br>  
<div className='row'>   
            <div class="col-md-4 our-mentor">
              <div class="feature-item">
                <div class="hover-overlay">
                <img src={Caordinator} alt='Madhav-Singh-img'/></div>
                <h4 class="feature-title">MADHAV SINGH <h6>Faculty Coordinator</h6> </h4>
                
                
              </div>
            </div>
            <div class="col-md-4 our-mentor">
              <div class="feature-item">
                <div class="hover-overlay">
                <img src={Cofounder} alt='Ankur-Saxena-img'/></div>
                <h4 class="feature-title">ANKUR SAXENA <h6> Co-Founder & First President</h6> </h4>
              
              </div>
            </div>
            <div class="col-md-4 our-mentor">
              <div class="feature-item">
                <div class="hover-overlay">
                <img src={president} alt='ANSHUL-SAHU-img'/></div>
                <h4 class="feature-title">ANSHUL SAHU <h6> President</h6> </h4>
              </div>
            </div>


            </div>
</section>

<br/><br/>
   
   {/* Contact Section */}
   <section className='contact container'>
   <h1 className='contact-head'>CONTACT US</h1><br/>
    <div className='row contact-div'>
      <div className='col-md-6 contact-1'>
        <h2>GET IN TOUCH</h2>
        <p style={{fontWeight:500, fontSize:13}}>Feel free to ask your query...</p>
        <p><i class="fa-solid fa-phone"></i>  <b>CONTACT:</b> +917999442165 (Prof. Madhav Singh)</p>
        <p><i class="fa-solid fa-envelope"></i>  <b>EMAIL:</b> electronicsclubmits19@gmail.com</p>
        <p><i class="fa-solid fa-location-dot"></i> <b> ADDRESS:</b> Madhav Institute of Technology and Science Racecourse Rd, near Gola ka Mandir, Gwalior, Madhya Pradesh, 474005.</p>
        <p><b>About The Developers:</b><br/><span>"This website is proudly designed and developed by Shruti Golwalkar and Nandini Agrawal from MITS,Gwalior.We are always enthusiastic about working on awesome projects, and our expertise in web development shines through in the design and functionality of this website."</span></p>
      </div>
      
      <div className='col-md-6 contact-2'>
        {/* <img className='letter' src= {gif} alt='gif'/> */}
        <form >
          <b>Name:</b><br/><input className='input'  type="text" name="n" placeholder="Enter your name" required></input>
          <br/><br/>
          <b>Email:</b><br/><input className='input'  type="email" name="n" placeholder="Enter your email" required></input>
          <br/><br/>
          <b>Message:</b><br/>
         <textarea className='input' cols={67} style={{height:100, }}></textarea>
         <br/><br/>
         <input type='submit' placeholder='Send'name="n" className='send btn'></input>

        </form>
      </div>
    </div>
   </section>
   
   {/* footer*/}
<section className='footer'>

<div class="main-footer">
  <div class="container-fluid" >
    <div class="row">
      <div class="col-md-3 footer">
        
          <div>
          
            <b>
              <h5>STAY CONNECTED WITH US....</h5>
            </b>
            <p>
            Let’s join in our electronics club and be a part of a community that shares your passion for electronics.
            </p>
            
            </div>
        </div>             
      <div class="col-md-3 explore">
        <h5>EXPLORE</h5>
        
        <p class="f-explore">
          <a href="HOME" class="abc">HOME</a>
          <br></br>
          <a href="About" class="abc">ABOUT US</a>
          <br></br>
          <a href="Events" class="abc">EVENTS</a>
          <br></br>
          <a href="Team" class="abc">OUR TEAM</a>

          <br></br>
          <a href="Contact" class="abc">CONTACT</a>
        </p>
      </div>
      <div class="col-md-3 social" >
        <h5 >SOCIAL</h5>
        
        <p>
          <a href="facebook" class="abc">FACEBOOK</a>
          <br></br>
          <a href="INSTAGRAM"class="abc" > INSTAGRAM</a>
          <br></br>
          <a href="LINKEDIN" class="abc">LINKEDIN</a>
          <br></br>
          <a href="TWITTER" class="abc">TWITTER</a>
        </p>
      </div>
      <div class="col-md-3 message ">
        <h5 >WRITE MESSAGE</h5>
        
        <form class="">
              <div class="form-group ">
                <input type="text" placeholder="SEND MESSAGE...." name="" class="form-control" >
                </input>
              </div>
              <input type="submit" value="SEND"  name="" class="footer-btn ">

    </input>
            </form>
            <br></br>
            <div class="social-icon text-left">
              <a href='https://www.linkedin.com/company/electronics-club-mits-gwalior/about/' target='_shruti'>
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href='https://www.instagram.com/electronics.club.mits/' target='_shruti'>
                <i class="fa-brands fa-instagram"></i>
              </a>
              
            </div>       
      </div>  
    </div>  
  </div>  
</div>


<div className="end-footer">
  <center>
    <p
      className="rights text-center"
      style={{ position: "relative", top: 22 }}
    >@ 2023 Electronics Club. Made with <i class="fa-solid fa-heart" style={{fontSize:17 , color:"red"}}></i>  by Electronics club Team. All rights reserved.
    </p>
  </center>
  </div>
</section>


  </>
  );
};

function About() {
  return (
  <>
  <Navbar />
  {<section className='text-center top'>
           <p className="heading">
              WELCOME  TO About
              </p>
            <Link to='/explore'><button className="head-button"><p>EXPLORE..</p></button></Link>
    </section> }
  </>
  );
};

function Events() {
  return (
  <>
  <Navbar />
  
  <section className='text-center top'>
           <p className="heading">
              WELCOME  TO Events
              </p>
            <Link to='/explore'><button className="head-button"><p>EXPLORE..</p></button></Link>
    </section>
  </>
  );
};

function Team() {
  return (
  <>
  <Navbar />
  <section className='text-center top'>
           <p className="heading">
              WELCOME  TO Team
              </p>
            <Link to='/explore'><button className="head-button"><p>EXPLORE..</p></button></Link>
    </section>
  </>
  );
};

function Contact() {
  return (
  <>
  <Navbar />
  <section className='text-center top' >
           <p className="heading">
              WELCOME  TO Contact
              </p>
            <Link to='/explore'><button className="head-button"><p>EXPLORE..</p></button></Link>
    </section>
  </>
  );
};

function Explore() {
  return (
  <>
  <Navbar />
  <section className='text-center top' >
           <p className="heading">
              WELCOME  TO Explore
              </p>
            <Link to='/explore'><button className="head-button"><p>EXPLORE..</p></button></Link>
    </section>
  </>
  );
};

function App()  {
  return (

    <Routes>
    <Route exact path='/' element={<Home/>}> </Route>

    <Route exact path='/about' element={<About/>}></Route>

    <Route exact path='/events' element={<Events/>}></Route>

    <Route exact path='/team' element={<Team/>}></Route>

    <Route exact path='/contact' element={<Contact/>}></Route>

    <Route exact path='/explore' element={<Explore/>}></Route>
    </Routes>
  );
};

export default App

