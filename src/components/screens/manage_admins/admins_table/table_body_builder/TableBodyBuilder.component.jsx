import TableBody from "@mui/material/TableBody";
import * as React from "react";
import TableRowBuilder from "./table_row_builder";

const TableBodyBuilder = (props) => {
    return (
        <TableBody>
            {props.adminsVector.map((row) => (
                <TableRowBuilder
                    row={row}
                    setReloadActivator={props.setReloadActivator}
                />
            ))}
        </TableBody>
    )
}
export default TableBodyBuilder;