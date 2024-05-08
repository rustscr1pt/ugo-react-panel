import "./DateCloseButton.style.sass";
import {Button} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import clear_textfield_unified from "../../../../../../../constants&addons/tool_functions/clear_textfield_unified";
const DateCloseButton = (props) => {
    function close_and_reset() {
        props.setOpen((ps) => !ps);
        props.setPage(0);
        clear_textfield_unified(props.setFilteredQuery);
        props.setFilterCondition(false)
    }

    return (
        <div className="DataCloseButton">
            <Button
                sx={{width : "100%"}}
                variant="contained"
                color="error"
                onClick={close_and_reset}
            ><CloseIcon/></Button>
        </div>
    )
}

export default DateCloseButton;