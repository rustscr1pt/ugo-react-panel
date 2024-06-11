import {useEffect} from "react";
import route_fillers from "../../../constants&addons/route_fillers";
import {setAuthValue} from "../../redux/separatedBases/AuthAndAlert/Auth";
import {setAlertActivity} from "../../redux/separatedBases/AuthAndAlert/Alert";
import {useDispatch} from "react-redux";

export const CheckAndAuth = () : void => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (sessionStorage.getItem("ugo-token") !== null) {
            console.log(`Active token : ${sessionStorage.getItem("ugo-token")}`);
            fetch(`${route_fillers.url}/api/login/stealth`, {
                method : "POST",
                body : JSON.stringify({
                    token : sessionStorage.getItem("ugo-token")
                }),
                headers : {
                    "Content-Type" : "application/json",
                }
            })
                .then((response) => response.json())
                .then((json) => {
                    if (json.is_succeed) {
                        dispatch(setAuthValue(true))
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
    }, []);
}