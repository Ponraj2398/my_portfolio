import React from 'react';
import {
    DiHtml5, DiCss3, DiBootstrap, DiJavascript1, DiNodejs,
    DiReact, DiMongodb
} from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import { SiFirebase, SiNetlify, SiVuedotjs } from "react-icons/si";
// import "./TechStack.css"; // Import the custom CSS

const TechStack = () => (
    <section className="tech" id="tech">
        <h2 className="heading">Technologies Covered</h2>
        {/* <div className="tech-stack-row">
            <div className="tech-icons">
                <DiHtml5 className='tc' />
            </div>
            <div className="tech-icons">
                <DiCss3 className='tc' />
            </div>
            <div className="tech-icons">
                <DiBootstrap className='tc' />
            </div>
            <div className="tech-icons">
                <DiJavascript1 className='tc' />
            </div>
            <div className="tech-icons">
                <CgCPlusPlus className='tc' />
            </div>
            <div className="tech-icons">
                <DiNodejs className='tc' />
            </div>
            <div className="tech-icons">
                <DiReact className='tc' />
            </div>
            <div className="tech-icons">
                <DiMongodb className='tc' />
            </div>
            <div className="tech-icons">
                <SiFirebase className='tc' />
            </div>
            <div className="tech-icons">
                <SiNetlify className='tc' />
            </div>
        </div> */}

        <div className="wrapper">
            <div className="cols">
                {/* HTML5 Icon */}
                <div className="col" onTouchStart={(e) => e.currentTarget.classList.toggle("hover")}>
                    <div className="container">
                        <div className="front icon-container">
                            <div className="inner">
                                <DiHtml5 size={100} color="#E34F26" />
                                <p>HTML5</p>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>HTML5 is the latest version of the Hypertext Markup Language used for creating web pages.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CSS3 Icon */}
                <div className="col" onTouchStart={(e) => e.currentTarget.classList.toggle("hover")}>
                    <div className="container">
                        <div className="front icon-container">
                            <div className="inner">
                                <DiCss3 size={100} color="#1572B6" />
                                <p>CSS3</p>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>CSS3 is used for styling and designing web pages with advanced features.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bootstrap Icon */}
                <div className="col" onTouchStart={(e) => e.currentTarget.classList.toggle("hover")}>
                    <div className="container">
                        <div className="front icon-container">
                            <div className="inner">
                                <DiBootstrap size={100} color="#563D7C" />
                                <p>Bootstrap</p>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>Bootstrap is a popular CSS framework for developing responsive websites.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* JavaScript Icon */}
                <div className="col" onTouchStart={(e) => e.currentTarget.classList.toggle("hover")}>
                    <div className="container">
                        <div className="front icon-container">
                            <div className="inner">
                                <DiJavascript1 size={100} color="#F7DF1E" />
                                <p>JavaScript</p>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>JavaScript is a powerful programming language used for dynamic web development.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Vuejs Icon */}
                <div className="col" onTouchStart={(e) => e.currentTarget.classList.toggle("hover")}>
                    <div className="container">
                        <div className="front icon-container">
                            <div className="inner">
                                <SiVuedotjs size={100} color="#42b883" />
                                <p>Vue.js</p>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>Vue.js is a progressive JavaScript framework for building user interfaces.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* React Icon */}
                <div className="col" onTouchStart={(e) => e.currentTarget.classList.toggle("hover")}>
                    <div className="container">
                        <div className="front icon-container">
                            <div className="inner">
                                <DiReact size={100} color="#61DAFB" />
                                <p>React</p>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>React is a JavaScript library for building user interfaces.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Node.js Icon */}
                <div className="col" onTouchStart={(e) => e.currentTarget.classList.toggle("hover")}>
                    <div className="container">
                        <div className="front icon-container">
                            <div className="inner">
                                <DiNodejs size={100} color="#339933" />
                                <p>Node.js</p>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>Node.js is a runtime environment that allows JavaScript to be used server-side.</p>
                            </div>
                        </div>
                    </div>
                </div>



                {/* MongoDB Icon */}
                <div className="col" onTouchStart={(e) => e.currentTarget.classList.toggle("hover")}>
                    <div className="container">
                        <div className="front icon-container">
                            <div className="inner">
                                <DiMongodb size={100} color="#47A248" />
                                <p>MongoDB</p>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>MongoDB is a NoSQL database known for its scalability and flexibility.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* C++ Icon */}
                <div className="col" onTouchStart={(e) => e.currentTarget.classList.toggle("hover")}>
                    <div className="container">
                        <div className="front icon-container">
                            <div className="inner">
                                <CgCPlusPlus size={100} color="#00599C" />
                                <p>C++</p>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>C++ is a general-purpose programming language known for its performance and efficiency.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Firebase Icon */}
                <div className="col" onTouchStart={(e) => e.currentTarget.classList.toggle("hover")}>
                    <div className="container">
                        <div className="front icon-container">
                            <div className="inner">
                                <SiFirebase size={100} color="#FFCA28" />
                                <p>Firebase</p>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>Firebase is a platform developed by Google for building mobile and web applications.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Netlify Icon */}
                <div className="col" onTouchStart={(e) => e.currentTarget.classList.toggle("hover")}>
                    <div className="container">
                        <div className="front icon-container">
                            <div className="inner">
                                <SiNetlify size={100} color="#00C7B7" />
                                <p>Netlify</p>
                            </div>
                        </div>
                        <div className="back">
                            <div className="inner">
                                <p>Netlify is a cloud computing company that offers hosting and serverless backend services for web applications.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

export default TechStack;
