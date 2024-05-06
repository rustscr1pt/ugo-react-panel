import Box from "@mui/material/Box";
import TemplateSimpleButton from "../../../manage_admins/add_admin_wrapped/unified_components/generate_pass_add_button";

const ButtonGridPlacement = (props) => {
    return (
        <Box sx={{gridRow : props.rowArea, gridColumn : props.columnArea}}>
            <TemplateSimpleButton
                icon={props.icon}
                action={props.action}
                text={props.text}
            />
        </Box>
    )
}
export default ButtonGridPlacement;
