import TableBody from "@mui/material/TableBody";
import * as React from "react";
import LogsTableRowBuilder from "./LogsTableRowBuilder";
import {useSelector} from "react-redux";

const LogsTableBodyBuilder = (props) => {
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

export default LogsTableBodyBuilder;
