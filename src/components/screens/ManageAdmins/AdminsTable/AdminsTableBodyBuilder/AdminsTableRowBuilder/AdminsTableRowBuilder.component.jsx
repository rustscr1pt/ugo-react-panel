import TableCell from "@mui/material/TableCell";
import ShowPasswordButton from "./ShowPasswordButton";
import RemoveAdminButton from "./RemoveAdminButton";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import {useState} from "react";

const AdminsTableRowBuilder = (props) => {

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
            <TableCell align="center">{props.row.user_login}</TableCell>
            <TableCell align="center">{password_formatter()}</TableCell>
            <TableCell align="center">{props.row.created}</TableCell>
            <TableCell align="center">
                <ShowPasswordButton
                    setPasswordVisibility={setPasswordVisibility}
                />
            </TableCell>
            <TableCell align="center">
                <RemoveAdminButton
                    id={props.row.id}
                />
            </TableCell>
        </TableRow>
    )
}
export default AdminsTableRowBuilder;
