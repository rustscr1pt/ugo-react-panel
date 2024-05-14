import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import * as React from "react";
import {useDispatch} from "react-redux";

export const TextFieldAdminManagement = (props) => {

    const dispatch = useDispatch();

    return (
        <FormControl style={{width : "100%"}} variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
                {props.label}
            </InputLabel>
            <Input
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                        {props.icon}
                    </InputAdornment>
                }
                value={props.read}
                onChange={(event) => {
                    dispatch(props.write(event.target.value));
                    console.log(event.target.value);
                }}
            />
        </FormControl>
    )
}
