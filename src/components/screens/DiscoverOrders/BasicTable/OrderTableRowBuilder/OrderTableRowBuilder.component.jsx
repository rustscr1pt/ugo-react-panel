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
import {OrderTableStatusSelector} from "./OrderTableStatusSelector/OrderTableStatusSelector.component";
import {OrderTableRemoveOrderButton} from "./OrderTableRemoveOrderButton/OrderTableRemoveOrderButton.component";
import {OrderTableAddNoteBox} from "./OrderTableAddNoteBox/OrderTableAddNoteBox.component";
import {OrderTableRemoveNoteButton} from "./OrderTableRemoveNoteButton/OrderTableRemoveNoteButton.component";

export const OrderTableRowBuilder = (props) => {
    const [open, setOpen] = useState(false);
    const object = props.object;
    const [selectValue, changeSelectValue] = useState(object.request_status);
    const [notes, setNotes] = useState(object.notes);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell component="th" scope="row">
                    {object.id}
                </TableCell>
                <TableCell sx={{width : "24%"}} align="right">
                    <OrderTableStatusSelector
                        id={object.id}
                        selectValue={selectValue}
                        changeSelectValue={changeSelectValue}
                    />
                </TableCell>
                <TableCell>{object.customer_name}</TableCell>
                <TableCell>{object.customer_email}</TableCell>
                <TableCell>{object.customer_self_description}</TableCell>
                <TableCell>{object.date_time_added}</TableCell>
                <OrderTableRemoveOrderButton
                    id={object.id}
                />
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
                        <Box sx={{ margin: 1, width : "100%", marginTop : "1%" }}>
                            <OrderTableAddNoteBox
                                id={object.id}
                                setNotes={setNotes}
                            />
                            <Typography sx={{marginTop : "1%"}} variant="h6" gutterBottom component="div">
                                История
                            </Typography>
                            <Table size="small" aria-label="history">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Запись</TableCell>
                                        <TableCell>Когда сделана</TableCell>
                                        <TableCell></TableCell>
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
                                            <TableCell>
                                                <OrderTableRemoveNoteButton
                                                    setNotes={setNotes}
                                                    note_id={note.id}
                                                    related_id={object.id}
                                                />
                                            </TableCell>
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