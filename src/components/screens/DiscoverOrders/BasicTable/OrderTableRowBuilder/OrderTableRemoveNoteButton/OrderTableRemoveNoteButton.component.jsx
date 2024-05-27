import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import * as React from "react";
import {RemoveNoteAndReturnList} from "./_function/RemoveNoteAndReturnList";
import {useSelector} from "react-redux";

export const OrderTableRemoveNoteButton = (props) => {

    const sourceType = useSelector((state) => state.selectedBase.value);

    return (
            <IconButton
                aria-label="delete"
                size="small"
                onClick={() => RemoveNoteAndReturnList(props.note_id, props.related_id, props.setNotes, sourceType)}
            >
                <DeleteIcon />
            </IconButton>
    )
}