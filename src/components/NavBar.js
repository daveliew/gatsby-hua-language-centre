import React from "react";
import { Link } from "gatsby";
import Logo from "../images/logo.png";

// styles
const sectionStyle = {
    display: "flex",
    position: "sticky",
    top: 0,
    width: "100vw",
    padding: "0.5rem",
    // flexDirection: "column",
    alignItems: "center",
    justifyContent: "stretch",
    // backgroundImage: `url(${Logo})`,
    backgroundColor: "#fbac4c",
    zIndex: 100,
};

const linkContainerStyle = {
    display: "flex",
    width: "70vw",
    flexDirection: "horizontal",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "1rem",
};

const linkStyle = {
    color: "#fef6f0",
    fontWeight: "700",
    display: "flex",
    marginTop: "1rem",
    marginBottom: "1rem",
};

const logoStyles = {
    height: "10vh",
};

// data
const links = [
    {
        text: "HOME",
        url: "/",
        description: "",
    },
    {
        text: "ABOUT",
        url: "/about",
        description:
            "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
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
        url: "https://hua.com.sg/class-schedule/",
        description: "Link to API fetch",
    },
    {
        text: "LOCATIONS",
        url: "https://www.google.com/maps/dir/1.3256577,103.8116813/101+Thomson+Rd,+Hua+Language+Centre+(United+Square),+307591/@1.3235171,103.810198,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x31da19e8096a04b3:0x4202a8553eb29c4!2m2!1d103.8432704!2d1.317304",
        description:
            "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    },
    {
        text: "CONTACT",
        url: "https://hua.com.sg/contact/",
        description: "link to adaptive",
    },
];

const NavBar = () => {
    return (
        <nav style={sectionStyle}>
            <a href="/">
                <img src={Logo} alt="Hua Language Centre" style={logoStyles} />
            </a>
            <div style={linkContainerStyle}>
                {links.map((link) => (
                    <span>
                        <Link style={linkStyle} to={`${link.url}`}>
                            {link.text}
                        </Link>
                    </span>
                ))}
            </div>
        </nav>
    );
};
export default NavBar;
