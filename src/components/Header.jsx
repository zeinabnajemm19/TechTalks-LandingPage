import { useState } from "react";
import { Link } from 'react-router';
import { LuHouse } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { LuTrophy } from "react-icons/lu";
import { RiFocus2Line } from "react-icons/ri";
import './Header.css';
import { Marquee } from "./Marquee.jsx";

export function Header({ activePage }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>

            <Marquee />

            <div className="header">
                <div className="left-section">
                    <Link to="/" className="header-link">
                        <img className="logo" src="public/images/TechTalksLogo.webp" />
                        <span className="logo-text">Tech Talks</span>
                    </Link>
                </div>



                <div className="middle-section">
                    <nav className="nav-links">
                        <Link to="/" className="header-link" id={activePage === 1 ? "active" : ""} ><LuHouse />Home</Link>
                        <Link to="/CoursesPage" className="header-link" id={activePage === 2 ? "active" : ""}><IoBookOutline />Courses</Link>
                        <Link to="/AboutPage" className="header-link" id={activePage === 3 ? "active" : ""}><FiUsers />About TechTalks</Link>
                        <Link to="/ChampionsPage" className="header-link" id={activePage === 4 ? "active" : ""}><LuTrophy />Champions</Link>
                        <Link to="/DevBountyPage" className="header-link" id={activePage === 5 ? "active" : ""}><RiFocus2Line />DevBounty</Link>
                    </nav>


                    <div
                        className={`hamburger-menu ${menuOpen ? "open" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>

                    <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
                        <Link to="/"><LuHouse /> Home</Link>
                        <Link to="/CoursesPage"><IoBookOutline /> Courses</Link>
                        <Link to="/AboutPage"><FiUsers /> About TechTalks</Link>
                        <Link to="/ChampionsPage"><LuTrophy /> Champions</Link>
                        <Link to="/DevBountyPage"><RiFocus2Line /> DevBounty</Link>

                        <Link to="/CoursesPage">
                            <button className="start-learning-button">Start Learning</button>
                        </Link>
                    </div>

                </div>



                <div className="right-section">
                    <Link to="/CoursesPage">
                        <button className="start-learning-button">Start Learning</button>
                    </Link>
                </div>

            </div>

        </>
    );

}
