/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

import {Apps, Restaurant, Twitter, Instagram, Facebook, Info, Contacts, CalendarToday} from "@material-ui/icons";

import CustomDropdown from "../Layout/CustomDropdown";
import Button from "../Layout/CustomButton";

import styles from "../../jss/headerLinksStyle";

const useStyles = makeStyles(styles);

function HeaderLinks(props) {
    const classes = useStyles();
    return (
        <List className={classes.list}>
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
                        <Link to="/" className={classes.dropdownLink}>
                            Toate
                        </Link>,
                        <a
                            href=""
                            target="_blank"
                            className={classes.dropdownLink}
                        >
                            Single
                        </a>,
                        <a
                            href=""
                            target="_blank"
                            className={classes.dropdownLink}
                        >
                            Double
                        </a>
                    ]}
                />
            </ListItem>
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
            <ListItem className={classes.listItem}>
                {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
                <Tooltip
                    id="instagram-twitter"
                    title="Follow us on twitter"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                >
                    <Button
                        href="https://twitter.com"
                        target="_blank"
                        color="transparent"
                        className={classes.navLink}
                    >
                        {/*<i className={classes.socialIcons + " fab fa-twitter"} />*/}
                        <Twitter className={classes.icons} />
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-facebook"
                    title="Follow us on facebook"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                >
                    <Button
                        color="transparent"
                        href="https://www.facebook.com"
                        target="_blank"
                        className={classes.navLink}
                    >
                        {/*<i className={classes.socialIcons + " fab fa-facebook"} />*/}
                        <Facebook className={classes.icons} />
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-tooltip"
                    title="Follow us on instagram"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                >
                    <Button
                        color="transparent"
                        href="https://www.instagram.com"
                        target="_blank"
                        className={classes.navLink}
                    >
                        {/*<i className={classes.socialIcons + " fab fa-instagram"} />*/}
                        <Instagram className={classes.icons} />
                    </Button>
                </Tooltip>
            </ListItem>
        </List>
    );
}

export default HeaderLinks;