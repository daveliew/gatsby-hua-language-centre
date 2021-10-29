import React, { useState } from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { Button, Card } from "@material-ui/core";

const pageStyles = {
    display: "flex",
    flexDirection: "column",
    width: "90%",
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
    boxShadow: "1px 1px",
    margin: "1rem",
    padding: ".5rem",
    height: "40vh",
    border: "3px solid #2da64e",
    fontFamily: "gaegu",
};

const chineseText = {
    fontFamily: "ZCOOL KuaiLe",
    marginTop: "1rem",
};

const imageStyles = {
    height: "200px",
    width: "200px",
};

const containerDetailedStyles = {
    display: "flex",
    padding: "1rem",
    width: "100%",
    maxWidth: "90vw",
    alignItems: "center",
};

const postDetailedStyles = {
    backgroundColor: "#fef6f0",
    marginTop: "2rem",
};

const aboutHuaStyles = {
    fontSize: "0.8rem",
    marginTop: "2rem",
    marginBottom: "2rem",
};

const Posts = ({ data }) => {
    const [clicked, setClicked] = useState(false);
    const [postID, setPostID] = useState("cG9zdDozNzU0");

    const handleClick = (e) => {
        console.log("target", e.target.id);
        // setPostID(e.target.id);

        setClicked(!clicked);
    };

    return clicked ? (
        <Layout pageTitle="Posts">
            <main style={pageStyles}>
                <container style={titleStyles}></container>
                <container style={containerDetailedStyles}>
                    {data.allWpPost.nodes
                        .filter((node) => node.id === postID)
                        .map((node) => (
                            <div>
                                <img
                                    src={
                                        node?.featuredImage?.node?.mediaItemUrl
                                    }
                                    style={{ height: "500px", width: "500px" }}
                                />
                                <h1>{node?.title}</h1>
                                <h1 style={chineseText}>
                                    {node?.acfPostSettings?.chineseText}
                                </h1>
                                <br />
                                <div>
                                    <h3>Who: {node?.acfPostSettings?.who}</h3>
                                    <h3>
                                        Date: {node?.acfPostSettings?.startDate}{" "}
                                        - {node?.acfPostSettings?.endDate}
                                    </h3>
                                    <h3>Who: {node?.acfPostSettings?.time}</h3>
                                    <h3>
                                        Who: {node?.acfPostSettings?.location}
                                    </h3>
                                </div>

                                <div style={postDetailedStyles}>
                                    <p>{node?.acfPostSettings?.content}</p>
                                </div>
                                <br />
                                <hr />
                                <section style={aboutHuaStyles}>
                                    <strong>About Hua Language Centre </strong>
                                    <br />
                                    Established in 1992, Hua Language Centre is
                                    Singapore’s Leading Chinese Enrichment and
                                    Tuition Centre. We offer a wide range of
                                    Chinese programmes and classes that cater to
                                    your child’s various Mandarin needs. For
                                    close to 30 years, Hua Language centre has
                                    developed and refined our own unique
                                    curriculum – we make the learning of Chinese
                                    fun and effective at the same time, through
                                    an understanding of brain science, child
                                    psychology, Chinese linguistics and
                                    exam-taking strategies. Our Curriculum
                                    Director’s passion for Chinese and desire to
                                    help children master this increasingly
                                    useful language has driven Hua Language
                                    Centre to perfect our craft as your child’s
                                    partner in his or her Mandarin Language
                                    journey.
                                </section>

                                <Button onClick={handleClick}>Back</Button>
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
                        programmes.
                        <br /> We have bite-sized Mandarin classes for those who
                        want a quick read. <br />
                        Do have a browse, and do let us know if there is
                        anything you would like us to write on.
                    </p>
                </container>
                <container style={containerStyles}>
                    {data.allWpPost.nodes.map((node, i) => (
                        <div style={cardStyles} key={i}>
                            <img
                                src={node?.featuredImage?.node?.mediaItemUrl}
                                style={imageStyles}
                            />
                            <h3>{node?.title}</h3>
                            {/* can't seem to pass node id for render */}
                            {/* <p>{node?.id}</p> */}

                            <Button id={node?.id} onClick={handleClick}>
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
