import {Button} from "@mui/material";
import {useDispatch} from "react-redux";

export const TemplateSimpleButton = (props) => {

    const dispatch = useDispatch();

    return (
        <Button
            sx={{
                width : "100%"
            }}
            variant="contained"
            endIcon={props.icon}
            onClick={() => dispatch(props.action)}
        >
            {props.text}
        </Button>
    )
}
