import "./WhatsApp.css";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsApp() {
    return (
        <a
            href="https://wa.me/XXXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-floating"
        >
            <FaWhatsapp className="wa-icon" />
        </a>
    );
}
