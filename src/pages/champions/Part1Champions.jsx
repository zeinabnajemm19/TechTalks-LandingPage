import './Part1Champions.css';
import { GoTrophy } from "react-icons/go";


export function Part1Champions() {
    return (
        <section className="champions-section">
            <div className="champions-title-wrapper">


                <h2 className="champions-title"><GoTrophy color='yellow' size='40px' />
                    Our <span className="champions-gradient">Champions</span><GoTrophy color='yellow' size='40px' />
                </h2>


            </div>

            <p className="champions-subtitle">
                Meet the exceptional interns who are building the future of technology with TechTalks
            </p>
        </section>
    );
}