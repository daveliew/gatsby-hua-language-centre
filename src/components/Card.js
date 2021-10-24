import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        width: "minmax(70vw, 100vw)",
        height: "40vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignSelf: "flex-end",
        backgroundColor: "#ed7d67",
    },
    media: {
        height: "10vh",
    },
    title: {
        color: "#fff",
        fontWeight: "700",
    },
    links: {
        color: "#372119",
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="../images/icon.png"
                        title="ValueProp"
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            className={classes.title}
                        >
                            Best-in-class Curriculum
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Our curriculum has been carefully crafted with a
                            blend of psychology, linguistics and brain
                            stimulation, to optimize your child's Chinese
                            development.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions component="h2">
                    <Button
                        size="small"
                        color="secondary"
                        className={classes.links}
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            className={classes.title}
                        >
                            30 Years of Experience
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Our experienced native speaking Chinese teachers
                            will nurture and guide your child's language
                            development.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions component="h2">
                    <Button
                        size="small"
                        color="secondary"
                        className={classes.links}
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            className={classes.title}
                        >
                            Multi-Sensory Learning
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            Our lessons are enhanced with multimedia to make
                            learning an enjoyable process.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions component="h2">
                    <Button
                        size="small"
                        color="secondary"
                        className={classes.links}
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}
