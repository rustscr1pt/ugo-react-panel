import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import OrderTableRowBuilder from "./OrderTableRowBuilder";
import OrderTableHeadBuilder from "./OrderTableHeadBuilder";

const BasicOrderTable = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <OrderTableHeadBuilder/>
                <TableBody>
                    {
                        props.object_vector.map((object) => (
                            <OrderTableRowBuilder
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
