import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

export default function Footer() {

  return <div className="footerDiv">
    <div class="footersDiv2">
      <FaGithub  className="ico" size={40} />
      <FaFacebook  className="ico" size={40}/>
      <FaLinkedin  className="ico" size={40}/>
      <FaEnvelope  className="ico" size={40}/>
    </div>
  </div>
}