import React from 'react';
// import './Home.css';
import img from '../Images/developerimage.png'
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => (
    <section className="home" id="home">
        <div className="home-content">
            <h1>Hi, It's <span>Ponraj</span></h1>
            <h3 className="text-animation">I'm a <span></span></h3>
            <p>
                Completed an intensive Full Stack Developer course covering front-end and back-end technologies.
                Gained hands-on experience in designing and implementing end-to-end web applications.
                Developed real-world projects like an AI Quiz Generator and a Pizza Delivery App,
                utilizing technologies such as VueJS, React.js, Node.js, and MongoDB.
            </p>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/ponraj-muniyaraj-a283a4243/"><FaLinkedinIn /></a>
                <a href="https://github.com/Ponraj2398"><AiFillGithub /></a>
                <a href="https://www.instagram.com/ponraj_rahul2398/"><AiFillInstagram /></a>
                <a href="#"><AiOutlineTwitter /></a>
            </div>
            <div className="btn-group">
                <a href="#" className="btn">Hire</a>
                <a href="#contact" className="btn">Contact</a>
            </div>
        </div>
        <div className="home-img">
            <img src={img} alt="Profile" />
        </div>
    </section>
);

export default Home;
