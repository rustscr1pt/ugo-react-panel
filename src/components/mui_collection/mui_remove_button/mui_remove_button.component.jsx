import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import route_fillers from "../../../constants/route_fillers";

const RemoveButton = (props) => {
    function remove_order_by_id(id, reload, setReload) {
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
                    setReload(!reload);
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

export default RemoveButton;