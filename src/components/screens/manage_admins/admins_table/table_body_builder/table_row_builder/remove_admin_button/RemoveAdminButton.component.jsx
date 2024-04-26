import BackspaceIcon from '@mui/icons-material/Backspace';
import IconButton from "@mui/material/IconButton";

const RemoveAdminButton = () => {
    function remove_admin_account() {

    }

    return (
        <IconButton
            color="primary"
            aria-label="Удалить аккаунт администратора"
            onClick={remove_admin_account}
        >
            <BackspaceIcon/>
        </IconButton>
    )
}
export default RemoveAdminButton;