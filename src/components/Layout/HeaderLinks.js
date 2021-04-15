/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

import { Apps, CloudDownload } from "@material-ui/icons";

import CustomDropdown from "../Layout/CustomDropdown";
import Button from "../Layout/CustomButton";

import styles from "../../jss/headerLinksStyle";

const useStyles = makeStyles(styles);

function HeaderLinks(props) {
    const classes = useStyles();
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    buttonText="Components"
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    buttonIcon={Apps}
                    dropdownList={[
                        <Link to="/" className={classes.dropdownLink}>
                            All components
                        </Link>,
                        <a
                            href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
                            target="_blank"
                            className={classes.dropdownLink}
                        >
                            Documentation
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
                    <CloudDownload className={classes.icons} /> Download
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
                        <i className={classes.socialIcons + " fab fa-twitter"} />
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
                        <i className={classes.socialIcons + " fab fa-facebook"} />
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
                        <i className={classes.socialIcons + " fab fa-instagram"} />
                    </Button>
                </Tooltip>
            </ListItem>
        </List>
    );
}

export default HeaderLinks;