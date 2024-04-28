import EditIcon from '@mui/icons-material/Edit';
import {Fab} from "@mui/material";
import "./AddAdminFAB.style.sass";
const AddAdminFAB = (props) => {
    function change_property() {
        props.setDisplayAddAccount((prev) => !prev);
    }

    return (
            <Fab color="primary" aria-label="edit" onClick={change_property}>
                <EditIcon />
            </Fab>
    )
}

export default AddAdminFAB;