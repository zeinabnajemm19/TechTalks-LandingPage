
import './Part2Page.css';

export function Part2Page() {
    return (
        <div className="Marquee-wrapper">
            <div className="Marquee-3d">


                <MarqueeColumn
                    direction="up"
                    items={[
                        <GradientText>{reverse("Real-World Projects")}</GradientText>,
                        reverse("Industry Mentorship"),
                        reverse("Professional Certification"),
                    ]}
                />


                <MarqueeColumn
                    direction="down"
                    items={[
                        reverse("Career Opportunities"),
                        <GradientText>{reverse("Hands-On Learning")}</GradientText>,
                        reverse("Expert Instructors"),
                    ]}
                />


                <MarqueeColumn
                    direction="up"
                    items={[
                        <GradientText>{reverse("Team Collaboration")}</GradientText>,
                        <GradientText>{reverse("5,000+ developers")}</GradientText>,
                        reverse("Startup Partnerships"),
                    ]}
                />

                <MarqueeColumn
                    direction="down"
                    items={[
                        <GradientText>{reverse("Real-World Projects")}</GradientText>,
                        reverse("Industry Mentorship"),
                        reverse("Professional Certification"),
                    ]}
                />
            </div>
        </div>
    );
}


function reverse(text) {
    return text.split("").reverse().join("");
}

function GradientText({ children }) {
    return <span className="gradient-text">{children}</span>;
}


function MarqueeColumn({ items, direction }) {
    return (
        <div className="Marquee-column">
            <div
                className={`Marquee-content ${direction === "up" ? "scroll-up" : "scroll-down"}`}
            >
                {items.map((item, i) => (
                    <div className="Marquee-item" key={i}>{item}</div>
                ))}

                {items.map((item, i) => (
                    <div className="Marquee-item" key={`dup-${i}`}>{item}</div>
                ))}
            </div>
        </div>
    );
}
