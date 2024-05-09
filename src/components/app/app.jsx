import {useEffect, useState} from "react";
import Auth from "../auth";
import BlackHeader from "../black_header"
import route_fillers from "../../constants&addons/route_fillers";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Screens from "../screens";
import {useDispatch, useSelector} from "react-redux";
import {setAuthValue} from "../redux/separatedBases/AuthAndAlert/Auth";
import {setAlertActivity} from "../redux/separatedBases/AuthAndAlert/Alert";


const App = () => {
    const auth = useSelector((state) => state.auth.value);

    const dispatch = useDispatch();

    // Check sessionStorage for token. If it's detected - make a check + redirect and skip login screen
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
                        dispatch(setAlertActivity(true, json.message))
                    }
                })
                .catch(function(err) {
                    dispatch(setAlertActivity(true, err))
                })
        }
    }, []);


    if (!auth) {
        return (
            <div className='app_flex_centered_vertical'>
                <BlackHeader/>
                <Auth/>
            </div>
        )
    }
    else {
        return (
            <div className='app_flex_centered_vertical'>
                <BlackHeader/>
                <Screens/>
            </div>
        )
    }
}

export default App;
