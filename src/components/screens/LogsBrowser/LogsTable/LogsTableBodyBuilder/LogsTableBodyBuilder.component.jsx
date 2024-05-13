import TableBody from "@mui/material/TableBody";
import * as React from "react";
import {useSelector} from "react-redux";
import {LogsTableRowBuilder} from "./LogsTableRowBuilder/LogsTableRowBuilder.component";

export const LogsTableBodyBuilder = () => {
    const logsVector = useSelector((state) => state.logsVector.value);
    return (
        <TableBody>
            {
                logsVector.map((object) => (
                    <LogsTableRowBuilder
                        key={object.id}
                        object={object}
                    />
                ))
            }
        </TableBody>
    )
}
