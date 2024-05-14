import BackspaceIcon from '@mui/icons-material/Backspace';
import IconButton from "@mui/material/IconButton";
import {useDispatch} from "react-redux";
import {RemoveAdminAccount} from "./_functions/RemoveAdminAccount";

export const RemoveAdminButton = (props) => {
    const dispatch = useDispatch();

    return (
        <IconButton
            color="primary"
            aria-label="Удалить аккаунт администратора"
            onClick={() => RemoveAdminAccount(props.id, dispatch)}
        >
            <BackspaceIcon/>
        </IconButton>
    )
}
