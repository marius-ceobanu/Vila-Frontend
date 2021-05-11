import React, {useEffect, useState} from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../Layout/GridContainer.js";
import GridItem from "../Layout/GridItem.js";
import CustomInput from "../Layout/CustomInput.js";
import CustomButton from "../Layout/CustomButton.js";

import styles from "../../jss/contactMessageStyle";
import {auth} from "../UserAuthentication/FirebaseConfig";
import SnackbarAlert from "../Layout/SnackbarAlert";
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";

const useStyles = makeStyles(styles);

const messagesAPI = "http://localhost:8080/vila/v1/messages/";

function MessageSection() {
    const classes = useStyles();

    const [isLogged, setIsLogged] = useState(false);
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const[message, setMessage] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const [failed, setFailed] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (window.sessionStorage.getItem("userEmail")) {
            setIsLogged(true);
            setEmail(window.sessionStorage.getItem("userEmail"));
            setUserName(window.sessionStorage.getItem("firstName"));
        } else {
            auth.onAuthStateChanged(user => {
                setIsLogged(!!user);
                setEmail(user ? user.email : "");
                setUserName(user ? user.displayName : "");
            })
        }
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        const form = {
            "name": userName,
            "email": email,
            "message": message
        }
        axios.post(messagesAPI+"add", form)
            .then((res) => {
                if(res.status === 200) {
                    setResponseMessage(res.data);
                    setSubmitted(true);
                    clearInputs();
                    setTimeout(() => {
                        setSubmitted(false);
                    }, 2000);
                }
            })
            .catch((err) => {
                if(err.response) {
                    setResponseMessage(err.response.data);
                    setFailed(true);
                    setTimeout(() => {
                        setFailed(false);
                    }, 2000);
                }
            })
    };

    const clearInputs = () => {
        document.getElementById("message").value = "";
        document.getElementById("email").value = "";
        document.getElementById("name").value = "";
    };

    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem cs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Lasa-ne un mesaj!</h2>
                    <h4 className={classes.description}>
                        Ne poti lasa un mesaj cu orcie intrebare legata de locatia noastra,
                        si noi vom reveni cu un raspuns in cel mai scurt timp
                        posibil. Multumim!
                    </h4>
                    <form>
                        {!isLogged ? (
                        <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Numele tau"
                                        id="name"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        onChange={ e => setUserName(e.target.value) }
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Email"
                                        id="email"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        onChange={ e => setEmail(e.target.value) }
                                    />
                                </GridItem>
                        </GridContainer>
                        ) : (
                            <GridContainer>
                                <GridItem>
                                    <h3 className={classes.title}>Cu ce te putem ajuta {userName} ?</h3>
                                </GridItem>
                            </GridContainer>
                        )}
                        <GridContainer>
                            <CustomInput
                                labelText="Mesaj"
                                id="message"
                                formControlProps={{
                                    fullWidth: true,
                                    className: classes.textArea
                                }}
                                inputProps={{
                                    multiline: true,
                                    rows: 5
                                }}
                                onChange={ (e) => setMessage(e.target.value) }
                            />
                            <GridItem xs={12} sm={12} md={4}>
                                <CustomButton color="primary" onClick={onSubmit}>Send Message</CustomButton>
                            </GridItem>
                        </GridContainer>
                    </form>
                </GridItem>
            </GridContainer>
            {submitted && (
                <SnackbarAlert
                    message={
                        <span>
                        <b>{responseMessage}</b>
                      </span>
                    }
                    close
                    color="success"
                    icon={Check}
                />
            )}
            {failed && (
                <SnackbarAlert
                    message={
                        <span>
                            <b>{responseMessage}</b>
                        </span>
                    }
                    close
                    color="warning"
                    icon={Warning}
                />
            )}
        </div>
    );
}

export default MessageSection;
