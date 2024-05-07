import {useState} from "react";
import PagePosition from "../../constants&addons/screen_enums.ts";
import DiscoverOrders from "./DiscoverOrders";
import ManageAdmins from "./ManageAdmins";
import LogsBrowser from "./LogsBrowser";

const Screens = (props) => {
    const [pagePosition, setPagePosition] = useState(PagePosition.Discover);
    if (pagePosition === PagePosition.Discover) {
        return (
            <DiscoverOrders
                setIsAuthorized={props.setIsAuthorized}
                setPagePosition={setPagePosition}
            />
        )
    }
    else if (pagePosition === PagePosition.LogsBrowser) {
        return (
            <LogsBrowser
                setIsAuthorized={props.setIsAuthorized}
                setPagePosition={setPagePosition}
            />
        )
    }
    else {
        return (
            <ManageAdmins
                setIsAuthorized={props.setIsAuthorized}
                setPagePosition={setPagePosition}
            />
        )
    }
}

export default Screens;
