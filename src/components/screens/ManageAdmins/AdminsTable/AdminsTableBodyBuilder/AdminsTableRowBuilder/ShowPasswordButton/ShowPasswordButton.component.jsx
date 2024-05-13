import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const ShowPasswordButton = (props) => {
    function change_password_visibility() {
        props.setPasswordVisibility((previous) => !previous);
    }

    return (
        <IconButton
            color="primary"
            aria-label="Показать скрытый пароль"
            onClick={change_password_visibility}
        >
            <VisibilityIcon/>
        </IconButton>
    )
}