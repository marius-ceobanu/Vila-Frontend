import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import {auth} from "../UserAuthentication/FirebaseConfig";

import {
    AccountCircle,
    Apps,
    AssignmentTurnedIn,
    CalendarToday,
    Contacts,
    ExitToApp,
    Info,
    Restaurant,
    VpnKey
} from "@material-ui/icons";

import CustomDropdown from "../Layout/CustomDropdown";
import Button from "../Layout/CustomButton";

import styles from "../../jss/headerLinksStyle";
import RoomsModal from "../Rooms/RoomsModal";

const useStyles = makeStyles(styles);

function HeaderLinks(props) {
    const [roomsModal, setRoomsModal] = useState(false);
    const [roomsFilter, setRoomsFilter] = useState("Toate");
    const [isLogged, setIsLogged] = useState(false);
    const [userName, setUserName] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (window.sessionStorage.getItem("userEmail")) {
            setIsLogged(true);
            setUserName(window.sessionStorage.getItem("firstName"));
            setIsAdmin(window.sessionStorage.getItem("userType") === "ROLE_ADMIN");
        } else {
            auth.onAuthStateChanged(user => {
                setIsLogged(!!user);
                setUserName(user ? user.displayName : "");
            })
        }
    }, []);

    const logout = () => {
        sessionStorage.clear();
        auth.signOut().then(() => {
            console.log("Sign out successful!");
        }).catch((error) => {
            console.log(error);
        })
    }

    const classes = useStyles();
    return (
        <List className={classes.list}>
            <Link to={"/about"} className={classes.linkItem}>
                <ListItem className={classes.listItem}>
                    <Button
                        href=""
                        color="transparent"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <Info className={classes.icons} /> Despre noi
                    </Button>
                </ListItem>
            </Link>
            <Link to={"/restaurant"} className={classes.linkItem}>
                <ListItem className={classes.listItem}>
                    <Button
                        href=""
                        color="transparent"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <Restaurant className={classes.icons} /> Restaurant
                    </Button>
                </ListItem>
            </Link>
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    buttonText="Camere"
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    buttonIcon={Apps}
                    dropdownList={[
                        <Link to="#" className={classes.dropdownLink} onClick={() => {setRoomsFilter("Toate"); setRoomsModal(true);}}>
                            Toate
                        </Link>,
                        <Link
                            to="#"
                            className={classes.dropdownLink}
                            onClick={() => {setRoomsFilter("Single"); setRoomsModal(true);}}
                        >
                            Single
                        </Link>,
                        <Link
                            to="#"
                            className={classes.dropdownLink}
                            onClick={() => {setRoomsFilter("Double"); setRoomsModal(true);}}
                        >
                            Double
                        </Link>
                    ]}
                />
            </ListItem>
            <Link to={"/contact"} className={classes.linkItem}>
                <ListItem className={classes.listItem}>
                    <Button
                        href=""
                        color="transparent"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <Contacts className={classes.icons} /> Contact
                    </Button>
                </ListItem>
            </Link>
            <Link to={"/discover"} className={classes.linkItem}>
                <ListItem className={classes.listItem}>
                    <Button
                        href=""
                        color="transparent"
                        target="_blank"
                        className={classes.navLink}
                    >
                        Descopera Zona
                    </Button>
                </ListItem>
            </Link>
            <ListItem className={classes.listItem}>
                <Button
                    href=""
                    color="transparent"
                    target="_blank"
                    className={classes.navLink}
                >
                    <CalendarToday className={classes.icons} /> Rezerva
                </Button>
            </ListItem>
            {!isLogged ? (
                <ListItem className={classes.listItem}>
                    <Tooltip
                        id="login"
                        title="Login"
                        placement={window.innerWidth > 959 ? "top" : "left"}
                        classes={{ tooltip: classes.tooltip }}
                    >
                        <Button
                            color="transparent"
                            href="/authentication/login"
                            // target="_blank"
                            className={classes.navLink}
                        >
                            <VpnKey className={classes.icons} />
                        </Button>
                    </Tooltip>
                </ListItem>
            ) : (
                <Link to={isAdmin ? "/admin" : "/user"} className={classes.linkItem}>
                    <ListItem className={classes.listItem}>
                        <Tooltip
                            id="user"
                            title="User"
                            placement={window.innerWidth > 959 ? "top" : "left"}
                            classes={{ tooltip: classes.tooltip }}
                        >
                            <Button
                                color="transparent"
                                href=""
                                // target="_blank"
                                className={classes.navLink}
                            >
                                <AccountCircle className={classes.icons} />
                                {userName}
                            </Button>
                        </Tooltip>
                    </ListItem>
                </Link>
            )}
            {!isLogged ? (
                <ListItem className={classes.listItem}>
                    <Tooltip
                        id="register"
                        title="Creează un cont"
                        placement={window.innerWidth > 959 ? "top" : "left"}
                        classes={{ tooltip: classes.tooltip }}
                    >
                        <Button
                            color="transparent"
                            href="/authentication/register"
                            // target="_blank"
                            className={classes.navLink}
                        >
                            <AssignmentTurnedIn className={classes.icons} />
                        </Button>
                    </Tooltip>
                </ListItem>
            ) : (
                <ListItem className={classes.listItem}>
                    <Tooltip
                        id="logout"
                        title="Logout"
                        placement={window.innerWidth > 959 ? "top" : "left"}
                        classes={{ tooltip: classes.tooltip }}
                    >
                        <Button
                            color="transparent"
                            href="/home"
                            // target="_blank"
                            className={classes.navLink}
                            onClick={logout}
                        >
                            <ExitToApp className={classes.icons} />
                        </Button>
                    </Tooltip>
                </ListItem>
            )}
            <RoomsModal open={roomsModal} close={() => setRoomsModal(false)} filter={roomsFilter} />
        </List>
    );
}

export default HeaderLinks;