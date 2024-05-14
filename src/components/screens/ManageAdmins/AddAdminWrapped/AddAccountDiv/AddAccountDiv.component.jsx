import "./AddAccountDiv.style.sass"
import CreateIcon from '@mui/icons-material/Create';
import {useDispatch, useSelector} from "react-redux";
import {
    TemplateSimpleButton
} from "../../../../unified_components/ButtonGridPlacement/TemplateSimpleButton/TemplateSimpleButton.component";
import {AddAccountToBase} from "./_functions/AddAccountToBase";
export const AddAccountDiv = () => {
    const dispatch = useDispatch();

    const newUser = useSelector((state) => state.adminNewLogin.value);
    const newPassword = useSelector((state) => state.adminNewPassword.value);

    return (
        <div className="AddAccountDiv">
            <TemplateSimpleButton
                icon={<CreateIcon/>}
                action={() => AddAccountToBase(newUser, newPassword, dispatch)}
                text="добавить"
            />
        </div>
    )
}