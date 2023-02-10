import React from 'react';
import logo from '../../assets/logo.svg'
import './footer.css';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>

      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="Logo" srcset="" />
          <p>Dodoma, Tanzania, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p><a href="#home">Home</a></p>
          <p><a href="#whatgpt3">WhatGPT-3</a></p>
          <p><a href="#possibility">OpenAI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Dodoma, Tanzania</p>
          <p>+255 629648911 || +255 742605790</p>
          <p>patrickbijampola@gmail.com</p>
        </div>
      </div>
      <div className="gpt3__footer-social-media">
      <p><a href="https://linkedin.com/in/patrick-bijampola-9857b61a2"><i class="fa-brands fa-instagram"></i>LinkedIn</a></p>
      <p><a href="https://github.com/pbijampola"> <i class="fa-brands fa-instagram"></i>GitHub</a></p>
      <p><a href="https://twitter.com/pattioh1"><i class="fa-brands fa-instagram"></i>Twitter</a></p>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3.  Patrick Bijampola|All rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer