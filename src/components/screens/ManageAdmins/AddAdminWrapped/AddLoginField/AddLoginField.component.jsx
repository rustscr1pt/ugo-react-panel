import "./AddLoginField.style.sass";
import * as React from 'react';
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextFieldAdminManagement from "../../../../unified_components/TextFieldAdminManagement";

const AddLoginField = (props) => {
    return (
        <div className="AddLoginField">
            <TextFieldAdminManagement
                label="Введите логин пользователя"
                icon={<AccountCircle/>}
                read={props.newUser}
                write={props.setNewUser}
            />
        </div>
    )
}
export default AddLoginField;
