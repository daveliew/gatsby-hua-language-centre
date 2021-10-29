import React from "react";
import Layout from "../components/Layout";

const pageStyles = {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    padding: "5rem",
    backgroundColor: "#fef6f0",
};

const Programmes = () => {
    return (
        <Layout pageTitle="Programmes">
            <div style={pageStyles}>
                <h1>Playgroup (18mth - 3yrs)</h1>
                <p>
                    Our Playgroup Programmes are adult-accompanied classes which
                    allow children to be exposed to Mandarin at a young age.
                    Learning weapon of choice: Interactive Play, Music &
                    Movement, Handicraft.
                </p>
                <br />
                <p>
                    Let’s Capture this Critical period for Language Acquisition
                    Scientific research shows that our brains are optimised for
                    language acquisition between the ages of 6 months and 4
                    years old. Between the ages of 6 months to 18 months, most
                    toddlers can only babble or say 1-syllable words.
                </p>
                <br />
                <p>
                    Our Playgroup programme starts from 18 months when toddlers
                    are able to say 2-syllable-words because a structured
                    programme is the most beneficial at this stage. Sensory
                    stimulation & Brain Development From 18 months to 3 years
                    old, a child relies on his/her right brain to learn as left
                    brain functions are not as developed at this age. Hence,
                    sensory stimulation is a great way for children to learn and
                    build neural connectivity. Our programme optimises language
                    acquisition during this golden age through activities that
                    stimulate your child’s senses and brain development. The
                    activities we have planned for your child appeals to their
                    curiosity, arouses their senses, encourages creativity,
                    improves their dexterity and helps him/her build a sense for
                    the Chinese language and how it is structured
                </p>
            </div>
        </Layout>
    );
};

export default Programmes;
