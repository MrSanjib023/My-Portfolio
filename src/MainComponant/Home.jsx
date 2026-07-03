import React from 'react';
import './Home.css';
import heroimg from '../Photos/background7.jpeg';
import profileimg from '../Photos/Sanjib.png';
import profileimg2 from '../Photos/sanjib2.jpg';
import html from '../Photos/html-5.png';
import css from '../Photos/css.png';
import js from '../Photos/js.png';
import react from '../Photos/react.png';
import git from '../Photos/git.png';
import github from '../Photos/github.png';
import mongodb from '../Photos/mongodb.png';
import express from '../Photos/expressjs.png';
import node from '../Photos/node.png';
import projectimg1 from '../Photos/project1.png';
import { useState, useEffect } from "react";


const words = [
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MERN Stack Developer"
];

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [letter, setLetter] = useState(0);

  useEffect(() => {
    if (letter < words[index].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + words[index][letter]);
        setLetter(letter + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setLetter(0);
        setIndex((prev) => (prev + 1) % words.length);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [letter, index]);


  let Projects = [
    {
      projectName: "Hotel Website",
      theme: projectimg1,
      des: "This is my first project. In this website backend not included.",
      uselg1: "Js",
      uselg2: "React.js",
      uselg3: "Node.js"

    },
    {
      projectName: "Hotel Website",
      theme: projectimg1,
      des: "This is my first project. In this website backend not included.",
      uselg1: "Js",
      uselg2: "React.js",
      uselg3: "Node.js"
    },
    {
      projectName: "Hotel Website",
      theme: projectimg1,
      des: "This is my first project. In this website backend not included.",
      uselg1: "Js",
      uselg2: "React.js",
      uselg3: "Node.js"

    }
  ]

  return (
    <>
      <main>
        <div className='section' id='home'>
          {/* <img src={heroimg} id='heroimage'></img> */}
          <div className='hero'>
            <div className='heroLeft'>
              <h1><span>| </span>Hi I'm</h1>
              <div className='name'>
                <span id='span1'>Sanjib</span>
                <span id='span2'>Maity</span>
              </div>
              <h2 id='fullstackH1'>Full Stack MERN Developer</h2>
              <h4 className="typing">Expert in&nbsp;
                {text}
                <span>|</span>
              </h4>
              <h5>I build modern, responcive and scalable applications
                using the MERN stack and love turning ideas into
                real world solution</h5>
              <div className='buttonsec'>
                <button type="button" class="btn btn-primary btn-lg hirebtn">Hire Me <i class="fa-solid fa-code-merge hirebtn"></i></button>
                <button type="button" class="btn btn-outline-primary btn-lg downloadbtn">Download CV<i class="fa-solid fa-download downloadbtn"></i></button>
              </div>
              <div className='socialmedia'>
                <h6>Connect with me...</h6>
                <div className='sociallink'>
                  <a href='https://github.com/MrSanjib023'>
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a href='https://www.linkedin.com/in/sanjib-maity-474876264/'>
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href='https://x.com/maitysanjib023'>
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=maitysanjib023@gmail.com" target="_blank">
                    <i class="fa-solid fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className='heroRight'>
              <img src={profileimg} id='profilephoto'></img>
            </div>
          </div>
        </div>
        <div className='aboutmain' id='about'>
          <h1>ABOUT ME</h1>
          <div className='about_stack'>
            <div className='myabout'>
              <div className='profiletag'>
                <img src={profileimg2}></img>
                <h5>About Me</h5>
              </div>
              <p>I am a Fullstack MERN Developer specializing in building exceptional digital experiences. I enjoy solving complex problem with clean code and creating user-frendly applications.</p>
              <div className='information'>
                <div className='info'>
                  <i class="fa-solid fa-circle-user"></i>
                  <p>Name</p>
                  <p id='info1'>: Sanjib Maity</p>
                </div>
                <div className='info'>
                  <i class="fa-solid fa-location-dot"></i>
                  <p>Location</p>
                  <p>: Westbengal, India</p>
                </div>
                <div className='info'>
                  <i class="fa-solid fa-envelope"></i>
                  <p>Email</p>
                  <p id='info2'>: maitysanjib023@gmail.com</p>
                </div>
                <div className='info'>
                  <i class="fa-brands fa-square-upwork"></i>
                  <p>Freelace</p>
                  <p id='info3'> : Avilable</p>
                </div>
              </div>
              <button type="button" class="btn active" data-bs-toggle="button" aria-pressed="true">Know more about me</button>
            </div>
            <div className='mystack' id='service'>
              <div className='profiletag'>
                <img src={profileimg2}></img>
                <h5>Tech Stack</h5>
              </div>
              <div className='stack_upper'>
                <div className='up'>
                  <img src={html}></img>
                  <p>HTML 5</p>
                </div>
                <div className='up'>
                  <img src={css}></img>
                  <p>CSS</p>
                </div>
                <div className='up'>
                  <img src={js}></img>
                  <p>JS</p>
                </div>
                <div className='up'>
                  <img src={react}></img>
                  <p>REACT.js</p>
                </div>
                <div className='up'>
                  <img src={node}></img>
                  <p>NODE.js</p>
                </div>
              </div>
              <div className='stack_lower'>
                <div className='up'>
                  <img src={express}></img>
                  <p>EXPRESS.js</p>
                </div>
                <div className='up'>
                  <img src={mongodb}></img>
                  <p>mongodb</p>
                </div>
                <div className='up'>
                  <img src={git}></img>
                  <p>GIT</p>
                </div>
                <div className='up'>
                  <img src={github}></img>
                  <p>Github</p>
                </div>
                <div className='up'>
                  <img src={node}></img>
                  <p>NODE.js</p>
                </div>
              </div>
            </div>
          </div>
          <div className='skillsection' id='skills'>
            <h5><i class="fa-solid fa-code"></i>Skills</h5>
            <div className='skills'>
              <div className='skill'>
                <h6>Frontent</h6>
                <div className='skillp'>
                  <span>Html</span>
                  <div className='skillpercentage'>
                    <div id='htmlfill'></div>
                  </div>
                </div>
                <div className='skillp'>
                  <span>Css</span>
                  <div className='skillpercentage'>
                    <div id='cssfill'></div>
                  </div>
                </div>
                <div className='skillp'>
                  <span>Javascript</span>
                  <div className='skillpercentage'>
                    <div id='jsfill'></div>
                  </div>
                </div>
                <div className='skillp'>
                  <span>React</span>
                  <div className='skillpercentage'>
                    <div id='reactfill'></div>
                  </div>
                </div>
                <div className='skillp'>
                  <span>Tailwind css</span>
                  <div className='skillpercentage'>
                    <div id='tailwfill'></div>
                  </div>
                </div>
                <div className='skillp'>
                  <span>Bootstrap</span>
                  <div className='skillpercentage'>
                    <div id='bootfill'></div>
                  </div>
                </div>

              </div>
              <div className='skill' id='skill2'>
                <h6>Backend</h6>
                <div className='skillp'>
                  <span>Node.js</span>
                  <div className='skillpercentage'>
                    <div id='nodefill'></div>
                  </div>
                </div>
                <div className='skillp'>
                  <span>Express.js</span>
                  <div className='skillpercentage'>
                    <div id='expressfill'></div>
                  </div>
                </div>
              </div>
              <div className='skill' id='skill3'>
                <h6>Database</h6>
                <div className='skillp'>
                  <span>MongoDB</span>
                  <div className='skillpercentage'>
                    <div id='mongofill'></div>
                  </div>
                </div>
                <div className='skillp'>
                  <span>Firebase</span>
                  <div className='skillpercentage'>
                    <div id='firebasefill'></div>
                  </div>
                </div>
              </div>
              <div className='skill' id='skill4'>
                <h6>Tools</h6>
                <div className='skillp'>
                  <span>Git</span>
                  <div className='skillpercentage'>
                    <div id='gitfill'></div>
                  </div>
                </div>
                <div className='skillp'>
                  <span>Github</span>
                  <div className='skillpercentage'>
                    <div id='githubfill'></div>
                  </div>
                </div>
                <div className='skillp'>
                  <span>VS code</span>
                  <div className='skillpercentage'>
                    <div id='vscodefill'></div>
                  </div>
                </div>
                <div className='skillp'>
                  <span>Postman</span>
                  <div className='skillpercentage'>
                    <div id='postmanfill'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='projectsection' id='projects'>
          <h1>PROJECTS</h1>
          <div className='projectmain'>
            {Projects.map((work) => {
              return (
                <div className="card" style={{ width: "18rem" }}>
                  <img src={work.theme} className="card-img-top" alt={work.projectName} />
                  <div class="card-body">
                    <h5 className="card-title">{work.projectName}</h5>
                    <p className="card-text">{work.des}</p>
                    <div className='language'>
                      <ul>
                        <li>{work.uselg1}</li>
                        <li>{work.uselg2}</li>
                        <li>{work.uselg3}</li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Go to Website</a>
                  </div>
                </div>
              )

            })}
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
