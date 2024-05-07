import "./LogsTopPanel.style.sass";
import ButtonGridPlacement from "../../../unified_components/ButtonGridPlacement";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PagePosition from "../../../../constants&addons/screen_enums.ts";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import CachedIcon from '@mui/icons-material/Cached';
const LogsTopPanel = (props) => {

    function go_to_orders() {
        props.setPagePosition(PagePosition.Discover);
    }

    function go_to_admins() {
        props.setPagePosition(PagePosition.AdminManagement);
    }

    function toggle_reload() {
        props.setReloadActivator((prev) => !prev);
    }

    return (
        <div className="LogsTopPanel">
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
                icon={<SupervisorAccountIcon/>}
                action={go_to_admins}
                text={"Пользователи"}
            />
            <ButtonGridPlacement
                rowArea = {"1 / 1"}
                columnArea={"34 / 40"}
                icon={<CachedIcon/>}
                action={toggle_reload}
                text={"Обновить"}
            />
        </div>
    )
}
export default LogsTopPanel;
