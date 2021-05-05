import React from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../../components/Layout/GridContainer.js";
import GridItem from "../../components/Layout/GridItem.js";
import Card from "../../components/Layout/Card.js";

import styles from "../../jss/restaurantIntroductionStyle";

import food1 from "../../img/restaurant/food_intro/food-intro-1.jpeg";
import food2 from "../../img/restaurant/food_intro/food-intro-2.jpeg";
import food3 from "../../img/restaurant/food_intro/food-intro-3.jpeg";

const useStyles = makeStyles(styles);

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
                                <img src={food1} alt="..." className={imageClasses} />
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
                                <img src={food2} alt="..." className={imageClasses} />
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
                                <img src={food3} alt="..." className={imageClasses} />
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