import React from "react";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";

import styles from "../../jss/landingPageStyle";

// TODO implement the homepage sections and import them here
import ExperienceSection from "./Sections/ExperienceSection";
import VilaFacilitiesSection from "./Sections/VilaFacilitiesSection";

import CustomButton from "../Layout/CustomButton";
import GridContainer from "../Layout/GridContainer";
import GridItem from "../Layout/GridItem";
import Parallax from "../Layout/Parallax";
import Footer from "../Layout/Footer";

import {PlayArrow} from "@material-ui/icons";
import Header from "../Layout/Header";
import HeaderLinks from "../Layout/HeaderLinks";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

function HomePage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                color="transparent"
                routes={dashboardRoutes}
                brand=""
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "custom"
                }}
                { ...rest }
            />
            <Parallax filter image={require("../../img/home-bg.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>Timpul liber in natura.</h1>
                            <h4>
                                The standard chunk of Lorem Ipsum used since the 1500s
                                is reproduced below for those interested. Sections 1.10.32
                                and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
                                are also reproduced in their exact original form, accompanied
                                by English versions from the 1914 translation by H. Rackham.
                            </h4>
                            <br />
                            <CustomButton
                                color="danger"
                                size="lg"
                                href="https://www.youtube.com/watch?v=yJq7SIjS6w0"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <PlayArrow />
                                Descopera traditiile
                            </CustomButton>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <ExperienceSection />
                    <VilaFacilitiesSection />
                    {/*// TODO add all sections components here*/}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;