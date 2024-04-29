import {Fab} from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const LogoutBlockFAB = (props) => {
    function logout() {
        props.setIsAuthorized(false);
        sessionStorage.clear();
    }

    return (
            <div>
                <Fab color="info" aria-label="add" onClick={logout}>
                    <ExitToAppIcon/>
                </Fab>
            </div>
    )
}
export default LogoutBlockFAB;