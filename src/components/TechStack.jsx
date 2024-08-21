import React from 'react';
import {
  DiHtml5, DiCss3, DiBootstrap, DiJavascript1, DiNodejs,
  DiReact, DiMongodb, DiJava
} from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import { SiFirebase } from "react-icons/si";
// import "./TechStack.css"; // Import the custom CSS

const TechStack = () => (
        <section className="tech" id="tech">
            <h2 className="heading">Technologies Covered</h2>
            <div className="tech-stack-row">
                <div className="tech-icons">
                    <DiHtml5 className='tc'/>
                </div>
                <div className="tech-icons">
                    <DiCss3 className='tc'/>
                </div>
                <div className="tech-icons">
                    <DiBootstrap className='tc'/>
                </div>
                <div className="tech-icons">
                    <DiJavascript1 className='tc'/>
                </div>
                <div className="tech-icons">
                    <CgCPlusPlus className='tc'/>
                </div>
                <div className="tech-icons">
                    <DiNodejs className='tc'/>
                </div>
                <div className="tech-icons">
                    <DiReact className='tc'/>
                </div>
                <div className="tech-icons">
                    <DiMongodb className='tc'/>
                </div>
                <div className="tech-icons">
                    <SiFirebase className='tc'/>
                </div>
                <div className="tech-icons">
                    <DiJava className='tc'/>
                </div>
            </div>
        </section>
);

export default TechStack;
