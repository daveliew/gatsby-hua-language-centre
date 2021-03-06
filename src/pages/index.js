import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import CustomizedAccordions from "../components/Accordion";
import herobanner from "../images/herobanner.jpeg";
import MediaCard from "../components/Card";

// styles
const bodyStyles = {
    width: "100%",
    maxWidth: "100vw",
};

const heroStyles = {
    minHeight: "30vh",
    height: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${herobanner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
};

const heroHeadingStyles = {
    marginTop: "40vh",
    marginBottom: "2rem",
    fontSize: "3rem",
    color: "#2da64e",
    textShadow: "2px 2px #414042",
};

const heroHeadingAccentStyles = {
    color: "#f89773",
};

const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
};
const headingAccentStyles = {
    color: "#414042",
};

const programmeStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "30vh",
    padding: "5rem 10rem",
};

const vpStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "30vh",
    marginTop: "5vh",
};

const vpCardStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 20vw))",
    width: "max(300px,70vw)",
    gap: "1rem",
    padding: "1rem",
    marginBottom: "5vh",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fef6f0",
};

// markup
export default function IndexPage({ data }) {
    return (
        <Layout pageTitle="Home">
            <main style={bodyStyles}>
                <title>Home Page</title>
                <hero style={heroStyles}>
                    <h1 style={heroHeadingStyles}>
                        Learn Chinese
                        <br />
                        <span style={heroHeadingAccentStyles}>
                            the Fun and Effective Way!
                        </span>
                    </h1>
                </hero>
                <hr />
                <section style={programmeStyles}>
                    <h1 style={headingStyles}>
                        <span style={headingAccentStyles}>Programmes</span>
                    </h1>
                    <CustomizedAccordions />
                </section>
                <hr />
                <section style={vpStyles}>
                    <h1 style={headingStyles}>
                        <span style={headingAccentStyles}>Why Hua</span>
                    </h1>
                    <div style={vpCardStyles}>
                        <MediaCard />
                    </div>
                </section>
            </main>
        </Layout>
    );
}

export const pageQuery = graphql`
    query {
        allWpPost(filter: { date: { gte: "2021" } }) {
            nodes {
                id
                title
            }
        }
    }
`;
