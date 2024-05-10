import LockIcon from '@mui/icons-material/Lock';
import * as React from "react";
import "./AddPasswordField.style.sass"
import TextFieldAdminManagement from "../../../../unified_components/TextFieldAdminManagement";
import {useSelector} from "react-redux";
import {
    setAdminNewPassword
} from "../../../../redux/separatedBases/ScreenBases/ManageAdmins/AdminNewPassAndLogin/AdminNewPassword";

const AddPasswordField = () => {
    const password = useSelector((state) => state.adminNewPassword.value);

    return (
        <div className="AddPasswordField">
            <TextFieldAdminManagement
                label="Введите пароль пользователя"
                icon={<LockIcon/>}
                read={password}
                write={setAdminNewPassword}
            />
        </div>
    )
}
export default AddPasswordField;
