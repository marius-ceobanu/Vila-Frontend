import React from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../../components/Layout/GridContainer.js";
import GridItem from "../../components/Layout/GridItem.js";
import Card from "../../components/Layout/Card.js";

import styles from "../../jss/restaurantIntroductionStyle";

const useStyles = makeStyles(styles);
const food1Url = process.env.REACT_APP_AWS_S3_API + "restaurant/food_intro/food-intro-1.jpeg";
const food2Url = process.env.REACT_APP_AWS_S3_API + "restaurant/food_intro/food-intro-2.jpeg";
const food3Url = process.env.REACT_APP_AWS_S3_API + "restaurant/food_intro/food-intro-3.jpeg";

function IntroductionSection() {
    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    return (
        <div className={classes.section}>
            <h2 className={classes.title}>Doar preparate Bio locale</h2>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={food1Url} alt="..." className={imageClasses} />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                Branzeturi de la stana
                                <br />
                            </h4>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={food2Url} alt="..." className={imageClasses} />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                Legume din gradina
                                <br />
                            </h4>
                        </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Card plain>
                            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                <img src={food3Url} alt="..." className={imageClasses} />
                            </GridItem>
                            <h4 className={classes.cardTitle}>
                                Carne de la ferme
                                <br />
                            </h4>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}

export default IntroductionSection;