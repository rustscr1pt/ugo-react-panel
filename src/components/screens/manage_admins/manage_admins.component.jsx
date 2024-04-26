import Box from "@mui/material/Box";
import {useState} from "react";
import LogoutFAB from "../discover_orders/LogoutFAB";

const ManageAdmins = (props) => {
    const [reloadActivator, setReloadActivator] = useState(false);

    return (
        <Box>
            <LogoutFAB setIsAuthorized={props.setIsAuthorized}/>
        </Box>
    )
}

export default ManageAdmins;