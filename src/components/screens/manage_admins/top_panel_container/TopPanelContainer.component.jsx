import "./TopPanelContainer.style.sass";
import ChangeToOrdersScreenDiv from "./change_to_orders_screen_div";
const TopPanelContainer = (props) => {
    return (
        <div className="TopPanelContainer">
            <ChangeToOrdersScreenDiv setPagePosition={props.setPagePosition}/>
        </div>
    )
}
export default TopPanelContainer;