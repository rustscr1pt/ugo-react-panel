import "./FabContainer.component.sass";
import AddAdminFAB from "./add_admin_fab";
import LogoutBlockFAB from "./logout_block_fab";
const FabContainer = (props) => {
    return (
        <div className="FabContainer">
            <LogoutBlockFAB setIsAuthorized={props.setIsAuthorized}/>
            <AddAdminFAB setDisplayAddAccount={props.setDisplayAddAccount}/>
        </div>
    )
}

export default FabContainer;