import {
  DiHtml5, DiCss3, DiBootstrap, DiJavascript1, DiNodejs,
  DiReact, DiMongodb, DiJava
} from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import { SiFirebase } from "react-icons/si";
// import "./TechStack.css"; // Import the custom CSS

const TechStack = () => {
        <section className="tech" id="tech">
            <h2 className="heading">Technologies Covered</h2>
            <div className="tech-stack-row">
                <div className="tech-icons">
                    <DiHtml5 />
                </div>
                <div className="tech-icons">
                    <DiCss3 />
                </div>
                <div className="tech-icons">
                    <DiBootstrap />
                </div>
                <div className="tech-icons">
                    <DiJavascript1 />
                </div>
                <div className="tech-icons">
                    <CgCPlusPlus />
                </div>
                <div className="tech-icons">
                    <DiNodejs />
                </div>
                <div className="tech-icons">
                    <DiReact />
                </div>
                <div className="tech-icons">
                    <DiMongodb />
                </div>
                <div className="tech-icons">
                    <SiFirebase />
                </div>
                <div className="tech-icons">
                    <DiJava />
                </div>
            </div>
        </section>
};

export default TechStack;
