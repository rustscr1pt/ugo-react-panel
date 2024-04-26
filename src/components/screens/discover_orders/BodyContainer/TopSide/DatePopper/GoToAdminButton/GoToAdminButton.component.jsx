import {Button} from "@mui/material";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import * as React from "react";
import './GoToAdminButton.style.sass';
import PagePosition from "../../../../../../../constants&addons/constants.ts";

const GoToAdminButton = (props) => {

    function change_screen_to_admin() {
        props.setPagePosition(PagePosition.AdminManagement)
    }

    return (
        <div className="GoToAdminButton">
            <Button
                sx={{width : "100%"}}
                variant="contained"
                endIcon={<SupervisorAccountIcon/>}
                onClick={change_screen_to_admin}
            >
                Пользователи
            </Button>
        </div>
    )
}

export default GoToAdminButton;