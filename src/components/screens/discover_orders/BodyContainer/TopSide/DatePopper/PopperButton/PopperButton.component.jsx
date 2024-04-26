import * as React from "react";
import {Button} from "@mui/material";
import SortIcon from '@mui/icons-material/Sort';

const PopperButton = (props) => {
    return (
        <Button
            sx={{width : "100%"}}
            aria-describedby={props.id}
            variant="contained"
            endIcon={<SortIcon/>}
            onClick={props.handleClick}
        >
        Календарь
        </Button>
    )
}

export default PopperButton;