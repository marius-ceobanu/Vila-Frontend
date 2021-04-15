import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import styles from "../../jss/infoStyle.js";

const useStyles = makeStyles(styles);

function InfoArea(props) {
    const classes = useStyles();
    const { title, description, logo } = props;
    const iconWrapper = classNames({
        [classes.iconWrapper]: true,
        [classes.danger]: true,
        [classes.iconWrapperVertical]: true
    });
    const iconClasses = classNames({
        [classes.icon]: true,
        [classes.iconVertical]: true
    });

    return (
        <div className={classes.infoArea}>
            { logo !== undefined ? (
                <div className={iconWrapper}>
                    <img src={logo} alt="..." className={classes.imgSimple}/>
                </div>
            ) : (
                <div className={iconWrapper}>
                    <props.icon className={iconClasses} />
                </div>
            )}
            <div className={classes.descriptionWrapper}>
                <h4 className={classes.title}>{title}</h4>
                <p className={classes.description}>{description}</p>
            </div>
        </div>
    );
}

InfoArea.defaultProps = {
    iconColor: "gray"
};

InfoArea.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    logo: PropTypes.string,
    icon: PropTypes.object,
    iconColor: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
};

export default InfoArea;
