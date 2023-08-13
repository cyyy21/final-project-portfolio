import { Link } from "react-router-dom";
import "./home.css";
import mySelf from "/pictures/me.png";
import portfolioProject from "/pictures/firstPortfoilio.png";
import bmiCalculator from "/pictures/bmi.png";
import jsGame from "/pictures/jsgame.png";
import galana from "/pictures/galana.png";
import logo from "/pictures/logo.png";
import wanderList from "/pictures/wanderlist.png";
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
import { useState } from "react";

function Home() {
  const [toggle, setToggle] = useState(false);

  function handleKey() {
    if (true) {
      setToggle(!toggle);
    }
  }
 

  return (
    <div>
      <header>
        <p>
          <img src={logo} alt="cjlogo" id="logo" />
        </p>
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
      <div id="hamburger" onClick={handleKey}>
        <div id="burgerLine"></div>
        <div id="burgerLine"></div>
        <div id="burgerLine"></div>
        {toggle ? (
          <div id="show">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#works">Works</a>
          </div>
        ) : null}
      </div>
      {/* FOR HOME section*/}
      <section id="home">
        <h1 id="title">Fullstack Web Developer</h1>

        <p id="greet">
          Hi, I'm <span id="cj">Cj</span>
        </p>

        <a href="/pdf/resume.pdf">
          <button id="resume">Download RESUME</button>
        </a>
      </section>

      {/* FOR ABOUT SECTION */}
      <section id="about">
        <h1 id="aboutH1">About</h1>
        <div id="flex">
          <img src={mySelf} alt="My Self" id="mySelf" />
          <div id="abouText">
            <p>
              Cyril John De Leon: Exploring the Web and Rocking to New
              Adventures! <br /> <br />
              I'm diving into web development, learning to build awesome
              websites. Besides coding, I'm a big fan of rock music. Just like a
              song has different parts, coding brings elements together. I got
              into web development because I wanted to make cool stuff on the
              internet. Websites are like digital playgrounds. It's amazing how
              they work, and I want to be a part of creating them. So, here I
              am, taking my first steps in web development, excited to learn and
              contribute to the online world. Thanks for joining me on this
              journey!
            </p>
            <div>
              <h3>CERTIFICATE</h3>
              <p>
                MAY 2015 <br />
                Computer Literacy Program (Module II Computer Hardware Software
                and Graphic Design) Datacom Institute of Computer Technology
                (Rosario Branch)
                <br />
                <br />
                The Computer Literacy Program I attended at Datacom Institute
                focused on Computer Hardware, Software, and Graphic Design.
                While not directly related to web development, it could have
                imparted foundational technology knowledge and potentially
                enhanced my understanding of hardware-software interactions,
                which could be valuable for troubleshooting and optimizing web
                applications. Additionally, graphic design skills learned might
                have offered insights into user interface design and aesthetics
                for web projects.
                <br />
              </p>
          <p style={{position:'relative', right:'200px'}}>
                <br />
                <br />
                Feb 20 2023 - Aug 11 2023 <br />
                6-month Part Time FullStack Web Development Program 
                <br />
                <br />
                The 6-month Part-Time FullStack Web Development Program I
                undertook provided an in-depth education on both front-end and
                back-end development. Through this program, I acquired a range
                of skills including HTML, CSS, JavaScript, React.js, Node.js,
                and MongoDB, enabling me to build dynamic and interactive web
                applications. The training honed my ability to create
                user-friendly interfaces, handle data processing, and manage
                server-side functionalities, ultimately equipping me to
                contribute effectively to fullstack development projects.
                </p>
             
              <br />
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
      <br />
      <p id="description">
        These skills are my toolkit for crafting applications! HTML acts as the
        foundation, helping me structure content like arranging pieces of a
        puzzle. CSS lets me add my creative touch, painting the visual appeal of
        the app with colors and styles. With Node.js, I'm the backstage
        magician, making sure everything runs smoothly behind the scenes.
        React.js is my way of bringing life to the app, creating interactive
        elements that users can enjoy. And MongoDB is like my memory bank,
        storing and retrieving data for the app's functionality. All in all,
        these skills empower me to bring my app ideas to life!
      </p>
      {/* FOR WORKS SECTION  */}
      <section id="works">
        <h1 id="workH1">Projects</h1>
        <div id="project">
          <div>
            <h1>Portfolio Project</h1>

            <img
              src={portfolioProject}
              alt="firstProject portfolio"
              id="firstProject"
            />

            <p>
              Welcome to my very first portfolio project, a simple yet
              captivating demonstration of my HTML and CSS skills. This project
              showcases my journey into web development. <br />
              <div>
                <Link to="https://github.com/cyyy21/p1-web-dev-portfolio">
                  <button id="codeSource">CODE SOURCE</button>{" "}
                </Link>
                <Link to="https://htmlcss21.netlify.app/">
                  {" "}
                  <button id="liveServer">LIVE SERVER</button>{" "}
                </Link>
              </div>
            </p>
          </div>

          <div>
            <h1>Javascript Game</h1>

            <img src={jsGame} alt="jsgamepicture" />

            <p>
              "Navigate the Rush Hour: Dodge and weave through traffic in this
              thrilling JavaScript game. Avoid oncoming cars and test your
              reflexes to reach the high score. Use KeyA to move left and KeyD
              to move right. Can you conquer the road and stay safe?"
              <br />
              <Link to="https://github.com/cyyy21/p2-js-game">
                <button id="codeSource">CODE SOURCE</button>{" "}
              </Link>
              <Link to="https://rushhour-js.netlify.app/">
                {" "}
                <button id="liveServer">LIVE SERVER</button>{" "}
              </Link>
            </p>
          </div>

          <div>
            <h1>BMI CALCULATOR</h1>

            <img src={bmiCalculator} alt="bmi project" id="bmi" />

            <p>
              "Stay Informed with BMI Calculator: Take charge of your health
              journey effortlessly with the BMI Calculator app. By effortlessly
              inputting your height and weight, you'll swiftly receive your body
              mass index (BMI) - a vital indicator of your weight status.
              Discover whether you're within the healthy weight range and make
              informed choices for your well-being. Simplify your health
              assessment today! <br />
              <Link to="https://github.com/cyyy21/p3-react-app">
                <button id="codeSource">CODE SOURCE</button>{" "}
              </Link>
              <Link to="https://bmi-calculatorproj.netlify.app/">
                {" "}
                <button id="liveServer">LIVE SERVER</button>{" "}
              </Link>
            </p>
          </div>

          <div>
            <h1>GALANA APP </h1>

            <img src={galana} alt="galana" />

            <p>
              The Galana App is application designed to help you add travel
              information. With this app, you can add, edit, and delete places
              to blog about your hotels or places. <br />
              <Link to="https://github.com/cyyy21/p4-node-frontend">
                <button id="codeSource">frontEnd Code</button>{" "}
              </Link>
              <Link to="https://github.com/cyyy21/p4-node-backend">
                <button id="codeSource">BackEnd Code </button>{" "}
              </Link>
              <Link to="https://galana-app.onrender.com">
                {" "}
                <button id="liveServer">LIVE SERVER</button>{" "}
              </Link>
            </p>
          </div>

          <div>
            <h1>WanderList</h1>

            <img src={wanderList} alt="wandeerlist- homepage" />

            <p>
              <span>TEAM PROJECT :</span> The Itinerary App is a user-friendly
              application designed to help you organize and plan your travel
              adventures efficiently.
              <br />
              <Link to="https://github.com/NikkoVP/FullStack-MERN-Team-Project">
                <button id="codeSource">Code Source</button>{" "}
              </Link>
              <Link to="https://wanderlist-lchl.onrender.com/">
                {" "}
                <button id="liveServer">LIVE SERVER</button>{" "}
              </Link>
            </p>
          </div>
        </div>
        <div id="line"></div>
      </section>

      <footer id="accounts">
        <div id="accountsContainer">
          <h1>Accounts</h1>
          <div id="socialMedia">
            <Link to="https://github.com/cyyy21" id="github">
              <FaGithub />
            </Link>
            <Link
              to="https://www.linkedin.com/in/cyril-john-de-leon-2bbb08273/"
              id="linkedIn">
              <FaLinkedin />
            </Link>
            <Link
              to="https://www.messenger.com/t/100004758971517"
              id="messenger">
              <FaFacebookMessenger />
            </Link>
            <Link to="mailto:deleon.cyriljohn21@gmail.com" id="gmail">
              <FaGoogle />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
