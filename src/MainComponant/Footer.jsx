import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <>
      <footer className='footer' id='contact'>
        <div className='touchwith getTouch'>
          <h1>Get in Touch</h1>
          <p>Let's build modern, scalable web applications together using the MERN stack.</p>
          <div className='footersociallink'>
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
        <div className='touchUs getTouch'>
          <div id='web1'>
            <div id='web2'>
              <i class="fa-solid fa-globe"></i>
              <a href='https://www.codinginfosystem.com'>Coding InfoSystem</a>
            </div>
          </div>
          <div id='email1'>
            <div id='email2'>
              <i class="fa-solid fa-envelope"></i>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=maitysanjib023@gmail.com" target="_blank">maitysanjib023@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
