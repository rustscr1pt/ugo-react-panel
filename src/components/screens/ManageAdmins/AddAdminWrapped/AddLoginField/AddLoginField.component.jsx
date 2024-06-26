import "./AddLoginField.style.sass";
import * as React from 'react';
import AccountCircle from "@mui/icons-material/AccountCircle";
import {useSelector} from "react-redux";
import {
    setAdminNewLogin
} from "../../../../redux/separatedBases/ScreenBases/ManageAdmins/AdminNewPassAndLogin/AdminNewLogin";
import {
    TextFieldAdminManagement
} from "../../../../unified_components/TextFieldAdminManagement/TextFieldAdminManagement.component";

export const AddLoginField = () => {
    const user = useSelector((state) => state.adminNewLogin.value);
    return (
        <div className="AddLoginField">
            <TextFieldAdminManagement
                label="Введите логин пользователя"
                icon={<AccountCircle/>}
                read={user}
                write={setAdminNewLogin}
            />
        </div>
    )
}
