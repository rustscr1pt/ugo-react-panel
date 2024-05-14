import route_fillers from "../../../../../../../../constants&addons/route_fillers";
import {
    toggleAdminsReloadActivator
} from "../../../../../../../redux/separatedBases/ScreenBases/ManageAdmins/AdminsReloadActivator/AdminsReloadActivator";

// Remove admin account from the list and in the db
export const RemoveAdminAccount = (id, dispatch) => {
    fetch(`${route_fillers.url}/api/admins/remove`, {
        method : "POST",
        body : JSON.stringify({
            id : `${id}`
        }),
        headers : {
            "Content-Type" : "application/json"
        }
    })
        .then((reply) => reply.json())
        .then((json) => {
            if (json.is_succeed) {
                dispatch(toggleAdminsReloadActivator());
            }
            else {
                console.log(json.message);
            }
        })
        .catch(function(err) {
            console.log(err)
        })
}