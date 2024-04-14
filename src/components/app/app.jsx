import {useEffect, useState} from "react";
import Auth from "../auth";
import BlackHeader from "../black_header";
import MuiAuthorized from "../mui_collection/mui_authorized";
import route_fillers from "../../constants/route_fillers";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const App = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [showAlert, setShowAlert] = useState([]);

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
        }
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