import {useState} from "react";
import PagePosition from "../../constants&addons/screen_enums.ts";
import DiscoverOrders from "./discover_orders";
import ManageAdmins from "./manage_admins";

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