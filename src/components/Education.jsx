import React from 'react';
// import './Education.css';

const Education = () => (
    <section className="education" id="education">
        <h2 className="heading">Education</h2>
        <div className="timeline-items">
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2016 - 2019</div>
                <div className="timeline-content">
                    <h3>N.M.S.S.V.N.COLLEGE</h3>
                    <p>
                        B.Sc.Computer Science - 78.4%
                    </p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2015 - 2016</div>
                <div className="timeline-content">
                    <h3>V.H.N.HR.SECONDARY SCHOOL</h3>
                    <p>
                      HSC - 87.1%
                    </p>
                </div>
            </div>
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2013 - 2014</div>
                <div className="timeline-content">
                    <h3>V.H.N.HR.SECONDARY SCHOOL</h3>
                    <p>
                     SSLC - 93.6%
                    </p>
                </div>
            </div>
            {/* <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2021</div>
                <div className="timeline-content">
                    <h3>High School</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem voluptas optio inventore laboriosam odio
                        adipisci at, debitis aliquam. Praesentium dolore delectus sequi? Odio obcaecati, veniam cumque eum
                        excepturi quo repellat.
                    </p>
                </div>
            </div> */}
        </div>
    </section>
);

export default Education;
