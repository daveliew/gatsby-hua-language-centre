import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { header } from "../styles/news.module.css";

const pageStyles = {
    display: "flex",
    flexDirection: "column",
    padding: "10rem",
    marginTop: "5rem",
};

const titleStyles = {
    marginTop: "3rem",
    padding: "1rem",
    backgroundColor: "#fef6f0",
};

const headerStyles = {
    fontWeight: "500",
    justifyContent: "centre",
    marginBottom: "1rem",
};

const containerStyles = {
    padding: "1rem",
    backgroundColor: "orange",
};

const cardStyles = {
    boxShadow: "2px 2px",
    margin: "2rem",
    padding: "1rem",
    minHeight: "30vh",
    border: "10px solid #2da64e",
};

const posts = ({ data }) => {
    return (
        <Layout pageTitle="Posts" style={pageStyles}>
            <container style={titleStyles}>
                <h1 style={headerStyles}>EXTRA, EXTRA, READ ALL ABOUT IT!</h1>
                <p>
                    Read more about our current affairs and upcoming programs.
                    We have bite-sized Mandarin classes for those who want a
                    quick read. Do have a browse, and do let us know if there is
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
                        </div>
                    ))}
                </div>
                {data.allWpPost.nodes.map((node) =>
                    node?.acfPostSettings?.location?.map((location) => (
                        <div style={cardStyles}>
                            <h1>{location}</h1>
                            <h3>Some added details</h3>
                        </div>
                    ))
                )}
            </container>
        </Layout>
    );
};

export default posts;

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
