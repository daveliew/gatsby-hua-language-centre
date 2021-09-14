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
};

const contentStyles = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: "50vh",
    marginTop: "1rem",
};

const Layout = ({ children }) => {
    return (
        <>
            <div style={layoutStyles}>
                <NavBar />
                <div style={bodyStyles}>
                    <div style={contentStyles}>{children}</div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Layout;
