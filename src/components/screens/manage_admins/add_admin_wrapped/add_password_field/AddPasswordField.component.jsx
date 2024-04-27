import LockIcon from '@mui/icons-material/Lock';
import * as React from "react";
import "./AddPasswordField.style.sass"
import TextfieldAdminPassword from "../unified_components/textfield_admin_password";

const AddPasswordField = (props) => {
    return (
        <div className="AddPasswordField">
            <TextfieldAdminPassword
                label="Введите пароль пользователя"
                icon={<LockIcon/>}
                read={props.newPassword}
                write={props.setNewPassword}
            />
        </div>
    )
}
export default AddPasswordField;