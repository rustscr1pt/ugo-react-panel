import "./TopPanelContainer.style.sass";
import ChangeToOrdersScreenDiv from "./change_to_orders_screen_div";
import FoldUnwrapAdminDiv from "./fold_unwrap_admin_div";
const TopPanelContainer = (props) => {
    return (
        <div className="TopPanelContainer">
            <ChangeToOrdersScreenDiv setPagePosition={props.setPagePosition}/>
            <FoldUnwrapAdminDiv
                setDisplayAddAccount={props.setDisplayAddAccount}
                displayAddAccount={props.displayAddAccount}
            />
        </div>
    )
}
export default TopPanelContainer;