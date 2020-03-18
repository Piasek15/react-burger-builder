import React from "react";

import classes from './Toolbar.module.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = ({drawerToggleClicked, isAuthenticated}) => (
    <header className={classes.Toolbar}>
        <div className={classes.MobileOnly}>
            <DrawerToggle clicked={drawerToggleClicked}/>
        </div>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={isAuthenticated}/>
        </nav>
    </header>
);

export default toolbar;