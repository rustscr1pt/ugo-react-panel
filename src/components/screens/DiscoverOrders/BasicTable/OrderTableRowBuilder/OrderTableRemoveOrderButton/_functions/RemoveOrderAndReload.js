import route_fillers from "../../../../../../../constants&addons/route_fillers";
import {
    toggleOrdersReloadActivator
} from "../../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersReloadActivator/OrdersReloadActivator";

// Remove order by ID from db
export const RemoveOrderAndReload = (id, dispatch, sourceType) => {
    fetch(`${route_fillers.url}${format_the_route(sourceType)}`, {
        method : "POST",
        body : JSON.stringify({
            id : `${id}`
        }),
        headers : {
            "Content-Type" : "application/json"
        }
    })
        .then((response) => response.json())
        .then((json) => {
            if (json.is_succeed) {
                console.log(json.message);
                dispatch(toggleOrdersReloadActivator());
            }
            else {
                console.log(json.message);
            }
        })
        .catch(function(err) {
            console.log(err)
        })
}

function format_the_route(sourceType) {
    if (sourceType === "ugo-vape") {
        return "/api/orders/remove_order"
    }
    else {
        return "/api/walgreen/walgreen_requests/remove_order"
    }
}