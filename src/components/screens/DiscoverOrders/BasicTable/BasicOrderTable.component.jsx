import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

import {useSelector} from "react-redux";
import {OrderTableHeadBuilder} from "./OrderTableHeadBuilder/OrderTableHeadBuilder.component";
import {OrderTableRowBuilder} from "./OrderTableRowBuilder/OrderTableRowBuilder.component";

export const BasicOrderTable = () => {
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
