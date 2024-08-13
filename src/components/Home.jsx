import React from 'react';
// import './Home.css';
import img from '../Images/myphoto.png'
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ullam laborum hic praesentium eos,
                sapiente a enim voluptatum, commodi sequi similique. Voluptates in nobis distinctio laborum veniam veritatis
                fugiat quae.
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
