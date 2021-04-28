import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import axios from "axios";

import wifi from "../../../img/wifi.png";
import dryer from "../../../img/hair-dryer.png";
import bath from "../../../img/bath.png";
import food from "../../../img/food.png";
// import heating from "../../../img/heating.png";
import room from "../../../img/room.png";
import space from "../../../img/space.png";
import tv from "../../../img/tv.png";

import GridContainer from "../../Layout/GridContainer";
import GridItem from "../../Layout/GridItem";
import InfoArea from "../../Layout/InfoArea";

import styles from "../../../jss/productSectionStyle.js";

const useStyles = makeStyles(styles);

const vilaAmenitiesUrl = "http://localhost:8080/vila/v1/amenities/vila";

function VilaFacilitiesSection() {
    const classes = useStyles();
    // let amenities = [1, 2, 3, 4, 5, 6, 7, 8];
    let [amenities, setAmenities] = useState([]);
    useEffect(() => {
        axios.get(vilaAmenitiesUrl).then(response => setAmenities(response.data));
    }, [])

    const amenitiesIcons = {1: space, 2: space, 3: food, 4: room, 5: space, 6: space, 7: wifi, 8: space, 9: wifi, 10: room, 11: bath, 12: tv, 13: dryer, 14: food};
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Facilitati</h2>
                </GridItem>
            </GridContainer>
            <div>
                <GridContainer>
                    {amenities.map((amenity, i) => (
                        <GridItem key={i} xs={12} sm={12} md={3}>
                            <InfoArea
                                title={amenity.name}
                                logo={amenitiesIcons[amenity.id]}
                                vertical
                            />
                        </GridItem>
                    ))}
                </GridContainer>
            </div>
        </div>
    );
}

export default VilaFacilitiesSection;