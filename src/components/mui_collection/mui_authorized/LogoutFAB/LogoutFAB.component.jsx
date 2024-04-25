import "./LogoutFAB.style.sass";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Fab} from "@mui/material";
const LogoutFAB = () => {
    function logout() {

    }

    return (
        <div className="LogoutFAB">
            <Fab color="success" aria-label="add" onClick={logout}>
                <ExitToAppIcon/>
            </Fab>
        </div>
    )
}

export default LogoutFAB;