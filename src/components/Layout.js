import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../styles/global.css";

const layoutStyles = {
    margin: "0 auto",
    maxWidth: "100vw",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
};

const contentStyles = {
    minHeight: "50vh",
    display: "flex",
    flexDirection: "column",
    // padding: "5rem",
};

const navStyles = {
    position: "sticky",
    top: 0,
};

const Layout = ({ pageTitle, children }) => {
    return (
        <div style={layoutStyles}>
            <NavBar style={navStyles} />
            <title>{pageTitle}</title>
            <div style={contentStyles}>{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
