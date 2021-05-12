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

const useStyles = makeStyles(styles);
const backgroundUrl = process.env.REACT_APP_AWS_S3_API + "discoverArea/background.jpg";
const stanaUrl = process.env.REACT_APP_AWS_S3_API + "discoverArea/sections/stana.jpg";
const vinarieUrl = process.env.REACT_APP_AWS_S3_API + "discoverArea/sections/vinarie.jpg";
const bikingUrl = process.env.REACT_APP_AWS_S3_API + "discoverArea/sections/biking.jpg";

function DiscoverArea(props) {
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
            <Parallax small filter image={backgroundUrl} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>Descopera Zona</h3>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <div className={classes.description}>
                            <p>{description}</p>
                        </div>
                        <GridContainer justify="center">
                            <GridItem className={classes.navWrapper} >
                                <div className={classes.infoArea}>
                                    <div>
                                        <img src={stanaUrl} alt="..." className={classes.imgFluid}/>
                                    </div>
                                    <div className={classes.descriptionWrapper}>
                                        <h4 className={classes.sectionTitle}>Vizita la stânā</h4>
                                        <p className={classes.description}>Asa cum o ilustreaza si Nicolae Grigorescu, principala activitate a localnicilor, pastoritul, inca se pastreaza, zona fiind un loc de adunare a stanelor in drumul lor de transhumanta spre baltile Dunarii.</p>
                                    </div>
                                </div>
                            </GridItem>
                            <GridItem className={classes.navWrapper} >
                                <div className={classes.infoArea}>
                                    <div>
                                        <img src={vinarieUrl} alt="..." className={classes.imgFluid}/>
                                    </div>
                                    <div className={classes.descriptionWrapper}>
                                        <h4 className={classes.sectionTitle}>Degustare la vinaria locala</h4>
                                        <p className={classes.description}>{description}</p>
                                    </div>
                                </div>
                            </GridItem>
                            <GridItem className={classes.navWrapper} >
                                <div className={classes.infoArea}>
                                    <div>
                                        <img src={bikingUrl} alt="..." className={classes.imgFluid}/>
                                    </div>
                                    <div className={classes.descriptionWrapper}>
                                        <h4 className={classes.sectionTitle}>Mountain Biking in natura</h4>
                                        <p className={classes.description}>{description}</p>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DiscoverArea;