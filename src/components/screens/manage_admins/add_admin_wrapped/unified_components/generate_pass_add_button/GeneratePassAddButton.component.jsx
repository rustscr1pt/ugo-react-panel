import {Button} from "@mui/material";

const GeneratePassAddButton = (props) => {
    return (
        <Button
            sx={{
                width : "100%"
            }}
            variant="contained"
            endIcon={props.icon}
            onClick={props.action}
        >
            {props.text}
        </Button>
    )
}

export default GeneratePassAddButton;