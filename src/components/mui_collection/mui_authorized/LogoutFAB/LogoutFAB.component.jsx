import "./LogoutFAB.style.sass";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Fab} from "@mui/material";
const LogoutFAB = (props) => {
    function logout() {
        props.setIsAuthorized = false;
    }

    return (
        <div className="LogoutFAB">
            <Fab color="info" aria-label="add" onClick={logout}>
                <ExitToAppIcon/>
            </Fab>
        </div>
    )
}

export default LogoutFAB;