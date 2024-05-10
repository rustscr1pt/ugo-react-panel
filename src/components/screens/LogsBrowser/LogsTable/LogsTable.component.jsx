import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import LogsTableHeadBuilder from "./LogsTableHeadBuilder";
import LogsTableBodyBuilder from "./LogsTableBodyBuilder";
import {useSelector} from "react-redux";

const LogsTable = () => {

    return (
        <TableContainer component={Paper}>
            <Table>
                <LogsTableHeadBuilder/>
                <LogsTableBodyBuilder/>
            </Table>
        </TableContainer>
    )
}
export default LogsTable;
