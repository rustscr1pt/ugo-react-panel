import TableBody from "@mui/material/TableBody";
import * as React from "react";
import LogsTableRowBuilder from "./LogsTableRowBuilder";

const LogsTableBodyBuilder = (props) => {
    return (
        <TableBody>
            {
                props.logsVector.map((object) => (
                    <LogsTableRowBuilder
                        key={object.id}
                        object={object}
                    />
                ))
            }
        </TableBody>
    )
}

export default LogsTableBodyBuilder;
