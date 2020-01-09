import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const drawerToggle = (props) => (
    <FontAwesomeIcon
        icon={faBars}
        size="2x"
        color="white"
        onClick={props.clicked}
    />
);

export default drawerToggle;