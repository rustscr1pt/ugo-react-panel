import Box from "@mui/material/Box";
import {TemplateSimpleButton} from "./TemplateSimpleButton/TemplateSimpleButton.component";

export const ButtonGridPlacement = (props) => {
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
