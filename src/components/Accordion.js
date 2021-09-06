import React, { useState } from "react";
import { styled, withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { FaInfoCircle } from "react-icons/fa";

// import styled from "styled-components";

const Accordion = withStyles({
    root: {
        // border: "1px solid #fbac4c",
        backgroundColor: "#ed7d67",
        boxShadow: "none",
        "&:not(:last-child)": {
            borderBottom: 0,
        },
        "&:before": {
            display: "none",
        },
        "&$expanded": {
            margin: "auto",
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: "#ae6552",
        // borderBottom: "1px solid #fbac4c",
        marginBottom: -1,
        minHeight: 56,
        "&$expanded": {
            minHeight: 56,
        },
    },
    content: {
        "&$expanded": {
            margin: "1rem 0",
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion
                square
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                >
                    <Typography>Playgroup - 6 to 18 months</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Our programme optimises language acquisition during this
                        golden age through activities that stimulate your
                        child’s senses and brain development.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                square
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
            >
                <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                >
                    <Typography>Preschool - 3 to 6 years</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        All of our preschool programmes are thematic in nature,
                        with a new theme every term. We write our own songs and
                        design our own teaching materials to ensure that
                        children are fully immersed in the theme.
                        <br />
                        <br />
                        Our Preschool Chinese Classes can be divided into:
                        Foundation Chinese Speech & Drama classes
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                square
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
            >
                <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                >
                    <Typography>Primary School - 7 to 12 years</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Our Primary School Programmes follow the Singapore
                        Chinese syllabus closely. Whilst results are highly
                        important to us, we do not believe in incessant drills.
                        Instead, we seek to keep learning interesting to keep
                        students motivated in learning Chinese. Learning weapon
                        of choice: Animated Powerpoints, Graphics & Mnemonics
                        Enrichment Chinese Programme.
                        <a href="/programmes">
                            <FaInfoCircle />
                        </a>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
