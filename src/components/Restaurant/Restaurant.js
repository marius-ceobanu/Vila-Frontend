import React from "react";

import classNames from "classnames";

import {makeStyles} from "@material-ui/core/styles";

import Camera from "@material-ui/icons/Camera";
import ListAlt from "@material-ui/icons/ListAlt";

import Footer from "../Layout/Footer.js";
import GridContainer from "../Layout/GridContainer.js";
import GridItem from "../Layout/GridItem.js";
import NavPills from "../Layout/NavPills.js";
import Parallax from "../Layout/Parallax.js";
import IntroductionSection from "./IntroductionSection";
import Header from "../Layout/Header";
import HeaderLinks from "../Layout/HeaderLinks";
import MenuMains from "../Layout/MenuMains";
import MenuExtras from "../Layout/MenuExtras";

import food1 from "../../img/restaurant/img-1.png";
import food2 from "../../img/restaurant/img-2.png";
import food3 from "../../img/restaurant/img-3.png";
import food4 from "../../img/restaurant/img-4.png";
import {mains, sides, drinks} from "../Restaurant/menu.json";

import styles from "../../jss/restaurantSectionStyle";

const useStyles = makeStyles(styles);

function Restaurant(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const description = "The standard chunk of Lorem Ipsum used since the 1500s\n" +
                        "is reproduced below for those interested. Sections 1.10.32\n" +
                        "and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero\n" +
                        "are also reproduced in their exact original form, accompanied\n" +
                        "by English versions from the 1914 translation by H. Rackham.";
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

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
            <Parallax small filter image={require("../../img/restaurant/restaurant-cover.jpeg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>Restaurant</h3>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <IntroductionSection />
                        <div className={classes.description}>
                            <p>{description}</p>
                        </div>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                                <NavPills
                                    alignCenter
                                    color="primary"
                                    tabs={[
                                        {
                                            tabButton: "Imagini",
                                            tabIcon: Camera,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    <GridItem xs={12} sm={12} md={4}>
                                                        <img
                                                            alt="..."
                                                            src={food3}
                                                            className={navImageClasses}
                                                        />
                                                        <img
                                                            alt="..."
                                                            src={food1}
                                                            className={navImageClasses}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={12} sm={12} md={4}>
                                                        <img
                                                            alt="..."
                                                            src={food2}
                                                            className={navImageClasses}
                                                        />
                                                        <img
                                                            alt="..."
                                                            src={food4}
                                                            className={navImageClasses}
                                                        />
                                                    </GridItem>
                                                </GridContainer>
                                            )
                                        },
                                        {
                                            tabButton: "Meniu",
                                            tabIcon: ListAlt,
                                            tabContent: (
                                                <div className={classes.menu}>
                                                    <MenuMains meals={mains} />
                                                    <aside className={classes.aside}>
                                                        <MenuExtras type="Sides" items={sides} />
                                                        <MenuExtras type="Drinks" items={drinks} />
                                                    </aside>
                                                </div>
                                            )
                                        }
                                    ]}
                                />
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Restaurant;