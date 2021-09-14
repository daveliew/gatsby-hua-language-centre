import React, { useState } from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { header } from "../styles/news.module.css";
import { Button } from "@material-ui/core";

const pageStyles = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
};

const titleStyles = {
    padding: "2rem",
    backgroundColor: "#fef6f0",
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
};

const headerStyles = {
    fontWeight: "500",
    marginBottom: "1rem",
};

const containerStyles = {
    padding: "1rem",
    width: "100%",
    backgroundColor: "orange",
};

const cardStyles = {
    boxShadow: "2px 2px",
    margin: "2rem",
    padding: "1rem",
    height: "30vh",
    border: "10px solid #2da64e",
};

const Posts = ({ data }) => {
    const [clicked, setClicked] = useState(false);

    return (
        <Layout pageTitle="Posts">
            <main style={pageStyles}>
                <container style={titleStyles}>
                    <h1 style={headerStyles}>
                        EXTRA, EXTRA, READ ALL ABOUT IT!
                    </h1>
                    <p>
                        Read more about our current affairs and upcoming
                        programs. We have bite-sized Mandarin classes for those
                        who want a quick read. <br />
                        Do have a browse, and do let us know if there is
                        anything you would like us to write on.
                    </p>
                </container>
                <container style={containerStyles}>
                    <div className={header}>
                        {data.allWpPost.nodes.map((node) => (
                            <div style={cardStyles}>
                                <p>{node.title}</p>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: node.excerpt,
                                    }}
                                />
                                <h6>{node?.acfPostSettings?.location}</h6>
                                <Button onClick={() => setClicked(true)}>
                                    Learn more
                                </Button>
                            </div>
                        ))}
                    </div>
                </container>
            </main>
        </Layout>
    );
};

export default Posts;

export const pageQuery = graphql`
    query LatestPosts {
        allWpPost(filter: { date: { gte: "2021" } }) {
            nodes {
                id
                excerpt
                title
                acfPostSettings {
                    fieldGroupName
                    isDraft
                    postCategory
                    location
                }
            }
        }
    }
`;
