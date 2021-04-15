import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../jss/landingPageStyle";

import Header from "../Layout/Header";
import CustomButton from "../Layout/CustomButton";
import HeaderLinks from "../Layout/HeaderLinks";
import GridContainer from "../Layout/GridContainer";
import GridItem from "../Layout/GridItem";

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
                brand="VI - LA"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                { ...rest }
            />
        </div>
    )
}

export default HomePage;