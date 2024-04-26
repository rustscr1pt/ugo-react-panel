import TableCell from "@mui/material/TableCell";
import ShowPasswordButton from "./show_password_button";
import RemoveAdminButton from "./remove_admin_button";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import {useState} from "react";

const TableRowBuilder = (props) => {

    const [passwordVisibility, setPasswordVisibility] = useState(false);

    function password_formatter() {
        if (passwordVisibility) {
            return props.row.user_password
        }
        else {
            return "*".repeat(props.row.user_password.length)
        }
    }

    return (
        <TableRow
            key={props.row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {props.row.id}
            </TableCell>
            <TableCell align="right">{props.row.user_login}</TableCell>
            <TableCell align="right">{password_formatter()}</TableCell>
            <TableCell align="right">{props.row.created}</TableCell>
            <TableCell align="right">
                <ShowPasswordButton
                    setPasswordVisibility={setPasswordVisibility}
                />
            </TableCell>
            <TableCell align="right">
                <RemoveAdminButton/>
            </TableCell>
        </TableRow>
    )
}
export default TableRowBuilder;