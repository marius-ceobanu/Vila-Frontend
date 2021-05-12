import React from "react";

import classNames from "classnames";

import {makeStyles} from "@material-ui/core/styles";

import Footer from "../Layout/Footer.js";
import GridContainer from "../Layout/GridContainer.js";
import GridItem from "../Layout/GridItem.js";
import Parallax from "../Layout/Parallax.js";
import Header from "../Layout/Header";
import HeaderLinks from "../Layout/HeaderLinks";

import styles from "../../jss/restaurantSectionStyle";
import TeamSection from "./TeamSection";

const useStyles = makeStyles(styles);
const aboutUsUrl = process.env.REACT_APP_AWS_S3_API + "aboutUs/background.jpg";

function AboutUs(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const description = "The standard chunk of Lorem Ipsum used since the 1500s\n" +
        "is reproduced below for those interested. Sections 1.10.32\n" +
        "and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero\n" +
        "are also reproduced in their exact original form, accompanied\n" +
        "by English versions from the 1914 translation by H. Rackham.";

    return (
        <div>
            <Header
                color="transparent"
                brand=""
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 200,
                    color: "custom"
                }}
                {...rest}
            />
            <Parallax small filter image={aboutUsUrl} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>Despre Noi</h3>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <div className={classes.description}>
                            <p>{description}</p>
                        </div>
                        <GridContainer justify="center">
                            <TeamSection />
                        </GridContainer>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;