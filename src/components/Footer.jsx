import React from 'react';
// import './Footer.css';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => (
  <footer className="footer">
    <div className="social">
      <a href="https://www.linkedin.com/in/ponraj-muniyaraj-a283a4243/"><FaLinkedinIn /></a>
      <a href="https://github.com/Ponraj2398"><AiFillGithub /></a>
      <a href="https://www.instagram.com/ponraj_rahul2398/"><AiFillInstagram /></a>
      <a href="#"><AiOutlineTwitter /></a>
    </div>
    <ul className="list">
      <li><a href="#">FAQ</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">About Me</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <p className="copyright">
      © Ponraj | All Rights Reserved.
    </p>
  </footer>
);

export default Footer;
