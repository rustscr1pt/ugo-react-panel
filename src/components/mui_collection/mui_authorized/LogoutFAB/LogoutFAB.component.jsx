import "./LogoutFAB.style.sass";
import AddIcon from '@mui/icons-material/Add';
import {Fab} from "@mui/material";
const LogoutFAB = () => {
    return (
        <div className="LogoutFAB">
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </div>
    )
}

export default LogoutFAB;