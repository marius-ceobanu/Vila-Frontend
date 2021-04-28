import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import {List, ListItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import Favorite from "@material-ui/icons/Favorite";

import styles from "../../jss/footerStyle.js";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "./CustomButton";

const useStyles = makeStyles(styles);

export default function Footer(props) {
    const classes = useStyles();
    const { whiteFont } = props;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    const aClasses = classNames({
        [classes.a]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
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
                        <ListItem className={classes.inlineBlock}>
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
                        <ListItem className={classes.inlineBlock}>
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
                </div>
                <div className={classes.right}>
                    &copy; {1900 + new Date().getYear()} , made with{" "}
                    <Favorite className={classes.icon} /> by{" "}
                    <a
                        href="https://github.com/marius-ceobanu/"
                        className={aClasses}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Marius
                    </a>{" "}
                    for a better world.
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    whiteFont: PropTypes.bool
};