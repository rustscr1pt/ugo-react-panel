import "./AddLoginField.style.sass";
import * as React from 'react';
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextFieldAdminManagement from "../../../../unified_components/TextFieldAdminManagement";
import {useDispatch, useSelector} from "react-redux";
import {
    setAdminNewLogin
} from "../../../../redux/separatedBases/ScreenBases/ManageAdmins/AdminNewPassAndLogin/AdminNewLogin";

const AddLoginField = (props) => {
    const user = useSelector((state) => state.adminNewLogin.value);
    const dispatch = useDispatch();
    return (
        <div className="AddLoginField">
            <TextFieldAdminManagement
                label="Введите логин пользователя"
                icon={<AccountCircle/>}
                read={user}
                write={dispatch(setAdminNewLogin)}
            />
        </div>
    )
}
export default AddLoginField;
