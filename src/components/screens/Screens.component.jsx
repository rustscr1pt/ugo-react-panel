import PagePosition from "../../constants&addons/screen_enums.ts";
import ManageAdmins from "./ManageAdmins";
import {useSelector} from "react-redux";
import React from "react";
import {DiscoverOrders} from "./DiscoverOrders/DiscoverOrders.component";
import {LogsBrowser} from "./LogsBrowser/LogsBrowser.component";

const Screens = () => {
    const screenPosition = useSelector((state) => state.screenPosition.value);

    if (screenPosition === PagePosition.Discover) {
        return (
            <DiscoverOrders/>
        )
    }
    else if (screenPosition === PagePosition.LogsBrowser) {
        return (
            <LogsBrowser/>
        )
    }
    else {
        return (
            <ManageAdmins/>
        )
    }
}

export default Screens;
