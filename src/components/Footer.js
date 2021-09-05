import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faFacebookSquare,
//     faInstagramSquare,
// } from "@fortawesome/free-brands-svg-icons";

// import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const sectionStyles = {
    display: "flex",
    // minWidth: "30vw",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1rem",
};

// const Container = styled.div`
//     margin: 1rem;
//     display: inline-grid;
//     grid-template-columns: repeat(5, auto);
//     width: 30vw;
// `;

//! to style

const containerStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "1rem",
};

const descriptionStyles = {
    color: "#414042",
    fontSize: "0.8rem",
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
};

const Footer = () => {
    return (
        <footer style={sectionStyles}>
            <div>
                {/* <Container> */}
                <a href="https://hua.com.sg/privacy-policy/">
                    Privacy Policy |
                </a>
                Follow Us
                <a href="https://www.facebook.com/hualanguage/">
                    {/* <FaFacebookSquare size={25} /> */}
                </a>
                <a href="https://www.instagram.com/hualanguage/">
                    {/* <FaInstagramSquare size={25} /> */}
                </a>
                {/* </Container> */}
            </div>
            <p style={descriptionStyles}>
                Copyright {new Date().getFullYear()} Hua Language Centre
            </p>
        </footer>
    );
};

export default Footer;
