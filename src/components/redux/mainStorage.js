import {configureStore} from "@reduxjs/toolkit";
import ScreenPosition from "./separatedBases/ScreenPosition/ScreenPosition";
import Auth from "./separatedBases/AuthAndAlert/Auth";
import Alert from "./separatedBases/AuthAndAlert/Alert";

export default configureStore({
    reducer : {
        screenPosition : ScreenPosition,
        auth : Auth,
        alert : Alert
    }
});
