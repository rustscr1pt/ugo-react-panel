import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import route_fillers from "../../../../../../constants&addons/route_fillers";
import {useDispatch} from "react-redux";
import {
    toggleOrdersReloadActivator
} from "../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersReloadActivator/OrdersReloadActivator";

const OrderTableRemoveOrderButton = (props) => {
    const dispatch = useDispatch();
    function remove_order_by_id(id) {
        fetch(`${route_fillers.url}/api/orders/remove_order`, {
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

    return (
        <TableCell align="center">
            <IconButton
                aria-label="delete"
                size="small"
                onClick={() => remove_order_by_id(props.id, props.reloadActivator, props.setReloadActivator)}
            >
                <DeleteIcon />
            </IconButton>
        </TableCell>
    )
}

export default OrderTableRemoveOrderButton;
