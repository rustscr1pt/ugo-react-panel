import PagePosition from "../../constants&addons/screen_enums.ts";
import DiscoverOrders from "./DiscoverOrders";
import ManageAdmins from "./ManageAdmins";
import LogsBrowser from "./LogsBrowser";
import {useSelector} from "react-redux";

const Screens = (props) => {
    const screenPosition = useSelector((state) => state.screenPosition.value);

    if (screenPosition === PagePosition.Discover) {
        return (
            <DiscoverOrders
                setIsAuthorized={props.setIsAuthorized}
                setPagePosition={setPagePosition}
            />
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
