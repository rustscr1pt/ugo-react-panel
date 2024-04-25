import "./DateCloseButton.style.sass";
import {Button} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
const DateCloseButton = () => {
    function close_and_reset() {

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