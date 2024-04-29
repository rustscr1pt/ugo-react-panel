import EditIcon from '@mui/icons-material/Edit';
import {Fab} from "@mui/material";
const AddAdminFAB = (props) => {
    function change_property() {
        props.setDisplayAddAccount((prev) => !prev);
    }

    return (
            <div>
                <Fab color="primary" aria-label="edit" onClick={change_property}>
                    <EditIcon />
                </Fab>
            </div>
    )
}

export default AddAdminFAB;