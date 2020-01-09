import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const menu = (props) => (
    <FontAwesomeIcon
        icon={faBars}
        onClick={props.clicked}
    />
);

export default menu;