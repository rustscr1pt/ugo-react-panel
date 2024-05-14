import "./DateCloseButton.style.sass";
import {Button} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch} from "react-redux";
import {CloseAndReset} from "./_functions/CloseAndReset";
export const DateCloseButton = (props) => {
    const dispatch = useDispatch();

    return (
        <div className="DataCloseButton">
            <Button
                sx={{width : "100%"}}
                variant="contained"
                color="error"
                onClick={() => CloseAndReset(props.setOpen, dispatch)}
            >
                <CloseIcon/>
            </Button>
        </div>
    )
}
