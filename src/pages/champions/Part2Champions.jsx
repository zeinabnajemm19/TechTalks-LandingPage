import './Part2Champions.css';

import { useState } from "react";

export function Part2Champions() {


    const profiles = [
        {
            name: "Hassan Kheireddin",
            title: "Software Developer",
            image: "",
            badge: "CareerCompassAI",
            description: "Passionate in Cloud and AI technologies.Currently studying at 42 Beirut,worked on real-world projects in..",
            tags: ["React", "Python", "PostgreSQL"],
            linkedin: "https://www.linkedin.com/in/hassan-kheireddin",
        },
        {
            name: "Nour Al Hazzouri",
            title: "Front-End Developer",
            image: "",
            badge: "GiveLeb",
            description: "Passionate about IT overall, aspiring to be a web developer to convert ideas into real life code.IT enthusiast and a self learner who is in..",
            tags: ["HTML/CSS", "General Programming", "Maintenance"],
            linkedin: "https://www.linkedin.com/in/nour-al-hazzouri",
        },
        {
            name: "Serena Haidar",
            title: "Computer & Communications Engineer",
            image: "",
            badge: "CareerCompassAI",
            description: "A Computer & Communications Engineer skilled in machine learning, Python, SQL, PHP, full-stack application development, and",
            tags: ["AI", "Python", "PHP"],
            linkedin: "https://www.linkedin.com/in/serena-haidar",
        },
        {
            name: "Mostafa Dawi",
            title: "Full Stack Dev | AI Engineer Intern",
            image: "",
            badge: "CareerCompassAI",
            description: "Like to tackle challenges and bring real-world solutions to life. Passionate about AI, Data, and distributed systems.",
            tags: ["AI", "Data Science", "Python"],
            linkedin: "https://www.linkedin.com/in/mostafa-dawi",
        },
        {
            name: "Zahraa Meselmani",
            title: "Full Stack Developer",
            image: "",
            badge: "CareerCompassAI",
            description: "Skilled in full-stack development, combining clean design with efficient backend logic. Passionate about AI and integrating intelligence",
            tags: ["React.js", "Python", "AI"],
            linkedin: "https://www.linkedin.com/in/zahraa-meselmani",
        },
        {
            name: "Katia Matar",
            title: "Software Engineer",
            image: "",
            badge: "CareerCompassAI",
            description: "Passionate and creative computer science student with a strong interest in technology, cybersecurity, and software engineering.",
            tags: ["Python", "AI"],
            linkedin: "https://www.linkedin.com/in/katia-matar",
        },
        {
            name: "Ali Atat",
            title: "Full Stack Next.js | React Developer",
            image: "",
            badge: "GiveLeb",
            description: "Fresh Computer Science graduate skilled in Next.js, React, ASP.NET Core, and C#. Passionate about building scalable web apps..",
            tags: ["Next.js", "React.js", ".Net core"],
            linkedin: "https://www.linkedin.com/in/ali-atat",
        },
        {
            name: "Mariam Kanj",
            title: "Full Stack Developer",
            image: "",
            badge: "GiveLeb",
            description: "Computer Science graduate passionate about web development.Worked on projects using React.js, Node.js, PHP, and Python, and gained..",
            tags: ["React.js", "Node.js", "UI/UX"],
            linkedin: "https://www.linkedin.com/in/mariam-kanj",
        },
        //page2
        {
            name: "Mohamad Moussa",
            title: "Full Stuck Developer",
            image: "",
            badge: "GiveLeb",
            description: "Full Stack Developer , passionate about building efficient web applications and collaborating on impactful projects.",
            tags: ["Laravel", "SQL", "JavaScript"],
            linkedin: "https://www.linkedin.com/",
        },
        {
            name: "Ayman Dandan",
            title: "Full Stack Developer",
            image: "",
            badge: "GiveLeb",
            description: "Passionate about merging AI with web apps and exploring prompt engineering—quick learner eager to grow through real work.",
            tags: ["Laravel", "Prompt Engineering", "AI Integration"],
            linkedin: "https://www.linkedin.com/",
        },
        {
            name: "Dana Ghanem",
            title: "Junior Web Developer",
            image: "",
            badge: "Health-Connect",
            description: "Junior Web Developer passionate about building modern, responsive interfaces with React and Tailwind CSS.",
            tags: ["React.js", "Tailwindcss", "Vite"],
            linkedin: "https://www.linkedin.com/",
        },
        {
            name: "Nagham Malaeb",
            title: "Web Developer",
            image: "",
            badge: "Smart Medicine Reminder",
            description: "Passionate web developer focusing on building secure, connected, and scalable apps with React, Next.js, Node.js, and MongoDB.",
            tags: ["Next.js", "Node.js", "MongoDB"],
            linkedin: "https://www.linkedin.com/",
        },

        {
            name: "Dana Aldeeb",
            title: "Full Stack Developer",
            image: "",
            badge: "Smart Medicine Reminder",
            description: "Turning ideas into full-stack apps with authentication, APIs, and backend logic powered by Node.js, MongoDB, React,..",
            tags: ["Next.js", "Node.js", "MongoDB"],
            linkedin: "https://www.linkedin.com/",
        },
        {
            name: "Lora Sobh",
            title: "Frontend Developer",
            image: "",
            badge: "Smart Medicine Reminder",
            description: "Frontend Developer focused on crafting responsive, user-friendly interfaces with React, JavaScript, and modern UI frameworks.",
            tags: ["React.js"],
            linkedin: "https://www.linkedin.com/",
        },
        {
            name: "Diana Rahhal",
            title: "Full Stack Developer",
            image: "",
            badge: "StepUp",
            description: "Passionate ASP.NET full-stack developer crafting secure, high-performance web apps with C#, SQL Server, and responsive front-end..",
            tags: ["Asp.net"],
            linkedin: "https://www.linkedin.com/",
        },
    ];


    const cardsPerPage = 8;
    const totalPages = Math.ceil(profiles.length / cardsPerPage);
    const [page, setPage] = useState(1);

    const startIndex = (page - 1) * cardsPerPage;
    const visibleProfiles = profiles.slice(startIndex, startIndex + cardsPerPage);

    return (
        <div>

            <section className="profiles-section">
                {visibleProfiles.map((profile, i) => (
                    <div key={i} className="profile-card">
                        <div className="profile-img">
                            <img src={profile.image} alt={profile.name} />
                        </div>

                        <div className="profile-content">
                            <span className="profile-badge">{profile.badge}</span>

                            <h2 className="profile-name">{profile.name}</h2>
                            <p className="profile-title">{profile.title}</p>

                            <p className="profile-desc">{profile.description}</p>

                            <div className="profile-tags">
                                {profile.tags.map((tag, index) => (
                                    <span key={index}>{tag}</span>
                                ))}
                            </div>

                            <a
                                className="profile-link"
                                href={profile.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Profile
                            </a>
                        </div>
                    </div>
                ))}
            </section>


            <div className="pagination-container">
                <button
                    className="pagination-btn"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    ◀ Previous
                </button>

                <div className="dots">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <span
                            key={i}
                            className={`dot ${page === i + 1 ? "active" : ""}`}
                            onClick={() => setPage(i + 1)}
                        />
                    ))}
                </div>

                <button
                    className="pagination-btn"
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                >
                    Next ▶
                </button>
            </div>
        </div>
    );
}
