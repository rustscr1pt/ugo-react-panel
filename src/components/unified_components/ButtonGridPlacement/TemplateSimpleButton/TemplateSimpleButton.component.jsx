import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import TemplateSimpleButtonActionEnums from "../../../../constants&addons/TemplateSimpleButtonActionEnums.ts";
import {goToAdmins, goToDiscover, goToLogs} from "../../../redux/separatedBases/ScreenPosition/ScreenPosition";

const TemplateSimpleButton = (props) => {
    const dispatch = useDispatch();

    function response_to_click() {
        // eslint-disable-next-line default-case
        switch (props.action) {
            case TemplateSimpleButtonActionEnums.goToLogs:
                dispatch(goToLogs());
                break
            case TemplateSimpleButtonActionEnums.goToAdmins:
                dispatch(goToAdmins());
                break
            case TemplateSimpleButtonActionEnums.goToOrders:
                dispatch(goToDiscover());
        }
    }

    return (
        <Button
            sx={{
                width : "100%"
            }}
            variant="contained"
            endIcon={props.icon}
            onClick={response_to_click}
        >
            {props.text}
        </Button>
    )
}

export default TemplateSimpleButton;
