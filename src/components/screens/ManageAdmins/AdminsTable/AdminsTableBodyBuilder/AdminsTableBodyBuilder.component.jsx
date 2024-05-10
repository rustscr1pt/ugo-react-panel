import TableBody from "@mui/material/TableBody";
import * as React from "react";
import AdminsTableRowBuilder from "./AdminsTableRowBuilder";
import {useSelector} from "react-redux";

const AdminsTableBodyBuilder = () => {
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
export default AdminsTableBodyBuilder;
