import TemplateSimpleButton from "../../../../unified_components/ButtonGridPlacement/TemplateSimpleButton";
import PatternIcon from '@mui/icons-material/Pattern';
import "./GeneratePasswordDiv.style.sass";
import {generate} from "../../../../../wasm/pkg";
import {useDispatch} from "react-redux";
import {
    setAdminNewPassword
} from "../../../../redux/separatedBases/ScreenBases/ManageAdmins/AdminNewPassAndLogin/AdminNewPassword";

export const GeneratePasswordDiv = () => {
    const dispatch = useDispatch();
    function generate_password() {
        dispatch(setAdminNewPassword(generate(15, false, false)))
    }

    return (
        <div className="GeneratePasswordDiv">
            <TemplateSimpleButton
                icon={<PatternIcon/>}
                action={generate_password}
                text="сгенерировать"
            />
        </div>
    )
}
