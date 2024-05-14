import {setAuthValue} from "../../../../redux/separatedBases/AuthAndAlert/Auth";

export const LogOut = (dispatch) => {
    dispatch(setAuthValue(false));
    sessionStorage.clear();
}