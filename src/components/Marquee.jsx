import { SiHackthebox } from "react-icons/si";
import { BsLightningCharge } from "react-icons/bs";
import { GoGift } from "react-icons/go";
import { IoIosTrendingUp } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import './Marque.css';

export function Marquee() {
    return (
        <div className="marquee">
            <div className="marquee-track">

                <div className="marquee-content">
                    <span><SiHackthebox color="#e442c6ff" />Delivery over all Lebanon</span>
                    <span id="seperator">|</span>
                    <span><GoGift color="#e442c6ff" /> Perfect for Tech Enthusiasts</span>
                    <span id="seperator">|</span>
                    <button className="marquee-btn"><IoIosTrendingUp size={20} /> Shop Now</button>
                    <span id="seperator" >|</span>
                    <span style={{ color: "yellow" }}><BsLightningCharge />  Limited Stock</span>

                    <span id="seperator">|</span>
                    <span><BsStars color="#4da3ff" /><span>  </span>
                        <span style={{ fontWeight: "bold" }}>NEW RELEASE</span>{" "}
                        <span >TechTalks Card Game</span>
                    </span>

                    <span id="seperator">|</span>
                </div>

                <div className="marquee-content">
                    <span><SiHackthebox color="#e442c6ff" />    Delivery over all Lebanon</span>
                    <span id="seperator">|</span>
                    <span><GoGift color="#e442c6ff" /> Perfect for Tech Enthusiasts</span>
                    <span id="seperator">|</span>
                    <button className="marquee-btn"><IoIosTrendingUp size={20} /> Shop Now</button>
                    <span id="seperator">|</span>
                    <span style={{ color: "yellow" }}><BsLightningCharge />  Limited Stock</span>
                    <span id="seperator">|</span>
                    <span><BsStars color="#4da3ff" /><span>  </span>
                        <span style={{ fontWeight: "bold" }}>NEW RELEASE</span>{" "}
                        <span >TechTalks Card Game</span>
                    </span>

                    <span id="seperator">|</span>
                </div>



            </div>
        </div>


    );
}
