import * as React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableHeadBuilder from "./table_head_builder";
import TableBodyBuilder from "./table_body_builder";
const AdminsTable = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHeadBuilder/>
                <TableBodyBuilder
                    adminsVector={props.adminsVector}
                    setReloadActivator={props.setReloadActivator}
                />
            </Table>
        </TableContainer>
    );
}

export default AdminsTable;