import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import styles from "../../jss/infoStyle.js";

const useStyles = makeStyles(styles);

function InfoArea(props) {
    const classes = useStyles();
    const { title, description, logo } = props;

    return (
        <div className={classes.infoArea}>
            <img src={logo} alt="..." className={classes.imgSimple}/>
            <div className={classes.descriptionWrapper}>
                <h4 className={classes.title}>{title}</h4>
                <p className={classes.description}>{description}</p>
            </div>
        </div>
    );
}

InfoArea.propTypes = {
    logo: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    vertical: PropTypes.bool
};

export default InfoArea;
