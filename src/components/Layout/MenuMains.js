import React from "react";

import styles from "../../jss/restaurantSectionStyle";

import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

function MenuMains({ meals }) {
    const classes = useStyles();
    return (
        <section className={classes.mains}>
            {meals.map((meal, index) => (
                <article className={classes.menuItem} key={index}>
                    <h3 className={classes.mainsName}>{meal.name}</h3>
                    <div className={classes.mainsDescription}>{meal.description}</div>
                    <strong className={classes.menuPrice}>${meal.price}</strong>
                </article>
            ))}
        </section>
    );
}

export default MenuMains;