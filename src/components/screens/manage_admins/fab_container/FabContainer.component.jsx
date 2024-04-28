import "./FabContainer.component.sass";
import LogoutFAB from "../../discover_orders/LogoutFAB";
import AddAdminFAB from "../add_admin_fab";
const FabContainer = (props) => {
    return (
        <div className="FabContainer">
            <LogoutFAB setIsAuthorized={props.setIsAuthorized}/>
            <AddAdminFAB setDisplayAddAccount={props.setDisplayAddAccount}/>
        </div>
    )
}

export default FabContainer;