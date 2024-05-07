import "./TopPanelContainer.style.sass";
import ChangeToOrdersScreenDiv from "./change_to_orders_screen_div";
import FoldUnwrapAdminDiv from "./fold_unwrap_admin_div";
import ButtonGridPlacement from "../../../unified_components/ButtonGridPlacement";
import LogoDevIcon from '@mui/icons-material/LogoDev';
import PagePosition from "../../../../constants&addons/screen_enums.ts";
const TopPanelContainer = (props) => {

    function go_to_logs() : void {
        props.setPagePosition(PagePosition.LogsBrowser);
    }

    return (
        <div className="TopPanelContainer">
            <ChangeToOrdersScreenDiv setPagePosition={props.setPagePosition}/>
            <FoldUnwrapAdminDiv
                setDisplayAddAccount={props.setDisplayAddAccount}
                displayAddAccount={props.displayAddAccount}
            />
            <ButtonGridPlacement
                rowArea = {"1 / 1"}
                columnArea={"9 / 15"}
                icon={<LogoDevIcon/>}
                action={go_to_logs}
                text={"Логи"}
            />
        </div>
    )
}
export default TopPanelContainer;
