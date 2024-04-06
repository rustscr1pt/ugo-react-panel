import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./mui_table.style.sass"
import Status_selector from "../status_selector";
import IDContainer from "../id_container";
import UnfoldButton from "../extended/unfold_button";

const BasicTable = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth : 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Статус</TableCell>
                        <TableCell>Имя</TableCell>
                        <TableCell>Почта</TableCell>
                        <TableCell>Описание</TableCell>
                        <TableCell>Время добавления</TableCell>
                        <TableCell align={"center"}>Дополнительно</TableCell>
                        <TableCell align={"center"}>Удалить</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.object_vector.map((object) => (
                            <TableRow key={object.id} sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                                <TableCell component="th" scope="row">{object.id}</TableCell>
                                <TableCell>
                                <Status_selector
                                    reload_orders={props.reload_orders}
                                    object_id={object.id}
                                    object_value={object.request_status}
                                />
                                </TableCell>
                                <TableCell>{object.customer_name}</TableCell>
                                <TableCell>{object.customer_email}</TableCell>
                                <TableCell>{object.customer_self_description}</TableCell>
                                <TableCell>{object.date_time_added}</TableCell>
                                <TableCell>
                                    <UnfoldButton/>
                                </TableCell>
                                <TableCell>
                                    <IDContainer id={object.id} reload_orders={props.reload_orders}/>
                                </TableCell>
                            </TableRow>
                            ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BasicTable;