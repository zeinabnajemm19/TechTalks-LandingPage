import './Course.css';
import React, { useState } from "react";
import { FiClock, FiUsers } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";

export function Course() {
    const [filtersOpen, setFiltersOpen] = useState(false);
    return (

        <section className="courses-section">
            <div className="container">


                <h1 className="main-title">
                    All TechTalks <span className="gradient">Courses</span>
                </h1>


                <p className="Subtitle">
                    Curated courses for developers and tech enthusiasts, learn at your pace.
                </p>


                <div className="search-row">
                    <div className="search-box">
                        <span className="icon"><IoMdSearch /></span>
                        <input
                            type="text"
                            placeholder="Search Courses, instructors, or topics"
                        />
                    </div>
                </div>

                <div className="filter-row">
                    <button className="filter-btn" onClick={() => setFiltersOpen(!filtersOpen)}>
                        <span><VscSettings />
                        </span> Filters
                    </button>

                    <span className="course-count">2 courses found</span>
                </div>



                {filtersOpen && (
                    <div className="filters-panel">
                        <div className="filter-section">
                            <label>Level</label>
                            <select>
                                <option>All Levels</option>
                                <option>Intermediate</option>
                                <option>Beginner</option>
                            </select>
                        </div>

                        <div className="filter-section">
                            <label>Language</label>
                            <select>
                                <option>All Languages</option>
                            </select>
                        </div>

                        <div className="filter-section">
                            <label>Sort by</label>
                            <select>
                                <option>Newest First</option>
                                <option>Highest Rated</option>
                                <option>Most popular</option>
                                <option>Shortest First</option>
                            </select>
                        </div>

                        <button className="apply-btn">Apply Filters</button>
                    </div>
                )}


                <div className="courses-grid">



                    <div className="course-card">
                        <img
                            className="course-img"
                            src="/images/course1.png"

                        />

                        <h3>Master Tailwind CSS</h3>
                        <p>
                            Master responsive design, utility-first workflows, and custom components
                            with the latest version of Tailwind CSS.
                        </p>




                        <div className="course-stats">
                            <div className="stat-item">
                                <FiClock className="stat-icon" />
                                <span>1h</span>
                            </div>

                            <div className="stat-item">
                                <FiUsers className="stat-icon" />
                                <span>40+</span>
                            </div>

                            <div className="stat-item">
                                <AiFillStar className="stat-icon star" />
                                <span>4.9</span>
                            </div>
                        </div>


                        <button className="details-btn">
                            <FaPlay className="details-icon" />
                            View Details
                            <HiArrowNarrowRight className="details-arrow" />
                        </button>
                    </div>

                    <div className="course-card">
                        <img
                            className="course-img"
                            src="/images/course2.png"

                        />

                        <h3>Master Next.js 16</h3>
                        <p>
                            Build powerful, modern web applications with Next.js. Learn server-side rendering, API routes, and deployment strategies.
                        </p>




                        <div className="course-stats">
                            <div className="stat-item">
                                <FiClock className="stat-icon" />
                                <span>Coming soon</span>
                            </div>

                            <div className="stat-item">
                                <FiUsers className="stat-icon" />
                                <span>0</span>
                            </div>

                            <div className="stat-item">
                                <AiFillStar className="stat-icon star" />
                                <span>0</span>
                            </div>
                        </div>


                        <button className="details-btn">
                            <FaPlay className="details-icon" />
                            View Details
                            <HiArrowNarrowRight className="details-arrow" />
                        </button>
                    </div>



                </div>


            </div>
        </section>

    );
}