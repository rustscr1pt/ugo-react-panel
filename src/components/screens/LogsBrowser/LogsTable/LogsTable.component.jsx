import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import LogsTableHeadBuilder from "./LogsTableHeadBuilder";
import LogsTableBodyBuilder from "./LogsTableBodyBuilder";

const LogsTable = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <LogsTableHeadBuilder/>
                <LogsTableBodyBuilder
                    logsVector={props.logsVector}
                />
            </Table>
        </TableContainer>
    )
}
export default LogsTable;
