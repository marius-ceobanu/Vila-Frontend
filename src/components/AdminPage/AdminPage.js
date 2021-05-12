import React, { useState, useEffect } from "react";
import axios from 'axios';

import classNames from "classnames";

import {makeStyles} from "@material-ui/core/styles";

import Footer from "../Layout/Footer.js";
import GridContainer from "../Layout/GridContainer.js";
import GridItem from "../Layout/GridItem.js";
import Parallax from "../Layout/Parallax.js";
import Header from "../Layout/Header";
import HeaderLinks from "../Layout/HeaderLinks";

import styles from "../../jss/restaurantSectionStyle";
import AnswerModal from "./AnswerModal";

const useStyles = makeStyles(styles);

const allMessagesApi = "http://localhost:8080/vila/v1/messages/all";

function AdminPage(props) {
    const [messages, setMessages] = useState([]);
    const [answerModal, setAnswerModal] = useState(false);
    const [selected, setSelected] = useState({});

    const headers = {
        headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        },
    };

    useEffect(() => {
        axios.get(allMessagesApi, headers)
            .then((res) => {
                setMessages(res.data);
            })
            .catch((err) =>{
                console.log(err);
            })
        // eslint-disable-next-line
    }, []);

    const classes = useStyles();
    const { ...rest } = props;

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
            <Parallax small filter image={require("../../img/home-bg.jpg")} />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>Admin Page</h3>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <h4 className={classes.sectionTitle}>Mesaje</h4>
                        <GridContainer>
                            {messages.map((message, i) => (
                                <GridItem key={i} >
                                    <div >
                                        <div className={classes.descriptionWrapper}>
                                            <h6 className={classes.sectionTitle}>
                                                {message.name}{" - "}
                                                {message.email}{" "}
                                                {message.answer !== null ? <img alt={"logo"} src="https://img.icons8.com/fluent/24/000000/checked.png"/> : <img alt={"logo"} src="https://img.icons8.com/material-rounded/24/fa314a/new-message.png" onClick={() => {setAnswerModal(true); setSelected(message);}}/>}
                                            </h6>
                                            <p >Message:{" "}{message.message}</p>
                                            <p >Answer:{" "}{message.answer}</p>
                                        </div>
                                    </div>
                                </GridItem>
                            ))}
                        </GridContainer>
                        <AnswerModal open={answerModal} close={() => setAnswerModal(false)} message={selected} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AdminPage;