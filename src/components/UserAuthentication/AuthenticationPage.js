import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import LockOutlined from "@material-ui/icons/LockOutlined";
import Phone from "@material-ui/icons/Phone";
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";

import Input from "@material-ui/core/Input";

import Footer from "../Layout/Footer.js";
import GridContainer from "../Layout/GridContainer.js";
import GridItem from "../Layout/GridItem.js";
import CustomButton from "../Layout/CustomButton.js";
import Card from "../Layout/Card.js";
import CardBody from "../Layout/CardBody.js";
import CardHeader from "../Layout/CardHeader.js";
import CardFooter from "../Layout/CardFooter.js";
import Header from "../Layout/Header";
import HeaderLinks from "../Layout/HeaderLinks";
import SnackbarAlert from "../Layout/SnackbarAlert";

import styles from "../../jss/loginPage.js";
import formStyles from "../../jss/customInputStyle";

import image from "../../img/landing-bg.jpg";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import classNames from "classnames";

const useStyles = makeStyles(styles);
const useFormStyles = makeStyles(formStyles);

const registerAPI = "http://localhost:8080/vila/v1/authentication/register";
const loginAPI = "http://localhost:8080/vila/v1/authentication/login";

function AuthenticationPage(props) {
    const [cardAnimation, setCardAnimation] = useState("cardHidden");
    const [mode, setMode] = useState(props.match.params.mode === "login" ? "Login"
                                                : props.match.params.mode === "register" ? "Register"
                                                : "");
    const history = useHistory();
    const { handleSubmit, register, formState: { errors } } = useForm({});
    const [responseMessage, setResponseMessage] = useState("");
    const [failed, setFailed] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const submit = (form) => {
        form["userTypeId"] = 2;
        console.log(form);
        mode === "Register" ?
        axios.post(registerAPI, form)
             .then((res) => {
                 if(res.status === 200) {
                     console.log(res.data);
                     setResponseMessage(res.data);
                     setSubmitted(true);
                     setTimeout(() => {
                         setMode("Login");
                         history.push("/authentication/login");
                     }, 1500);
                 }
             })
            .catch((err) => {
                console.log(JSON.stringify(err));
                setResponseMessage("Email already exists!");  // TODO replace with actual body message
                setFailed(true);
            }) :
            console.log("login");
    }
    setTimeout(function() {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const formClasses = useFormStyles();
    let inputRootCustomClasses = undefined;
    const marginTop = classNames({
        [inputRootCustomClasses]: false
    });
    const inputClasses = classNames({
        [formClasses.input]: true,
        [formClasses.whiteInput]: false
    });
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
                                <form className={classes.form} onSubmit={handleSubmit(submit)}>
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
                                                <FormControl fullWidth={true} className={formClasses.formControl}>
                                                    <InputLabel
                                                        className={formClasses.labelRoot}
                                                        htmlFor={"first"}
                                                    >
                                                        Prenume...
                                                    </InputLabel>
                                                    <Input
                                                        classes={{
                                                            input: inputClasses,
                                                            root: marginTop,
                                                            disabled: formClasses.disabled,
                                                            underline: classNames({
                                                                [formClasses.underlineError] : errors.firstName,
                                                                [formClasses.underline]: true
                                                            })
                                                        }}
                                                        id={"first"}
                                                        name={"firstName"}
                                                        type={"text"}
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <People className={classes.inputIconsColor} />
                                                            </InputAdornment>
                                                        }
                                                        {...register("firstName", {
                                                            required: "You must specify your first name"
                                                        })}
                                                    />
                                                    {errors.firstName && <p style={{color: "red"}}>{errors.firstName.message}</p>}
                                                </FormControl>
                                                <FormControl fullWidth={true} className={formClasses.formControl}>
                                                    <InputLabel
                                                        className={formClasses.labelRoot}
                                                        htmlFor={"last"}
                                                    >
                                                        Nume...
                                                    </InputLabel>
                                                    <Input
                                                        classes={{
                                                            input: inputClasses,
                                                            root: marginTop,
                                                            disabled: formClasses.disabled,
                                                            underline: classNames({
                                                                [formClasses.underlineError] : errors.lastName,
                                                                [formClasses.underline]: true
                                                            })
                                                        }}
                                                        id={"last"}
                                                        name={"lastName"}
                                                        type={"text"}
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <People className={classes.inputIconsColor} />
                                                            </InputAdornment>
                                                        }
                                                        {...register("lastName", {
                                                            required: "You must specify your last name"
                                                        })}
                                                    />
                                                    {errors.lastName && <p style={{color: "red"}}>{errors.lastName.message}</p>}
                                                </FormControl>
                                                <FormControl fullWidth={true} className={formClasses.formControl}>
                                                    <InputLabel
                                                        className={formClasses.labelRoot}
                                                        htmlFor={"phone"}
                                                    >
                                                        Telefon...
                                                    </InputLabel>
                                                    <Input
                                                        classes={{
                                                            input: inputClasses,
                                                            root: marginTop,
                                                            disabled: formClasses.disabled,
                                                            underline: classNames({
                                                                [formClasses.underlineError] : errors.phoneNumber,
                                                                [formClasses.underline]: true
                                                            })
                                                        }}
                                                        id={"phone"}
                                                        name={"phoneNumber"}
                                                        type={"phoneNumber"}
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <Phone className={classes.inputIconsColor} />
                                                            </InputAdornment>
                                                        }
                                                        {...register("phoneNumber", {
                                                            required: "You must specify a phone number",
                                                            pattern: {
                                                                value: /[0-9]/i,
                                                                message: "Phone number must contains only digits."
                                                            }
                                                        })}
                                                    />
                                                    {errors.phoneNumber && <p style={{color: "red"}}>{errors.phoneNumber.message}</p>}
                                                </FormControl>
                                            </div>
                                        )}
                                        <FormControl fullWidth={true} className={formClasses.formControl}>
                                            <InputLabel
                                                className={formClasses.labelRoot}
                                                htmlFor={"email"}
                                            >
                                                Email...
                                            </InputLabel>
                                            <Input
                                                classes={{
                                                    input: inputClasses,
                                                    root: marginTop,
                                                    disabled: formClasses.disabled,
                                                    underline: classNames({
                                                        [formClasses.underlineError] : errors.email,
                                                        [formClasses.underline]: true
                                                    })
                                                }}
                                                id={"email"}
                                                name={"email"}
                                                type={"text"}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <Email className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                }
                                                {...register("email",{
                                                    required: true,
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Invalid email address"
                                                    }
                                                })}
                                            />
                                            {errors.email && errors.email.type === "required" && (
                                                <p style={{color: "red"}}>Your must enter your email address.</p>
                                            )}
                                            {errors.email && <p style={{color: "red"}}>{errors.email.message}</p>}
                                        </FormControl>
                                        <FormControl fullWidth={true} className={formClasses.formControl}>
                                            <InputLabel
                                                className={formClasses.labelRoot}
                                                htmlFor={"password"}
                                            >
                                                Password...
                                            </InputLabel>
                                            <Input
                                                classes={{
                                                    input: inputClasses,
                                                    root: marginTop,
                                                    disabled: formClasses.disabled,
                                                    underline: classNames({
                                                        [formClasses.underlineError] : errors.password,
                                                        [formClasses.underline]: true
                                                    })
                                                }}
                                                id={"password"}
                                                name={"password"}
                                                type={"password"}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <LockOutlined className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                }
                                                {...register("password", {
                                                    required: "You must specify a password",
                                                    minLength: {
                                                        value: 8,
                                                        message: "Password must have at least 8 characters",
                                                    }
                                                })}
                                            />
                                            {errors.password && <p style={{color: "red"}}>{errors.password.message}</p>}
                                        </FormControl>
                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                        {mode === "Login" && (
                                            <div>
                                                <CustomButton simple color="primary" size="lg" type={"submit"}>
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
                                                <CustomButton simple color="primary" size="lg" type={"submit"}>
                                                    {mode}
                                                </CustomButton>
                                            </div>
                                        )}
                                    </CardFooter>
                                </form>
                            </Card>
                            {submitted && (
                                <SnackbarAlert
                                    message={
                                        <span>
                                        <b>{responseMessage}:</b> Veti fi redirectionat catre pagina de Login!
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
                        </GridItem>
                    </GridContainer>
                </div>
                <Footer whiteFont />
            </div>
        </div>
    );
}

export default AuthenticationPage;