import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Row from "./mui_row";

const BasicTable = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{color : "#FFFFFF"}}>ID</TableCell>
                        <TableCell>Статус</TableCell>
                        <TableCell>Имя</TableCell>
                        <TableCell>Почта</TableCell>
                        <TableCell>Описание</TableCell>
                        <TableCell>Время добавления</TableCell>
                        <TableCell align={"center"}>Удалить</TableCell>
                        <TableCell align={"center"}>Развернуть</TableCell>
                    </TableRow>
                </TableHead>
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

export default BasicTable;