import './Part4.css';
import { FiStar, FiUsers } from "react-icons/fi";
import { FaRegLightbulb } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";

export function Part4() {
    const items = [
        {
            icon: <FaRegLightbulb />,
            date: "2024",
            title: "The Spark",
            text: "Frustrated with scattered tutorials and outdated courses, we decided to build something better.",
        },
        {
            icon: <FiUsers />,
            date: "Early 2025",
            title: "Community Formation",
            text: "Started with a small group of passionate developers sharing knowledge and feedback.",
        },
        {
            icon: <IoRocketOutline />,
            date: "Mid 2025",
            title: "Platform Launch",
            text: "Launched TechTalks with our first set of curated learning paths and courses.",
        },
        {
            icon: <FiStar />,
            date: "Today",
            title: "Growing Community",
            text: "Thousands of developers learning, growing, and helping each other succeed.",
        },
    ];

    return (
        <section className="timeline-section">
            <h2 className="timeline-title">The Journey So Far</h2>

            <div className="timeline-container">
                <div className="line"></div>

                {items.map((item, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="icon-wrapper">
                            <div className="Icon">{item.icon}</div>
                        </div>

                        <div className="Card">
                            <h3>
                                <span className="date">{item.date}</span> {item.title}
                            </h3>
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
