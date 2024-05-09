import {configureStore} from "@reduxjs/toolkit";
import screenPosition from "./separatedBases/screenPosition";

export default configureStore({
    reducer : {
        screenPosition : screenPosition
    }
});
