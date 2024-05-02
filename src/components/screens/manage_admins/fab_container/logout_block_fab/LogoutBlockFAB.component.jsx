import {Fab} from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import "./LogoutBlockFAB.style.sass"

const LogoutBlockFAB = (props) => {
    function logout() {
        props.setIsAuthorized(false);
        sessionStorage.clear();
    }

    return (
            <div className="LogoutBlockFAB">
                <Fab color="info" aria-label="add" onClick={logout}>
                    <ExitToAppIcon/>
                </Fab>
            </div>
    )
}
export default LogoutBlockFAB;