import {
    resetAdminNewLogin
} from "../../../../../redux/separatedBases/ScreenBases/ManageAdmins/AdminNewPassAndLogin/AdminNewLogin";
import {
    resetAdminNewPassword
} from "../../../../../redux/separatedBases/ScreenBases/ManageAdmins/AdminNewPassAndLogin/AdminNewPassword";

export const ClearAdminTextFields = (dispatch) => {
    dispatch(resetAdminNewLogin());
    dispatch(resetAdminNewPassword());
}