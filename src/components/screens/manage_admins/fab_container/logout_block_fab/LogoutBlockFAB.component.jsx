import {Fab} from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const LogoutBlockFAB = (props) => {
    function logout() {
        props.setIsAuthorized(false);
        sessionStorage.clear();
    }

    return (
            <Fab color="info" aria-label="add" onClick={logout}>
                <ExitToAppIcon/>
            </Fab>
    )
}
export default LogoutBlockFAB;