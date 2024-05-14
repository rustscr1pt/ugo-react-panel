import {setAsErrorLogsVector} from "../../../redux/separatedBases/ScreenBases/LogsBrowser/LogsVector/LogsVector";

// If error happens logs would be filled with object stating a message from console.
export const FillLogsInErrorCase = (message, dispatch) => {
    console.log(message);
    dispatch(setAsErrorLogsVector(message));
}