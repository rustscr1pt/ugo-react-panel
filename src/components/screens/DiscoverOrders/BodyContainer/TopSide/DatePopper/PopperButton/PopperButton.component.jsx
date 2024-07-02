import * as React from "react";
import {Button} from "@mui/material";
import SortIcon from '@mui/icons-material/Sort';

export const PopperButton = (props) => {
    return (
        <Button
            sx={{
                width : "100%",
                fontSize : "1vw"
            }}
            aria-describedby={props.id}
            variant="contained"
            endIcon={<SortIcon/>}
            onClick={props.handleClick}
        >
        Календарь
        </Button>
    )
}