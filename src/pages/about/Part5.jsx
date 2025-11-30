import './Part5.css';
import { FiUsers } from "react-icons/fi";

export function Part5() {
    return (
        <section className="community-section">
            <h2 className="community-title">
                Whether you're just starting out or sharpening your edge, you're in the right place.
            </h2>

            <p className="community-subtitle">
                Join thousands of developers who are already building their future, one skill at a time.
            </p>

            <button className="btn-community">
                <FiUsers /> Join Community
            </button>
        </section>
    );
}