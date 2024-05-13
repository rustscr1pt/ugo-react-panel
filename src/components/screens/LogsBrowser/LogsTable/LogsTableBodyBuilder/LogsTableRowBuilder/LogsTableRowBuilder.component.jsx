import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export const LogsTableRowBuilder = (props) => {
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell align={"center"} component="th" scope="row">{props.object.id}</TableCell>
            <TableCell align="left">{props.object.contents}</TableCell>
            <TableCell align="center">{props.object.date_time}</TableCell>
        </TableRow>
    )
}
