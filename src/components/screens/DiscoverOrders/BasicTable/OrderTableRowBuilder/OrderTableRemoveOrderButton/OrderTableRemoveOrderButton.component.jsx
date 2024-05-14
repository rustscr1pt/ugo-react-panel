import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import {useDispatch} from "react-redux";
import {RemoveOrderAndReload} from "./_functions/RemoveOrderAndReload";

export const OrderTableRemoveOrderButton = (props) => {
    const dispatch = useDispatch();

    return (
        <TableCell align="center">
            <IconButton
                aria-label="delete"
                size="small"
                onClick={() => RemoveOrderAndReload(props.id, dispatch)}
            >
                <DeleteIcon />
            </IconButton>
        </TableCell>
    )
}
