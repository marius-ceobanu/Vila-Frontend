import React from "react";
import {Link} from "react-router-dom";

import Carousel from "react-slick";

import {makeStyles} from "@material-ui/core/styles";

import LocationOn from "@material-ui/icons/LocationOn";

import styles from "../../jss/carouselStyle.js";

const useStyles = makeStyles(styles);

// TODO to be replaced with fetched images of each room
const room1Url = process.env.REACT_APP_AWS_S3_API + "roomsForRent/room1.jpg";
const room2Url = process.env.REACT_APP_AWS_S3_API + "roomsForRent/room2.jpg";
const room3Url = process.env.REACT_APP_AWS_S3_API + "roomsForRent/room3.jpg";
const room4Url = process.env.REACT_APP_AWS_S3_API + "roomsForRent/room4.jpg";
const room5Url = process.env.REACT_APP_AWS_S3_API + "roomsForRent/room5.jpg";
const room6Url = process.env.REACT_APP_AWS_S3_API + "roomsForRent/room6.jpg";

function SectionCarousel({ rooms, close }) {
    const classes = useStyles();
    const roomsImg = {"Room 1": room1Url, "Room 2": room2Url, "Room 3": room3Url, "Room 4": room4Url, "Room 5": room5Url, "Room 6": room6Url};
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
