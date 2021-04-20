import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import LockOutlined from "@material-ui/icons/LockOutlined";
import Phone from "@material-ui/icons/Phone";

import Footer from "../Layout/Footer.js";
import GridContainer from "../Layout/GridContainer.js";
import GridItem from "../Layout/GridItem.js";
import CustomButton from "../Layout/CustomButton.js";
import Card from "../Layout/Card.js";
import CardBody from "../Layout/CardBody.js";
import CardHeader from "../Layout/CardHeader.js";
import CardFooter from "../Layout/CardFooter.js";
import CustomInput from "../Layout/CustomInput.js";
import Header from "../Layout/Header";
import HeaderLinks from "../Layout/HeaderLinks";

import styles from "../../jss/loginPage.js";

import image from "../../img/landing-bg.jpg";

const useStyles = makeStyles(styles);

function AuthenticationPage(props) {
    const [cardAnimation, setCardAnimation] = useState("cardHidden");
    const [mode, setMode] = useState(props.match.params.mode === "login" ? "Login"
                                                : props.match.params.mode === "register" ? "Register"
                                                : "");
    setTimeout(function() {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const { ...rest } = props;
    if(mode === "") {
        return (<div>Wrong address</div>);
    }
    return (
        <div>
            <Header
                absolute
                color="transparent"
                brand=""
                rightLinks={<HeaderLinks />}
                {...rest}
            />
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.container}>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={4}>
                            <Card className={classes[cardAnimation]}>
                                <form className={classes.form}>
                                    <CardHeader color="primary" className={classes.cardHeader}>
                                        <h4>{mode}</h4>
                                        <div className={classes.socialLine}>
                                            <CustomButton
                                                justIcon
                                                href="#pablo"
                                                target="_blank"
                                                color="transparent"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className={"fab fa-facebook"} />
                                            </CustomButton>
                                            <CustomButton
                                                justIcon
                                                href="#pablo"
                                                target="_blank"
                                                color="transparent"
                                                onClick={e => e.preventDefault()}
                                            >
                                                <i className={"fab fa-google-plus-g"} />
                                            </CustomButton>
                                        </div>
                                    </CardHeader>
                                    <p className={classes.divider}>Sau metoda clasica</p>
                                    <CardBody>
                                        {mode === "Register" && (
                                            <div>
                                                <CustomInput
                                                    labelText="Prenume..."
                                                    id="first"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        type: "text",
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <People className={classes.inputIconsColor} />
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                />
                                                <CustomInput
                                                    labelText="Nume..."
                                                    id="last"
                                                    formControlProps={{
                                                    fullWidth: true
                                                    }}
                                                    inputProps={{
                                                    type: "text",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <People className={classes.inputIconsColor} />
                                                        </InputAdornment>
                                                    )
                                                    }}
                                                />
                                                <CustomInput
                                                    labelText="Telefon..."
                                                    id="phone"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        type: "text",
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <Phone className={classes.inputIconsColor} />
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                />
                                            </div>
                                        )}
                                        <CustomInput
                                            labelText="Email..."
                                            id="email"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "email",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <Email className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <CustomInput
                                            labelText="Password"
                                            id="pass"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "password",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <LockOutlined className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                ),
                                                autoComplete: "off"
                                            }}
                                        />
                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                        {mode === "Login" && (
                                            <div>
                                                <CustomButton simple color="primary" size="lg">
                                                    {mode}
                                                </CustomButton>
                                                <Link to={"/authentication/register"} onClick={() => setMode("Register")}>
                                                    <CustomButton simple color="primary" size="sm">
                                                        Creaza cont
                                                    </CustomButton>
                                                </Link>
                                            </div>
                                        )}
                                        {mode === "Register" && (
                                            <div>
                                                <Link to={"/authentication/login"} onClick={() => setMode("Login")}>
                                                    <CustomButton simple color="primary" size="sm">
                                                        Login
                                                    </CustomButton>
                                                </Link>
                                                <CustomButton simple color="primary" size="lg">
                                                    {mode}
                                                </CustomButton>
                                            </div>
                                        )}
                                    </CardFooter>
                                </form>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </div>
                <Footer whiteFont />
            </div>
        </div>
    );
}

export default AuthenticationPage;