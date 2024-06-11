import route_fillers from "../../../constants&addons/route_fillers";
import {setAuthValue} from "../../redux/separatedBases/AuthAndAlert/Auth";
import {setAlertActivity} from "../../redux/separatedBases/AuthAndAlert/Alert";


// Login using the data from the textfields
export const HandleLoginAttempt = (login : string, password : string, dispatch : any) : void => {

    fetch(`${route_fillers.url}/api/login/attempt`, {
        method : "POST",
        body : JSON.stringify({
            "login" : `${login}`,
            "password" : `${password}`
        }),
        headers : {
            "Content-Type" : "application/json"
        }
    })
        .then((reply) => reply.json())
        .then((json) => {
            if (json.is_succeed) {
                sessionStorage.setItem("ugo-token", json.message);
                dispatch(setAuthValue(true));
            }
            else {
                console.log(json.message);
                dispatch(setAlertActivity({
                    condition : true,
                    text : `${json.message}`
                }))
            }
        })
        .catch(function(err) {
            console.log(err);
            dispatch(setAlertActivity({
                condition : true,
                text : `${err}`
            }))
        })
}