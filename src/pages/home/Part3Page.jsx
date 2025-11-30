import './Part3Page.css';
import { BsStars } from "react-icons/bs";

export function Part3Page() {
    return (

        <section className="techtalks-section">
            <div className="discover-btn"><BsStars color="#4da3ff" /> DISCOVER TECHTALKS</div>

            <h1 className="title">
                What is <span>TechTalks</span>?
            </h1>
            <p className="subtitle">Bridging the gap between education and industry</p>

            <div className="content-card">
                <p>
                    <strong>TechTalks</strong> is more than just a learning platform.
                    It's a <span className="highlightPurple">movement designed to bridge the gap</span> between
                    traditional education and the real-world tech industry. We provide
                    you with the <span className="highlightBlue">connections to industry professionals</span>,
                    carefully curated courses that cut through the noise, and{" "}
                    <span className="highlightBlue2">hands-on events and workshops</span> that accelerate
                    your growth.
                    At TechTalks, you'll discover the clear path in programming that
                    universities often fail to provide, empowering your tech background
                    with <span className="highlight4">practical skills, mentorship, and a community</span> that
                    truly supports your journey from student to professional developer.
                </p>
            </div>
        </section>
    );
}
