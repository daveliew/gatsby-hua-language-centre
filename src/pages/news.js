import React, { useState } from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { Button, Card } from "@material-ui/core";

const pageStyles = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#fef6f0",
};

const titleStyles = {
    padding: "2rem",
    textAlign: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "80vw",
};

const headerStyles = {
    fontWeight: "500",
    marginBottom: "1rem",
};

const containerStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 20vw))",
    gridGap: "1em",
    padding: "1rem",
    width: "100%",
    maxWidth: "90vw",
    alignItems: "center",
};

const cardStyles = {
    boxShadow: "2px 2px",
    margin: "1rem",
    padding: ".5rem",
    height: "40vh",
    border: "5px solid #2da64e",
    fontFamily: "gaegu",
    backgroundColor: "#f89773",
};

const chineseText = {
    fontFamily: "ZCOOL KuaiLe",
};

const imageStyles = {
    height: "200px",
    width: "200px",
};

const Posts = ({ data }) => {
    const [clicked, setClicked] = useState(false);

    return clicked ? (
        <Layout pageTitle="Posts">
            <main style={pageStyles}>
                <container style={titleStyles}>
                    <h1 style={headerStyles}>Clicked</h1>
                </container>
                <container style={containerStyles}>
                    {data.allWpPost.nodes.map((node) => (
                        <div style={cardStyles}>
                            <h6>{node?.title}</h6>
                            <br />
                            <p style={chineseText}>
                                他们所有的设备和仪器彷佛都是有生命的。
                            </p>
                            <p>Locations: {node?.acfPostSettings?.location}</p>
                            <p> Content: {node?.acfPostSettings?.content}</p>
                            <p>
                                from {node?.acfPostSettings?.startDate} to
                                {node?.acfPostSettings?.endDate}
                            </p>
                            <h6>{node?.acfPostSettings?.location}</h6>
                            <Button onClick={() => setClicked(false)}>
                                Back
                            </Button>
                        </div>
                    ))}
                </container>
            </main>
        </Layout>
    ) : (
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
                    {data.allWpPost.nodes.map((node) => (
                        <div style={cardStyles}>
                            <img
                                src={node?.featuredImage?.node?.mediaItemUrl}
                                style={imageStyles}
                            />
                            <h3>{node.title}</h3>

                            <Button onClick={() => setClicked(true)}>
                                Learn more
                            </Button>
                        </div>
                    ))}
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
                    postCategory
                    location
                    startDate
                    endDate
                    content
                    chineseText
                    time
                    who
                }
                featuredImage {
                    node {
                        mediaItemUrl
                    }
                }
            }
        }
    }
`;
