import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import OrderTableRowBuilder from "./OrderTableRowBuilder";
import OrderTableHeadBuilder from "./OrderTableHeadBuilder";
import {useSelector} from "react-redux";

const BasicOrderTable = () => {
    const object_vector = useSelector((state) => state.ordersVector.value);
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <OrderTableHeadBuilder/>
                <TableBody>
                    {
                        object_vector.map((object) => (
                            <OrderTableRowBuilder
                                key={object.id}
                                object={object}
                            />
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BasicOrderTable;
