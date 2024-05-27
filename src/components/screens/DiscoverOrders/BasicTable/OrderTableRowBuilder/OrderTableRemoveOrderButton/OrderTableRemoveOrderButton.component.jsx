import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RemoveOrderAndReload} from "./_functions/RemoveOrderAndReload";

export const OrderTableRemoveOrderButton = (props) => {
    const dispatch = useDispatch();
    const sourceType = useSelector((state) => state.selectedBase.value);

    return (
        <TableCell align="center">
            <IconButton
                aria-label="delete"
                size="small"
                onClick={() => RemoveOrderAndReload(props.id, dispatch, sourceType)}
            >
                <DeleteIcon />
            </IconButton>
        </TableCell>
    )
}
