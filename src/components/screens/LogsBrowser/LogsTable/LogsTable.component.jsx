import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import {LogsTableHeadBuilder} from "./LogsTableHeadBuilder/LogsTableHeadBuilder.component";
import {LogsTableBodyBuilder} from "./LogsTableBodyBuilder/LogsTableBodyBuilder.component";

export const LogsTable = () => {

    return (
        <TableContainer component={Paper}>
            <Table>
                <LogsTableHeadBuilder/>
                <LogsTableBodyBuilder/>
            </Table>
        </TableContainer>
    )
}
