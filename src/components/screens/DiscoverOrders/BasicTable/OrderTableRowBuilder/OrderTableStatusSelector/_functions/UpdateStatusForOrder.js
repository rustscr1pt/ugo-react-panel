import route_fillers from "../../../../../../../constants&addons/route_fillers";
import {
    toggleOrdersReloadActivator
} from "../../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersReloadActivator/OrdersReloadActivator";


// On change event update the status value in mySQL
export const UpdateStatusForOrder = (event, id, changeSelectValue, dispatch) => {
    fetch(`${route_fillers.url}/api/orders/change_status`, {
        method : "POST",
        body : JSON.stringify({
            order_id : `${id}`,
            new_status : `${event.target.value}`
        }),
        headers : {
            "Content-Type" : "application/json"
        }
    })
        .then((response) => response.json())
        .then((json) => {
            if (json.is_succeed) {
                console.log(json.message);
                changeSelectValue(event.target.value);
                dispatch(toggleOrdersReloadActivator());
            }
            else {
                console.log(json.message);
            }
        })
        .catch(function(err) {
            console.log(err);
        })
    console.log(event.target.value);
}