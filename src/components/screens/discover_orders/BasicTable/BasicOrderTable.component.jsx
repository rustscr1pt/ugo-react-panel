import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Row from "./mui_row";
import OrderTableHeadBuilder from "./OrderTableHeadBuilder";

const BasicOrderTable = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <OrderTableHeadBuilder/>
                <TableBody>
                    {
                        props.object_vector.map((object) => (
                            <Row
                                key={object.id}
                                object={object}
                                reloadActivator={props.reloadActivator}
                                setReloadActivator={props.setReloadActivator}
                            />
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BasicOrderTable;
