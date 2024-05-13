import * as React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import {AdminsTableHeadBuilder} from "./AdminsTableHeadBuilder/AdminsTableHeadBuilder.component";
import {AdminsTableBodyBuilder} from "./AdminsTableBodyBuilder/AdminsTableBodyBuilder.component";
export const AdminsTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <AdminsTableHeadBuilder/>
                <AdminsTableBodyBuilder/>
            </Table>
        </TableContainer>
    );
}
