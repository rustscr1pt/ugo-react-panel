import route_fillers from "../../../../../../constants&addons/route_fillers";
import {setAuthValue} from "../../../../../redux/separatedBases/AuthAndAlert/Auth";
import {
    toggleAdminsReloadActivator
} from "../../../../../redux/separatedBases/ScreenBases/ManageAdmins/AdminsReloadActivator/AdminsReloadActivator";
import {ClearAdminTextFields} from "./ClearAdminTextFields";

// Add admin login and password combination to the db
export const AddAccountToBase = (newUser, newPassword, dispatch) => {
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
                ClearAdminTextFields(dispatch)
                dispatch(toggleAdminsReloadActivator());
            }
        })
        .catch(function(err) {
            console.log(err);
        })
}