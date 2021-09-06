import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        height: "30vh",
    },
    media: {
        height: 140,
    },
    title: {
        color: "#ae6552",
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
                        image="../images/logo.png"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            className={classes.title}
                        >
                            Value Prop 1
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
                        Share
                    </Button>
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
                            Value Prop 2
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
                        Share
                    </Button>
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
                            Value Prop 3
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
                        Share
                    </Button>
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
