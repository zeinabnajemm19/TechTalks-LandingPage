import './Part7Page.css';
import { FaLinkedin } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

const teamMembers = [
    {
        name: "Khaled Frayji",
        role: "Founder & CEO",
        image: "/images/khaled.png",
        linkedin: "https://www.linkedin.com/in/khaledfrayji/"
    },
    {
        name: "Mustafa Elmheimid",
        role: "Co-Founder",
        image: "/images/mustafa.png",
        linkedin: "https://www.linkedin.com/in/mustafa-almheimid/"
    },
    {
        name: "Kinda Halaby",
        role: "Graphic Designer",
        image: "/images/Kinda.png",
        linkedin: "https://www.linkedin.com/in/kinda-halaby-25751a329/"
    },
    {
        name: "Hussein Mansour",
        role: "IT & System Engineer",
        image: "/images/hussein.png",
        linkedin: "https://www.linkedin.com/in/hussein-mansour0/"
    },
    {
        name: "Qusai Okla",
        role: "Cybersecurity Specialist",
        image: "/images/Qusai.png",
        linkedin: "https://www.linkedin.com/in/qusai-okla-02589b263/"
    }
];

export function Part7Page() {
    return (
        <>
            <div className="team-section">
                <div className="team-header">
                    <FiUsers className="team-icon" />
                    <h2 className="team-title">
                        Meet Our <span className="gradient-text">Team</span>
                    </h2>
                </div>
                <p className="team-subtitle">
                    The passionate individuals behind TechTalks, dedicated to transforming tech education in Lebanon.
                </p>

                <div className="team-members">
                    {teamMembers.map((member, index) => (
                        <div className="team-member-box" key={index}>
                            <div className="member-image-container">
                                <img src={member.image} className="member-image" />
                                <a href={member.linkedin} target="_blank" className="linkedin-overlay">
                                    <FaLinkedin className="linkedin-icon" />
                                    <span>View Profile</span>
                                </a>
                            </div>
                            <h3 className="member-name">{member.name}</h3>
                            <p className="member-role">{member.role}</p>
                        </div>
                    ))}
                </div>

            </div>
            <div className="join-team-section">
                <div className="join-team-box">
                    <h3 className="join-team-title">Want to Join Our Team?</h3>
                    <p className="join-team-text">
                        We're always looking for passionate individuals who want to make a difference in tech education.
                    </p>
                    <button className="join-team-button">Get In Touch</button>
                </div>
            </div>
        </>


    );
}