import "./AddLoginField.style.sass";
import * as React from 'react';
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextfieldAdminPassword from "../unified_components/textfield_admin_password";

const AddLoginField = (props) => {
    return (
        <div className="AddLoginField">
            <TextfieldAdminPassword
                label="Введите логин пользователя"
                icon={<AccountCircle/>}
                read={props.newUser}
                write={props.setNewUser}
            />
        </div>
    )
}
export default AddLoginField;