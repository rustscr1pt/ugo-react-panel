import "./FabContainer.component.sass";
import LogoutFAB from "../../discover_orders/LogoutFAB";
import AddAdminFAB from "../add_admin_fab";
const FabContainer = (props) => {
    return (
        <div className="FabContainer">
            <LogoutFAB/>
            <AddAdminFAB/>
        </div>
    )
}

export default FabContainer;