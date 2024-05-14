import {useEffect} from "react";
import route_fillers from "../../../../constants&addons/route_fillers";
import {setAdminsVector} from "../../../redux/separatedBases/ScreenBases/ManageAdmins/AdminsVector/AdminsVector";

// Fetch admins from db and reload if it's needed.
export const FetchAdminsAndReload = (adminsReloadActivator, dispatch) => {
    useEffect(() => {
        fetch(`${route_fillers.url}/api/admins/fetch`, {
            method : "POST",
            body : JSON.stringify({
                token : `${sessionStorage.getItem("ugo-token")}`
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then((reply) => reply.json())
            .then((json) => {
                if (json.is_succeed) {
                    console.log(json);
                    dispatch(setAdminsVector(json.reply));
                }
                else {
                    console.log(json);
                }
            })
            .catch(function(err) {
                console.log(err);
            })
    }, [adminsReloadActivator])
}