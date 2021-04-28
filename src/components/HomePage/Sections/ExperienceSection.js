import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import stana from "../../../img/stana.jpg";
import fishing from "../../../img/fishing.jpeg";
import sat from "../../../img/sat.jpg";

import GridContainer from "../../Layout/GridContainer";
import GridItem from "../../Layout/GridItem";
import InfoArea from "../../Layout/InfoArea";

import styles from "../../../jss/productSectionStyle.js";

const useStyles = makeStyles(styles);

function ExperienceSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Aici orasul se opreste</h2>
                    <h5 className={classes.description}>
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections 1.10.32
                        and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
                        are also reproduced in their exact original form, accompanied
                        by English versions from the 1914 translation by H. Rackham.
                    </h5>
                </GridItem>
            </GridContainer>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Vizita la stânā"
                            description="Asa cum o ilustreaza si Nicolae Grigorescu, principala activitate a localnicilor, pastoritul, inca se pastreaza, zona fiind un loc de adunare a stanelor in drumul lor de transhumanta spre baltile Dunarii."
                            logo={stana}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Pescuit"
                            description="O plimbare pana la lacul din imprejurimi, printre sateni si activitatile lor e o poarta spre trecutul traditional romanesc.."
                            logo={fishing}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Gospodarii Taranesti"
                            description="Alaturi de pastorit, locuitorii inca se ocupa cu cresterea vitelor, prelucrarea lemnului, tesutul si brodatul.."
                            logo={sat}
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}

export default ExperienceSection;
