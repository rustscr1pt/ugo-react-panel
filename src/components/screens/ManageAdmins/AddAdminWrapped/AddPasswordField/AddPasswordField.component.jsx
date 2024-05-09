import LockIcon from '@mui/icons-material/Lock';
import * as React from "react";
import "./AddPasswordField.style.sass"
import TextFieldAdminManagement from "../../../../unified_components/TextFieldAdminManagement";
import {useDispatch, useSelector} from "react-redux";
import {setPasswordField} from "../../../../redux/separatedBases/LoginAndPassword/Password";

const AddPasswordField = () => {
    const password = useSelector((state) => state.adminNewPassword.value);
    const dispatch = useDispatch();

    return (
        <div className="AddPasswordField">
            <TextFieldAdminManagement
                label="Введите пароль пользователя"
                icon={<LockIcon/>}
                read={password}
                write={dispatch(setPasswordField)}
            />
        </div>
    )
}
export default AddPasswordField;
