import './Part3Champions.css';
import { PiMedalThin } from "react-icons/pi";
export function Part3Champions() {
    return (

        <div className="champions-container">
            <p className="champions-count">
                Showing 9 - 15 of 15 champions
            </p>

            <div className="champions-card">
                <h2 className="title">Want to Join Our Champions?</h2>

                <p className="subtitle">
                    Start your journey with TechTalks and become part of our success stories.
                </p>

                <p className="subtitle">
                    Learn from industry experts and build real-world projects that matter.
                </p>

                <div className="button-wrapper">
                    <button className="internship-btn">
                        <PiMedalThin />
                        Internship Program
                    </button>
                </div>
            </div>
        </div>

    );
}