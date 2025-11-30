import './Part3.css';
import { IoSearch } from "react-icons/io5";
import { IoMdCode } from "react-icons/io";
import { LuRocket } from "react-icons/lu";

export function Part3() {
    return (
        <section class="why-section">
            <h2>What Makes TechTalks Different</h2>

            <div class="why-cards">

                <div class="why-card first">
                    <div class="icon-box blue">
                        <IoSearch color="black" />
                    </div>
                    <h3>Clarity Over Quantity</h3>
                    <p>No content overload. Only what truly matters.</p>
                </div>

                <div class="why-card second">
                    <div class="icon-box pink">
                        <IoMdCode color="black" />
                    </div>
                    <h3>Built by Developers</h3>
                    <p>We've been stuck before too. So we fixed it.</p>
                </div>

                <div class="why-card third">
                    <div class="icon-box green">
                        <LuRocket color="black" />
                    </div>
                    <h3>Learning That Sticks</h3>
                    <p>Practical, challenge-based, and purpose-driven.</p>
                </div>

            </div>
        </section>

    );
}