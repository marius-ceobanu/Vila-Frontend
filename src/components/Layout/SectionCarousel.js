import React from "react";
import { Link } from "react-router-dom";

import Carousel from "react-slick";

import { makeStyles } from "@material-ui/core/styles";

import LocationOn from "@material-ui/icons/LocationOn";

import room1 from "../../img/roomsForRent/room1.jpg";
import room2 from "../../img/roomsForRent/room2.jpg";
import room3 from "../../img/roomsForRent/room3.jpg";
import room4 from "../../img/roomsForRent/room4.jpg";
import room5 from "../../img/roomsForRent/room5.jpg";
import room6 from "../../img/roomsForRent/room6.jpg";

import styles from "../../jss/carouselStyle.js";

const useStyles = makeStyles(styles);

function SectionCarousel({ rooms, close }) {
    const classes = useStyles();
    const roomsImg = {"Room 1": room1, "Room 2": room2, "Room 3": room3, "Room 4": room4, "Room 5": room5, "Room 6": room6};
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
    };
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <Carousel {...settings}>
                    {rooms.map((room, i) => (
                        <div key={i}>
                            <Link to={`/rooms/${room.id}`} onClick={close}>
                                <img src={roomsImg[room.name]} alt={"slide"+i} className="slick-image" />
                                <div className="slick-caption">
                                    <h4>
                                        <LocationOn className="slick-icons" />
                                        {room.name}
                                    </h4>
                                </div>
                            </Link>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default SectionCarousel;
