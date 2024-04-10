import {Button, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import * as React from "react";
import {useState} from "react";

const AddNoteBox = (props) => {
    const [textField, setTextField] = useState("");
    function add_note(id, setNotes) {
        fetch("http://localhost:8000/api/orders/add_note", {
            method : "POST",
            body : JSON.stringify({
                order_id : `${id}`,
                note_to_add : `${textField}`
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then((reply) => reply.json())
            .then((json) => {
                if (json.is_succeed) {
                    console.log(json.message);
                    setNotes(json.reply)
                    setTextField("");
                }
                else {
                    console.log(json.message)
                }
            })
    }

    return (
        <Box sx={{display : 'flex', flexDirection: "row", justifyContent : "space-between", width : "80%"}}>
            <TextField
                sx={{width : "80%"}}
                label="Введите запись для добавления"
                variant='outlined'
                value={textField}
                onChange={(event) => setTextField(event.target.value)}
            />
            <Button
                sx={{width : "18%"}}
                variant="contained"
                endIcon={<SendIcon />}
                onClick={() => add_note(props.id, props.setNotes)}
            >
                Добавить
            </Button>
        </Box>
    )
}

export default AddNoteBox;