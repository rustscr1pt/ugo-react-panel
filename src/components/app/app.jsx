import {useEffect, useState} from "react";
import Auth from "../auth";
import BlackHeader from "../black_header";
import MuiAuthorized from "../mui_collection/mui_authorized";
import BodyContainer from "../mui_top_panel/body-container";

const App = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [showAlert, setShowAlert] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/login/stealth", {
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
                    setIsAuthorized(true)
                }
                else {
                    setShowAlert([{
                        condition : true,
                        text : `${json.message}`,
                        severity : "error"
                    }])
                }
            })
            .catch(function(err) {
                setShowAlert([{
                    condition : true,
                    text : `${err}`,
                    severity : "error"
                }])
            })
    }, []);


    if (!isAuthorized) {
        return (
            <div className='app_flex_centered_vertical'>
                <BlackHeader/>
                <Auth showAlert={showAlert} setShowAlert={setShowAlert} setIsAuthorized={setIsAuthorized}/>
            </div>
        )
    }
    else {
        return (
            <div className='app_flex_centered_vertical'>
                <BlackHeader/>
                <MuiAuthorized/>
            </div>
        )
    }
}

export default App;