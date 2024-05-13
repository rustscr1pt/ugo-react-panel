import "./AddAccountDiv.style.sass"
import CreateIcon from '@mui/icons-material/Create';
import TemplateSimpleButton from "../../../../unified_components/ButtonGridPlacement/TemplateSimpleButton";
import route_fillers from "../../../../../constants&addons/route_fillers";
import {useDispatch, useSelector} from "react-redux";
import {resetAdminNewLogin} from "../../../../redux/separatedBases/ScreenBases/ManageAdmins/AdminNewPassAndLogin/AdminNewLogin";
import {resetAdminNewPassword} from "../../../../redux/separatedBases/ScreenBases/ManageAdmins/AdminNewPassAndLogin/AdminNewPassword";
import {setAuthValue} from "../../../../redux/separatedBases/AuthAndAlert/Auth";
import {toggleAdminsReloadActivator} from "../../../../redux/separatedBases/ScreenBases/ManageAdmins/AdminsReloadActivator/AdminsReloadActivator";
export const AddAccountDiv = () => {
    const dispatch = useDispatch();

    const newUser = useSelector((state) => state.adminNewLogin.value);
    const newPassword = useSelector((state) => state.adminNewPassword.value);


    function clear_textfield_after() {
        dispatch(resetAdminNewLogin());
        dispatch(resetAdminNewPassword());
    }

    function add_account_to_base() {
        fetch(`${route_fillers.url}/api/admins/add`, {
            method : "POST",
            body : JSON.stringify({
                login : `${newUser}`,
                password : `${newPassword}`,
                token : `${sessionStorage.getItem("ugo-token")}`
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then((response) => response.json())
            .then((json) => {
                if (!json.is_succeed && json.message === "expired token") {
                    dispatch(setAuthValue(false));
                    console.log("Your token has expired");
                }
                else if (!json.is_succeed) {
                    console.log(json.message);
                }
                else {
                    clear_textfield_after();
                    dispatch(toggleAdminsReloadActivator());
                }
            })
            .catch(function(err) {
                console.log(err);
            })
    }

    return (
        <div className="AddAccountDiv">
            <TemplateSimpleButton
                icon={<CreateIcon/>}
                action={add_account_to_base}
                text="добавить"
            />
        </div>
    )
}