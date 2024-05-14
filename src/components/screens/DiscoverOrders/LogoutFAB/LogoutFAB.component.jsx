import "./LogoutFAB.style.sass";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Fab} from "@mui/material";
import {useDispatch} from "react-redux";
import {LogOut} from "./_functions/LogOut";
export const LogoutFAB = () => {
    const dispatch = useDispatch();

    return (
        <div className="LogoutFAB">
            <Fab color="info" aria-label="add" onClick={() => LogOut(dispatch)}>
                <ExitToAppIcon/>
            </Fab>
        </div>
    )
}
