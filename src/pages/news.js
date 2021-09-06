import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { header } from "../styles/news.module.css";

const pageStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "10rem",
    marginTop: "5rem",
};

const titleStyle = {
    marginTop: "3rem",
    marginBottom: "3rem",
};

const containerStyles = {
    padding: "10rem",
    backgroundColor: "#414042",
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
        <Layout pageTitle="Posts" style={pageStyle}>
            <h1 style={titleStyle}>Hello From News Posts</h1>
            <container style={containerStyles}>
                <div className={header}>
                    {data.allWpPost.nodes.map((node) => (
                        <div style={cardStyles}>
                            <p>{node.title}</p>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: node.content,
                                }}
                            />
                        </div>
                    ))}
                </div>
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
                content
                excerpt
                title
            }
        }
    }
`;
