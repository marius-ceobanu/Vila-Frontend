import React, { useState, useEffect } from "react";
import axios from "axios";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import Camera from "@material-ui/icons/Camera";
import ListAlt from "@material-ui/icons/ListAlt";

import Footer from "../Layout/Footer.js";
import GridContainer from "../Layout/GridContainer.js";
import GridItem from "../Layout/GridItem.js";
import NavPills from "../Layout/NavPills.js";
import Parallax from "../Layout/Parallax.js";
import InfoArea from "../Layout/InfoArea";

// TODO to be replaced with fetched images of each room
import room1 from "../../img/roomsForRent/room1.jpg";
import room2 from "../../img/roomsForRent/room2.jpg";
import room3 from "../../img/roomsForRent/room3.jpg";
import room4 from "../../img/roomsForRent/room4.jpg";
import room5 from "../../img/roomsForRent/room5.jpg";
import room6 from "../../img/roomsForRent/room6.jpg";

// TODO replace with official amenities logos
import wifi from "../../img/wifi.png";
import dryer from "../../img/hair-dryer.png";
import bath from "../../img/bath.png";
import food from "../../img/food.png";
// import heating from "../../img/heating.png";
import roomL from "../../img/room.png";
import space from "../../img/space.png";
import tv from "../../img/tv.png";

import styles from "../../jss/roomDetailsStyle";

const useStyles = makeStyles(styles);

const roomAPI = "http://localhost:8080/vila/v1/rooms/";

function RoomDetails(props) {
    const roomImages = [room1, room2, room3, room4, room5, room6];
    // const roomImages = [{url: room1, title: "Room 1"}, {url: room2, title: "Room 2"}];
    const roomId = props.match.params.id;
    const [openZoom, setOpenZoom] = useState(false);
    const [room, setRoom] = useState({amenities: []});
    useEffect(() => {
        axios.get(roomAPI+roomId).then(response => setRoom({name: response.data.name, price: response.data.price,  description: response.data.description, amenities: response.data.amenities, type: response.data.roomType.type}));
        // eslint-disable-next-line
    }, [roomId])
    const classes = useStyles();
    const amenitiesIcons = {1: space, 2: space, 3: food, 4: room, 5: space, 6: space, 7: wifi, 8: space, 9: wifi, 10: roomL, 11: bath, 12: tv, 13: dryer, 14: food};
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return(
        <div>
            <Parallax small filter image={require("../../img/home-bg.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>{room.name}</h3>
                                        <h6>Pret / noapte: {room.price}</h6>
                                        <h6>Tip: {room.type}</h6>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <div className={classes.description}>
                            <p>{room.description}</p>
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
                                                <GridContainer justify="center" onClick={() => setOpenZoom(true)}>
                                                    <GridItem xs={12} sm={12} md={4}>
                                                        {roomImages.map((image, i) => (
                                                            <img
                                                                key={i}
                                                                alt={"image"+i}
                                                                src={image}
                                                                className={navImageClasses}
                                                            />
                                                        ))}
                                                    </GridItem>
                                                </GridContainer>
                                            )
                                        },
                                        {
                                            tabButton: "Facilitati Camera",
                                            tabIcon: ListAlt,
                                            tabContent: (
                                                <GridContainer justify="center">
                                                    {room.amenities.map((amenity, i) => (
                                                        <GridItem key={i} xs={12} sm={12} md={3}>
                                                            <InfoArea
                                                                title={amenity.name}
                                                                logo={amenitiesIcons[amenity.id]}
                                                                vertical
                                                            />
                                                        </GridItem>
                                                    ))}
                                                </GridContainer>
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
            {openZoom &&(
                <Lightbox images={roomImages} onClose={() => setOpenZoom(false)} />
            )}
        </div>
    );
}
export default RoomDetails;