import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../styles/global.css";

const layoutStyles = {
    display: "flex",
    flexDirection: "column",
};

const bodyStyles = {
    display: "flex",
    flexDirection: "column",
    minHeight: "80vh",
    justifyContent: "space-between",
    backgroundColor: "red",
};

const contentStyles = {
    minHeight: "50vh",
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
};

const Layout = ({ pageTitle, children }) => {
    return (
        <>
            <div style={layoutStyles}>
                <NavBar />
                <div style={bodyStyles}>
                    <title>{pageTitle}</title>
                    <div style={contentStyles}>{children}</div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Layout;
