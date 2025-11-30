import './Part5Page.css';
import { FaCircle } from "react-icons/fa";

export function Part5Page() {
    return (
        <section className="Wasta-section">
            <div className="btn"><FaCircle color="#4da3ff" size="10px" /> THE NEW STANDARD</div>
            <h1 className="title">
                Waiting for your <span>Wasta</span>?
            </h1>
            <p className="subtitle">Your skills are your wasta</p>
            <p className='paragraph'>In today's competitive tech industry, connections matter less than competence. Your expertise, portfolio, and proven abilities are the most powerful currency.</p>
        </section>
    );
}