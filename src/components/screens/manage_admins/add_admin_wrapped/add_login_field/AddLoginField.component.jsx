import "./AddLoginField.style.sass";
import * as React from 'react';
import TextfieldAdminPassword from "../textfield_admin_password";
import AccountCircle from "@mui/icons-material/AccountCircle";

const AddLoginField = () => {
    return (
        <div className="AddLoginField">
            <TextfieldAdminPassword label="Введите логин пользователя" icon={<AccountCircle/>}/>
        </div>
    )
}
export default AddLoginField;