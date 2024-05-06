import "./LogsBrowser.style.sass"
import LogoutFAB from "../discover_orders/LogoutFAB";
const LogsBrowser = (props) => {
    return (
        <div className="LogsBrowserDiv">
            <LogoutFAB setIsAuthorized={props.setIsAuthorized}/>
        </div>
    )
}
export default LogsBrowser;
