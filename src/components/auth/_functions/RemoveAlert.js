import {useEffect} from "react";
import {emptyAlertActivity} from "../../redux/separatedBases/AuthAndAlert/Alert";

// Remove alert in 5 secs after it was displayed
export const RemoveAlert = (alert, dispatch) => {

    useEffect(() => {
        setTimeout(function() {
            dispatch(emptyAlertActivity());
        }, 5000)
    }, [alert.length]);
}