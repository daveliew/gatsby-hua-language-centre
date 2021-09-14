import React from "react";
import Layout from "../components/Layout";
import { Typography } from "@material-ui/core";

const pageStyles = {
    padding: "5rem",
    margin: "1rem",
    backgroundColor: "#f89773",
};

const About = () => {
    return (
        <Layout pageTitle="About">
            <div style={pageStyles}>
                <h1>
                    Hua Language Centre - Singapore's Leading Chinese Enrichment
                    and Tuition Centre
                </h1>
                <br />
                <Typography>
                    Armed with an understanding of brain science, child
                    psychology and Chinese linguistics (and for older students,
                    exam-taking strategies), Hua has developed its own
                    curriculum that makes learning Chinese effective and fun at
                    the same time. Hua was established in 1992 because of our
                    curriculum director’s passion for Chinese and a desire to
                    help children master this increasingly useful language.
                </Typography>
            </div>
        </Layout>
    );
};

export default About;
