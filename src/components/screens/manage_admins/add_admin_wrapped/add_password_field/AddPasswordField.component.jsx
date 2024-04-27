import TextfieldAdminPassword from "../textfield_admin_password";
import LockIcon from '@mui/icons-material/Lock';
import * as React from "react";
import "./AddPasswordField.style.sass"

const AddPasswordField = () => {
    return (
        <div className="AddPasswordField">
            <TextfieldAdminPassword label="Введите пароль пользователя" icon={<LockIcon/>}/>
        </div>
    )
}
export default AddPasswordField;