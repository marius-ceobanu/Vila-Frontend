import React from "react";

import styles from "../../jss/restaurantSectionStyle";

import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

function MenuExtras({ type, items }) {
    const classes = useStyles();
    return (
        <section className="extras">
            <h2>{type}</h2>
            {items.map((item, index) => (
                <article className={classes.menuItem} key={index}>
                    <div>{item.name}</div>
                    <strong>${item.price}</strong>
                </article>
            ))}
        </section>
    );
}

export default MenuExtras;