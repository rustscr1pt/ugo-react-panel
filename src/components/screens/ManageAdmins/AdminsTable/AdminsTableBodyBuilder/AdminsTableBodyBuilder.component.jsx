import TableBody from "@mui/material/TableBody";
import * as React from "react";
import AdminsTableRowBuilder from "./AdminsTableRowBuilder";

const AdminsTableBodyBuilder = (props) => {
    return (
        <TableBody>
            {props.adminsVector.map((row) => (
                <AdminsTableRowBuilder
                    key={row.id}
                    row={row}
                    setReloadActivator={props.setReloadActivator}
                />
            ))}
        </TableBody>
    )
}
export default AdminsTableBodyBuilder;
