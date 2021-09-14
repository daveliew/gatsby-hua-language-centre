import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const sectionStyles = {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    padding: "1rem",
    backgroundColor: "#edeae2",
};

const socialStyles = {
    display: "flex",
    alignItems: "center",
    width: "25vw",
    padding: "0.5rem",
};

const socialIcons = {
    display: "flex",
    justifyContent: "space-between",
    width: "5vw",
};

const descriptionStyles = {
    color: "#414042",
    fontSize: "0.8rem",
    marginTop: "0.5rem",
};

const Footer = () => {
    return (
        <>
            <footer style={sectionStyles}>
                <div style={socialStyles}>
                    <div>
                        <a href="https://hua.com.sg/privacy-policy/">
                            Privacy Policy
                        </a>
                    </div>
                    <div>|</div>
                    <div>Follow Us</div>
                    <div style={socialIcons}>
                        <a href="https://www.facebook.com/hualanguage/">
                            <FaFacebookSquare size={20} />
                        </a>
                        <a href="https://www.instagram.com/hualanguagecentre/">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>
                <p style={descriptionStyles}>
                    Copyright {new Date().getFullYear()} Hua Language Centre
                </p>
            </footer>
        </>
    );
};

export default Footer;
