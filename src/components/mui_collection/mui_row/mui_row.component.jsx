import {useState} from "react";
import * as React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import RemoveButton from "../mui_remove_button";
import StatusSelector from "../mui_status_selector";
import AddNoteBox from "../mui_add_note_box";

const Row = (props) => {
    const [open, setOpen] = useState(false);
    const {object, reload_orders} = props;
    const [selectValue, changeSelectValue] = useState(object.request_status);
    const [notes, setNotes] = useState(object.notes);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell component="th" scope="row">
                    {object.id}
                </TableCell>
                <TableCell align="right">
                    <StatusSelector
                        id={object.id}
                        selectValue={selectValue}
                        changeSelectValue={changeSelectValue}
                        reload_orders={reload_orders}
                    />
                </TableCell>
                <TableCell>{object.customer_name}</TableCell>
                <TableCell>{object.customer_email}</TableCell>
                <TableCell>{object.customer_self_description}</TableCell>
                <TableCell>{object.date_time_added}</TableCell>
                <RemoveButton id={object.id} reload_orders={reload_orders}/>
                <TableCell align="center">
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
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <AddNoteBox id={object.id} setNotes={setNotes}/>
                            <Typography variant="h6" gutterBottom component="div">
                                История
                            </Typography>
                            <Table size="small" aria-label="history">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Запись</TableCell>
                                        <TableCell>Когда сделана</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {notes.map((note) => (
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

export default Row;