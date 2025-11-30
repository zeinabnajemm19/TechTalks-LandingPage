import { Link } from "react-router";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export function Footer() {
    return (
        <footer className="footer">

            <div className="footer-top">

                <div className="footer-section">
                    <Link to="/" className="footer-logo-row" >
                        <img
                            src="public/images/TechTalksLogo.webp"
                            className="footer-logo"
                            alt="Logo"
                        />
                        <h2 className="footer-company-name">TechTalks</h2>
                    </Link>

                    <p className="footer-description">
                        We've been stuck too. That's why we built this.
                    </p>
                </div>


                <div className="footer-section">
                    <h3 className="footer-title">Explore</h3>
                    <Link className="footer-link" to="/CoursesPage">Courses</Link>
                    <Link className="footer-link" to="/ChampionsPage">Champions</Link>
                    <Link className="footer-link" to="/InternshipPage">Internship</Link>
                    <Link className="footer-link" to="/Card-gamePage">Card Game</Link>
                </div>


                <div className="footer-section">
                    <h3 className="footer-title">Company</h3>
                    <Link className="footer-link" to="/AboutPage">About TechTalks</Link>
                    <Link className="footer-link" to="/ContactPage">Contact</Link>
                    <Link className="footer-link" to="/TermsPage">Terms & Conditions</Link>
                </div>


                <div className="footer-section">
                    <h3 className="footer-title">Connect</h3>
                    <p className="footer-description">
                        Follow us and stay connected with the TechTalks community
                    </p>
                    <div className="footer-icons">
                        <FaInstagram className="footer-icon" />
                        <FaLinkedin className="footer-icon" />
                        <FaEnvelope className="footer-icon" />
                    </div>
                </div>
            </div>

            <div className="footer-blue-line"></div>

            <div className="footer-bottom">
                <p className="footer-bottom-text">© 2025 TechTalks. All rights reserved.</p>

                <div className="footer-bottom-links">
                    <Link className="footer-bottom-link" to="/TermsPage">Terms & Privacy</Link>
                    <Link className="footer-bottom-link" to="/ContactPage">Contact</Link>
                </div>
            </div>

        </footer>

    );
}
