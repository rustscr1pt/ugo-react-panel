import "./AdminTopPanelContainer.style.sass";
import FoldUnwrapAdminDiv from "./FoldUnwrapAdminDiv";
import ButtonGridPlacement from "../../../unified_components/ButtonGridPlacement";
import LogoDevIcon from '@mui/icons-material/LogoDev';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import PagePosition from "../../../../constants&addons/screen_enums.ts";
const AdminTopPanelContainer = (props) => {

    function go_to_logs() : void {
        props.setPagePosition(PagePosition.LogsBrowser);
    }

    function go_to_orders() : void {
        props.setPagePosition(PagePosition.Discover);
    }

    return (
        <div className="TopPanelContainer">
            <ButtonGridPlacement
                rowArea = {"1 / 1"}
                columnArea={"2 / 8"}
                icon={<BorderAllIcon/>}
                action={go_to_orders}
                text={"Заказы"}
            />
            <ButtonGridPlacement
                rowArea = {"1 / 1"}
                columnArea={"9 / 15"}
                icon={<LogoDevIcon/>}
                action={go_to_logs}
                text={"Логи"}
            />
            <FoldUnwrapAdminDiv
                setDisplayAddAccount={props.setDisplayAddAccount}
                displayAddAccount={props.displayAddAccount}
            />
        </div>
    )
}
export default AdminTopPanelContainer;
