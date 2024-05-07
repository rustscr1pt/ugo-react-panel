import LockIcon from '@mui/icons-material/Lock';
import * as React from "react";
import "./AddPasswordField.style.sass"
import TextFieldAdminManagement from "../../../../unified_components/TextFieldAdminManagement";

const AddPasswordField = (props) => {
    return (
        <div className="AddPasswordField">
            <TextFieldAdminManagement
                label="Введите пароль пользователя"
                icon={<LockIcon/>}
                read={props.newPassword}
                write={props.setNewPassword}
            />
        </div>
    )
}
export default AddPasswordField;
