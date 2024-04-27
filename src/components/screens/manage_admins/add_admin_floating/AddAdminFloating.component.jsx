import Paper from "@mui/material/Paper";
import "./AddAdminFloating.style.sass"

const AddAdminFloating = (props) => {
    if (props.displayAddAccount) {
        return (
            <div className="AddAdminFloating">
                <Paper/>
            </div>
        )
    }
}

export default AddAdminFloating;