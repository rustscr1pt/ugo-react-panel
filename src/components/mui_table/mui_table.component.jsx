import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useState} from "react";
import IDContainer from "../id_container";
import Status_selector from "../status_selector";

function Row(props) {
    const [open, setOpen] = useState(false);
    const {object} = props;

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell component="th" scope="row">
                    {object.id}
                </TableCell>
                <TableCell align="right">
                    <Status_selector
                        reload_orders={object.reload_orders}
                        object_id={object.id}
                        object_value={object.request_status}
                    />
                </TableCell>
                <TableCell>{object.customer_name}</TableCell>
                <TableCell>{object.customer_email}</TableCell>
                <TableCell>{object.customer_self_description}</TableCell>
                <TableCell>{object.date_time_added}</TableCell>
                <TableCell>
                    <IDContainer id={object.id} reload_orders={object.reload_orders}/>
                </TableCell>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                История
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Запись</TableCell>
                                        <TableCell>Когда сделана</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {object.notes.map((note) => (
                                        <TableRow key={note.id}>
                                            <TableCell component="th" scope="row">
                                                {note.id}
                                            </TableCell>
                                            <TableCell>{note.text_info}</TableCell>
                                            <TableCell>{note.date_time}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

const BasicTable = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Статус</TableCell>
                        <TableCell>Имя</TableCell>
                        <TableCell>Почта</TableCell>
                        <TableCell>Описание</TableCell>
                        <TableCell>Время добавления</TableCell>
                        <TableCell align={"center"}>Действия</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.object_vector.map((object) => (
                            <Row key={object.id} object={object}/>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BasicTable;