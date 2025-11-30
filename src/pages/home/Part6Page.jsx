import './Part6Page.css';
import { FaUsers, FaChartLine, FaAward, FaGraduationCap } from "react-icons/fa";

export function Part6Page() {
    const items = [
        {
            icon: <FaUsers />,
            traditional: "Relying on personal connections",
            modern: "Building verifiable skills and expertise",
        },
        {
            icon: <FaChartLine />,
            traditional: "Waiting for opportunities to come",
            modern: "Creating opportunities through competence",
        },
        {
            icon: <FaAward />,
            traditional: "Limited by who you know",
            modern: "Empowered by what you can do",
        },
        {
            icon: <FaGraduationCap />,
            traditional: "Dependent on external validation",
            modern: "Backed by tangible achievements",
        },
    ];

    return (
        <section className="shift-wrapper">
            <h1 className="shift-title">The Paradigm Shift</h1>
            <h2 className="shift-subtitle">Moving from traditional networking to merit-based success</h2>

            <div className="shift-grid">
                {items.map((item, i) => (
                    <div className="shift-card" key={i}>


                        <div className="section traditional">
                            <div className="section-header">
                                <span className="section-title">TRADITIONAL APPROACH</span>
                                <span className="section-icon">{item.icon}</span>
                            </div>
                            <p className="section-text">{item.traditional}</p>
                        </div>

                        <div className="shift-divider"></div>


                        <div className="section modern">
                            <div className="section-header">
                                <span className="section-title modern-title">MODERN APPROACH</span>
                                <span className="section-icon modern-icon">{item.icon}</span>
                            </div>
                            <p className="section-text modern-text">{item.modern}</p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}