import {useState} from "react";
import PagePosition from "../../constants&addons/constants.ts";
import DiscoverOrders from "./discover_orders";

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

    }
}

export default Screens;