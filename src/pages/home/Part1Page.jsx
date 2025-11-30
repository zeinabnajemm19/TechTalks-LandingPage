import "./Part1Page.css";
import { FaArrowRight, FaCoffee, FaCode, FaPlay } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";
import { Link } from "react-router";

export function Part1Page() {
    return (
        <div className="hero">
            <div className="hero-left animate-left">
                <p className="hero-label">BUILT BY DEVS, FOR DEVS</p>

                <h1 className="hero-title">
                    Lebanon's <span className="gradient-text">Biggest Tech Community</span><br />
                </h1>

                <p className="hero-subtitle">
                    Code smarter, not harder → with the right path and the right people.
                </p>

                <div className="hero-buttons">
                    <Link to="/CoursesPage" style={{ textDecoration: 'none' }}>
                        <button className="btn-explore">
                            <IoBookOutline /> Explore Courses <FaArrowRight />
                        </button>
                    </Link>

                    <button className="btn-community">
                        <FiUsers /> Join Community
                    </button>
                </div>


                <p className="trusted-text">Trusted by 5,000+ developers in Lebanon</p>

                <div className="icons-row">
                    <div className="icon-item">
                        <div className="icon-circle coffee">
                            <FaCoffee />
                        </div>
                        <span>Coffee</span>
                    </div>

                    <div className="icon-item">
                        <div className="icon-circle code">
                            <FaCode />
                        </div>
                        <span>Code</span>
                    </div>

                    <div className="icon-item">
                        <div className="icon-circle music">
                            <FaPlay />
                        </div>
                        <span>Enjoy</span>
                    </div>
                </div>
            </div>


            <div className="hero-right animate-right">
                <div class="card">


                    <div class="floating-icon blue-icon icon-top-right">
                        <span class="icon">&lt;&gt;</span>
                    </div>


                    <div class="floating-icon purple-icon icon-bottom-left">
                        <FaPlay className="icon" />
                    </div>

                    <div class="code-box">
                        <div class="code-header">
                            <span class="dot red"></span>
                            <span class="dot yellow"></span>
                            <span class="dot green"></span>
                        </div>

                        <pre className="code-box">
                            <code>
                                <span className="purple">function</span> <span className="blue">learnProgramming</span>() {'{'}
                                <br />
                                &nbsp;&nbsp;<span className="gray">const</span> <span className="blue">skills</span> = ['<span className="cyan">React</span>', '<span className="cyan">Node.js</span>', '<span className="cyan">Python</span>']
                                <br />
                                &nbsp;&nbsp;<span className="purple">return</span> <span className="blue">buildYourFuture</span>(skills)
                                <br />
                                {'}'}
                            </code>
                        </pre>
                    </div>

                    <div class="react-section">

                        <div class="course course-1">
                            <div class="left">
                                <div class="circle"></div>
                                <div>
                                    <h4>React Fundamentals</h4>
                                    <p>85% Complete</p>
                                </div>
                            </div>
                            <div class="progress-bar">
                                <div class="progress"></div>
                            </div>
                        </div>

                        <div class="course course-2">
                            <div class="left">
                                <div class="circle"></div>
                                <div>
                                    <h4>Node.js Mastery</h4>
                                    <p>Next Course</p>
                                </div>
                            </div>
                            <Link to="/CoursesPage" style={{ textDecoration: 'none' }}>
                                <button class="start-btn">Start</button>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
