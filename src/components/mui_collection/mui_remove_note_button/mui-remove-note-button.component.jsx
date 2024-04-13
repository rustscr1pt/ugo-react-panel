import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import * as React from "react";

const RemoveNoteButton = (props) => {

    function remove_note_return_list(note_id, related_id, setNotes) {
        fetch("http://localhost:8000/api/orders/remove_note", {
            method : "POST",
            body : JSON.stringify({
                note_id : `${note_id}`,
                related_id : `${related_id}`
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then((reply) => reply.json())
            .then((json) => {
                if (json.is_succeed) {
                    setNotes(json.reply);
                }
                else {
                    console.log(json.message)
                }
            })
            .catch(function(err) {
                console.log(err)
            })
    }

    return (
        <TableCell align="center">
            <IconButton
                aria-label="delete"
                size="small"
                onClick={() => remove_note_return_list(props.note_id, props.related_id, props.setNotes)}
            >
                <DeleteIcon />
            </IconButton>
        </TableCell>
    )
}

export default RemoveNoteButton;