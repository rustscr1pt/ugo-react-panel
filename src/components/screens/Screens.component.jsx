import PagePosition from "../../constants&addons/screen_enums.ts";
import DiscoverOrders from "./DiscoverOrders";
import ManageAdmins from "./ManageAdmins";
import LogsBrowser from "./LogsBrowser";
import {useSelector} from "react-redux";

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
