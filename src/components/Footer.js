import React from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const sectionStyles = {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    padding: "1rem",
    backgroundColor: "red",
};

const Container = styled.div`
    display: "inline-grid";
    /* grid-template-columns: repeat(2, auto);
    justify-content: space-around; */
    margin-bottom: "1rem";
    width: 30vw;
`;

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
            <Container>
                <a href="https://hua.com.sg/privacy-policy/">
                    Privacy Policy |
                </a>
                Follow Us
                <a href="https://www.facebook.com/hualanguage/">
                    <FaFacebookSquare size={25} />
                </a>
                <a href="https://www.instagram.com/hualanguage/">
                    <FaInstagramSquare size={25} />
                </a>
                <p style={descriptionStyles}>
                    Copyright {new Date().getFullYear()} Hua Language Centre
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
