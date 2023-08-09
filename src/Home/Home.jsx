import { Link } from "react-router-dom";
import "./home.css";
import mySelf from "/pictures/me.png";
import portfolioProject from "/pictures/firstPortfoilio.png";
import bmiCalculator from "/pictures/bmi.png";
import jsGame from '/pictures/jsgame.png';
import galana from '/pictures/galana.png';
import logo from '/pictures/logo.png'
import wanderList from '/pictures/wanderlist.png'
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaFacebookMessenger,
  FaCode,
} from "react-icons/fa";
function Home() {
  return (
    <div>
      <header>
        <p><img src={logo} alt="cjlogo" id='logo'/></p>
        <nav>
          <ul>
            <li>
              {" "}
              <a href="#home">HOME</a>{" "}
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#works">WORKS</a>
            </li>
          </ul>
        </nav>
      </header>
      {/* FOR HOME section*/}
      <section id="home">
        <h1 id="title">Fullstack Web Developer</h1>

        <p id="greet">
          Hi, I'm <span id="cj">Cj</span>
        </p>

        <a href="/pdf/CyrilJohn_FullStackDev_2023.resume.pdf">
    
          <button id="resume">RESUME</button>
        </a>
      </section>

      {/* FOR ABOUT SECTION */}
      <section id="about">
        <h1 id="aboutH1">About</h1>
        <div id="flex">
          <img src={mySelf} alt="My Self" id="mySelf" />
          <div id="abouText">
            <p>
            
              I'm Cyril John Deleon,<br />a Junior Fullstack Web Developer, eager to learn and contribute to web projects with my growing skills in both front-end and back-end development.
            </p>
            <div>
              <h3>CERTIFICATE</h3>
              <p>
                MAY 2015 - Computer Literacy Program (Module II Computer
                Hardware Software and Graphic Design) Datacom Institute of
                Computer Technology (Rosario Branch)
              </p>
              <h3>Random Facts About Me </h3>
              <p>
                I'm a fan of Slapshock and Greyhoundz. I enjoy listening to rock
                music and sometimes I have my own concert in the bathroom .
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FOR SKILLS SECTION */}
      <section id="skills">
        <h1>Skills</h1>
        <div id="mySkills">
          <div>
           
            <p id="html">
              <FaHtml5 />
              Html
            </p>
          </div>

          <p id="css">
            <FaCss3 />
            Css
          </p>
          <p id="js">
            {" "}
            <FaJs />
            Javascript
          </p>
          <p id="react">
            <FaReact />
            React Js
          </p>
          <p id="node">
            {" "}
            <FaNodeJs />
            Node JS + express
          </p>
          <p id="mongoDb">
            <FaDatabase />
            Mongo DB
          </p>
        </div>
      </section>
      {/* FOR WORKS SECTION  */}
      <section id="works">
        <h1 id="workH1">Projects</h1>
        <div id="project">
          <div>
            <h1>Portfolio Project</h1>
            <Link to="https://htmlcss21.netlify.app/">
              <img
                src={portfolioProject}
                alt="firstProject portfolio"
                id="firstProject"
              />
            </Link>
            <p>
              Welcome to my very first portfolio project, a simple yet
              captivating demonstration of my HTML and CSS skills. This project
              showcases my journey into web development. <br/>
              Code Source :<Link to='https://github.com/cyyy21/p1-web-dev-portfolio'><span>Click<FaCode/></span></Link>  
            </p>
          </div>

          <div>
            <h1>Javascript Game</h1>
            <Link to='https://rushhour-js.netlify.app/'>
            <img src={jsGame} alt="jsgamepicture" />
            </Link>
            <p>
              "Navigate the Rush Hour: Dodge and weave through traffic in this
              thrilling JavaScript game. Avoid oncoming cars and test your
              reflexes to reach the high score. Use KeyA to move left and KeyD
              to move right. Can you conquer the road and stay safe?"<br />
              Code Source : <Link to='https://github.com/cyyy21/p2-js-game'><span>Click<FaCode/></span></Link>
            </p>
        
          </div>
          
          <div>
            <h1>BMI CALCULATOR</h1>
            <Link to="https://bmi-calculatorproj.netlify.app/">
              <img src={bmiCalculator} alt="bmi project" id="bmi" />
            </Link>
            <p>
              "Stay Informed with BMI Calculator: Take charge of your health
              journey effortlessly with the BMI Calculator app. By effortlessly
              inputting your height and weight, you'll swiftly receive your body
              mass index (BMI) - a vital indicator of your weight status.
              Discover whether you're within the healthy weight range and make
              informed choices for your well-being. Simplify your health
              assessment today! <br/>
              Code Source : <Link to='https://github.com/cyyy21/p3-react-app'><span>Click<FaCode/></span></Link>
            </p>
          </div>
          
          <div>
          <h1>GALANA APP </h1>
          <Link to="https://galana-app.onrender.com"> <img src={galana} alt="galana" /></Link>
          <p>
            The Galana App is a user-friendly application designed to
            help you add travel information. With this app, you can add, edit,
            and delete places to blog about your hotels or places. <br />
            Code Source FRONT-END: <Link to='https://github.com/cyyy21/p4-node-frontend'><span>CODE<FaCode/></span></Link><br />
            Code Source BACK-END:  <Link to='https://github.com/cyyy21/p4-node-backend'><span>CODE<FaCode/></span></Link><br />
          </p>
          </div>

       
        <div>
        <h1>WanderList</h1>
        <Link to='https://wanderlist-lchl.onrender.com/'><img src={wanderList} alt="wandeerlist- homepage" /></Link>
        <p>
          <span>TEAM PROJECT :</span> The Itinerary App is a user-friendly application designed to help you organize and plan your travel adventures efficiently.
        <br />Code Source : <br />
       <Link to='https://github.com/NikkoVP/FullStack-MERN-Team-Project'><span>Click<FaCode/></span></Link>

        </p>
        </div>
        </div>
        <div id="line"></div>
      </section>
      
      <footer id="accounts">
      <div id="accountsContainer" >
        <h1>Accounts</h1>
        <div id="socialMedia" >
        <Link to='https://github.com/cyyy21' id="github"><FaGithub/></Link>
       <Link to='https://www.linkedin.com/in/cyril-john-de-leon-2bbb08273/' id="linkedIn"><FaLinkedin/></Link>
        <Link to='https://www.messenger.com/t/100004758971517' id="messenger"><FaFacebookMessenger/></Link>
        <Link to='mailto:deleon.cyriljohn21@gmail.com' id='gmail'><FaGoogle/></Link>
     
           </div>
       
        </div>
    
  
      </footer>
    </div>
  );
}

export default Home;
