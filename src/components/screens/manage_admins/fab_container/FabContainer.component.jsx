import "./FabContainer.component.sass";
import AddAdminFAB from "./add_admin_fab";
import LogoutBlockFAB from "./logout_block_fab";
const FabContainer = (props) => {
    return (
        <div className="FabContainer">
            <AddAdminFAB setDisplayAddAccount={props.setDisplayAddAccount}/>
            <LogoutBlockFAB setIsAuthorized={props.setIsAuthorized}/>
        </div>
    )
}

export default FabContainer;