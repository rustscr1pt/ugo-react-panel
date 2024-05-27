import {Button, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import * as React from "react";
import {useState} from "react";
import {SetTextField} from "./_functions/SetTextField";
import {AddNoteToOrder} from "./_functions/AddNoteToOrder";
import {useSelector} from "react-redux";

export const OrderTableAddNoteBox = (props) => {
    const [textField, setTextField] = useState("");
    const [fieldError, setFieldError] = useState(false);
    const sourceType = useSelector((state) => state.selectedBase.value);

    return (
        <Box sx={{display : 'flex', flexDirection: "row", justifyContent : "space-around", width : "100%"}}>
            <TextField
                error={fieldError}
                sx={{width : "82%"}}
                label="Введите запись для добавления"
                variant='outlined'
                value={textField}
                onChange={(event) => SetTextField(event, setTextField, setFieldError)}
            />
            <Button
                sx={{width : "13%"}}
                variant="contained"
                endIcon={<SendIcon />}
                onClick={() => AddNoteToOrder(textField, setFieldError, props.id, props.setNotes, setTextField, sourceType)}
            >
                Добавить
            </Button>
        </Box>
    )
}
