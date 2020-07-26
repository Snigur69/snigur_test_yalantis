import React from "react";
import styles from "./Month.module.css";

const Month = (props) => {
    let currentColor;
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    if (props.users.length <= 2) {
        currentColor = "grey";
    } else if (props.users.length <= 6) {
        currentColor = "blue";
    } else if (props.users.length <= 10) {
        currentColor = "green";
    } else {
        currentColor = "red";
    }
    return (
        <div
            id={props.month}
            onMouseEnter={props.mouseEnter}
            onMouseLeave={props.mouseLeave}
            className={styles.single_month}
            style={{ backgroundColor: currentColor }}
        >
            {months[props.month]} <br />
            <span>{props.users.length} users</span>
        </div>
    );
};

export default Month;
