import "./LogoutFAB.style.sass";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Fab} from "@mui/material";
import {useDispatch} from "react-redux";
import {setAuthValue} from "../../../redux/separatedBases/AuthAndAlert/Auth";
const LogoutFAB = () => {
    const dispatch = useDispatch();

    function logout() {
        dispatch(setAuthValue(false));
        sessionStorage.clear();
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
