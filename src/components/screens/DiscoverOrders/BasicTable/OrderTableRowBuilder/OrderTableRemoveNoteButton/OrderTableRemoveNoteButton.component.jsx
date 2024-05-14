import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import * as React from "react";
import {RemoveNoteAndReturnList} from "./_function/RemoveNoteAndReturnList";

export const OrderTableRemoveNoteButton = (props) => {

    return (
            <IconButton
                aria-label="delete"
                size="small"
                onClick={() => RemoveNoteAndReturnList(props.note_id, props.related_id, props.setNotes)}
            >
                <DeleteIcon />
            </IconButton>
    )
}