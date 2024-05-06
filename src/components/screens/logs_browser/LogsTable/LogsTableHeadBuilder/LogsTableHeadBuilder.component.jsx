import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import * as React from "react";

const LogsTableHeadBuilder = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell align={"center"}>ID</TableCell>
                <TableCell>Содержание</TableCell>
                <TableCell align={"center"}>Дата и время</TableCell>
            </TableRow>
        </TableHead>
    )
}
export default LogsTableHeadBuilder;
