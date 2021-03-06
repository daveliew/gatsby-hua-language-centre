import React from "react";
import { Link } from "gatsby";
import Logo from "../images/logo.png";

// styles
const sectionStyles = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    position: "sticky",
    top: 0,
    zIndex: 100,
    width: "100%",
    maxWidth: "100vw",
    padding: "1rem",
    alignItems: "center",
    justifyContent: "stretch",
};

const logoStyles = {
    marginTop: "1rem",
    height: "7vh",
};

const linkContainerStyles = {
    display: "flex",
    width: "70vw",
    flexDirection: "horizontal",
    justifyContent: "space-evenly",
    alignItems: "center",
};

const linkStyle = {
    color: "#bf8370",
    display: "flex",
    marginTop: "0.5rem",
};

const activeStyles = {
    color: "#f89773",
};

// data
const links = [
    {
        text: "ABOUT",
        url: "/about",
        description:
            "Learn Chinese the Fun and Effective way! For Ages 2 and up.",
    },
    {
        text: "NEWS",
        url: "/news",
        description: "use gQL to create fetch",
    },
    {
        text: "PROGRAMMES",
        url: "/programmes",
        description: "Write copy",
    },
    {
        text: "SCHEDULE",
        url: "/schedule",
        description: "Link to API fetch",
    },
    {
        text: "LOCATIONS",
        url: "https://www.google.com/maps/dir/1.3256577,103.8116813/101+Thomson+Rd,+Hua+Language+Centre+(United+Square),+307591/@1.3235171,103.810198,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31da19e8096a04b3:0x4202a8553eb29c4!2m2!1d103.8432704!2d1.317304",
        description: "To link to Google API",
    },
    {
        text: "CONTACT",
        url: "https://hua.com.sg/contact/",
        description: "link to adaptive",
    },
];

const NavBar = () => {
    return (
        <>
            <a href="/">
                <img src={Logo} alt="Hua Language Centre" style={logoStyles} />
            </a>
            <nav style={sectionStyles}>
                <div style={linkContainerStyles}>
                    {links.map((link) => (
                        <span>
                            <Link
                                style={linkStyle}
                                activeStyle={activeStyles}
                                to={`${link.url}`}
                                hover
                            >
                                {link.text}
                            </Link>
                        </span>
                    ))}
                </div>
            </nav>
        </>
    );
};
export default NavBar;
