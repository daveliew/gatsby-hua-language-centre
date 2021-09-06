import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

// styles

const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
};
const headingAccentStyles = {
    color: "#414042",
};

const sectionStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "30vh",
    padding: "5rem 10rem",
};

const heroStyles = {
    minHeight: "30vh",
    height: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundImage: `url(${herobanner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
};

const heroHeadingStyles = {
    marginTop: "40vh",
    marginBottom: "2rem",
    fontSize: "3rem",
    // backgroundColor: "#f0ede9",
    // opacity: "0.9",
};

const heroHeadingAccentStyles = {
    color: "#f89773",
};

// markup
export default function IndexPage({ data }) {
    return (
        <Layout pageTitle="Home">
            <main>
                <title>Home Page</title>
                <section style={heroStyles}>
                    <h1 style={heroHeadingStyles}>
                        Learn Chinese
                        <br />
                        <span style={heroHeadingAccentStyles}>
                            the Fun and Effective Way!
                        </span>
                    </h1>
                </section>
                <hr />
                <section style={sectionStyles}>
                    <h1 style={headingStyles}>
                        <span style={headingAccentStyles}>Programmes</span>
                    </h1>
                    {/* <CustomizedAccordions /> */}
                </section>
                <hr />
                <section style={sectionStyles}>
                    <h1 style={headingStyles}>Why Hua</h1>
                    {/* <MediaCard /> */}
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
                excerpt
                content
            }
        }
    }
`;
