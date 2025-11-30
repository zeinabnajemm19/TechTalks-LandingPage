import './Part1.css';
import { Link } from "react-router";
import { IoBookOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";


export function Part1() {
    return (

        <div className="hero-container">

            <h1 className="hero-title">From <span>Devs</span> to Devs</h1>
            <p className="hero-subtitle">TechTalks is here to cut through the noise and guide developers with clarity, not clutter.</p>

            <div className="hero-buttons">
                <Link to="../CoursesPage" style={{ textDecoration: 'none' }}>
                    <button className="btn-explore">
                        <IoBookOutline /> Explore Courses <FaArrowRight />
                    </button>
                </Link>

                <button className="btn-community">
                    <FiUsers /> Join Community
                </button>
            </div>

            <div className="mission-section">
                <h3 className="mission-title">Our Mission</h3>
                <p className="mission-article">
                    We believe every developer deserves a clear path, not just endless tutorials. TechTalks is about real learning, with purpose. We're here to bridge the gap between confusion and confidence, turning scattered knowledge into structured growth that actually sticks.
                </p>
            </div>

        </div>
    );
}

