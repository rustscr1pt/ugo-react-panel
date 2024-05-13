import TableBody from "@mui/material/TableBody";
import * as React from "react";
import {useSelector} from "react-redux";
import {AdminsTableRowBuilder} from "./AdminsTableRowBuilder/AdminsTableRowBuilder.component";

export const AdminsTableBodyBuilder = () => {
    const adminsVector = useSelector((state) => state.adminsVector.value);
    return (
        <TableBody>
            {adminsVector.map((row) => (
                <AdminsTableRowBuilder
                    key={row.id}
                    row={row}
                />
            ))}
        </TableBody>
    )
}
