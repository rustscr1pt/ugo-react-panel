import {useState} from "react";
import Auth from "../auth";
import BlackHeader from "../black_header";
import MuiAuthorized from "../mui_collection/mui_authorized";

const App = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    if (!isAuthorized) {
        return (
            <div className='app_flex_centered_vertical'>
                <BlackHeader/>
                <Auth setIsAuthorized={setIsAuthorized}/>
            </div>
        )
    } else {
        return (
            <div className='app_flex_centered_vertical'>
                <BlackHeader/>
                <MuiAuthorized/>
            </div>
        )
    }
}

export default App;