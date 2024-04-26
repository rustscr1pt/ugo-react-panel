import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import * as React from "react";

const TableBodyBuilder = (props) => {
    return (
        <TableBody>
            {props.adminsVector.map((row) => (
                <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell align="right">{row.user_login}</TableCell>
                    <TableCell align="right">{row.user_password}</TableCell>
                    <TableCell align="right">{row.created}</TableCell>
                    <TableCell align="right">"Show Button"</TableCell>
                    <TableCell align="right">"Remove Button"</TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}
export default TableBodyBuilder;