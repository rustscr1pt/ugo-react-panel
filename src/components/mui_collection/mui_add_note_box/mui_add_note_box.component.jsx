import {Button, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import * as React from "react";
import {useState} from "react";
import route_fillers from "../../../constants/route_fillers";

const AddNoteBox = (props) => {
    const [textField, setTextField] = useState("");
    const [fieldError, setFieldError] = useState(false);

    function textfield_event(event) {
        if (event.target.value !== "") {
            setFieldError(false);
            setTextField(event.target.value);
        }
        else {
            setTextField(event.target.value);
        }
    }
    function add_note(id, setNotes) {
        if (textField === "") {
            setFieldError(true);
        }
        else {
            fetch(`${route_fillers.url}/api/orders/add_note`, {
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
    }

    return (
        <Box sx={{display : 'flex', flexDirection: "row", justifyContent : "space-between", width : "80%"}}>
            <TextField
                error={fieldError}
                sx={{width : "80%"}}
                label="Введите запись для добавления"
                variant='outlined'
                value={textField}
                onChange={(event) => textfield_event(event)}
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