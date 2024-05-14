import "./LogsTopPanel.style.sass";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BorderAllIcon from "@mui/icons-material/BorderAll";
import CachedIcon from '@mui/icons-material/Cached';
import {toggleLogsReloadActivator} from "../../../redux/separatedBases/ScreenBases/LogsBrowser/LogsReloadActivator/LogsReloadActivator";
import PagePosition from "../../../../constants&addons/screen_enums.ts";
import {setNewScreenPosition} from "../../../redux/separatedBases/ScreenPosition/ScreenPosition";
import {ButtonGridPlacement} from "../../../unified_components/ButtonGridPlacement/ButtonGridPlacement.component";
export const LogsTopPanel = () => {

    return (
        <div className="LogsTopPanel">
            <ButtonGridPlacement
                rowArea = {"1 / 1"}
                columnArea={"2 / 8"}
                icon={<BorderAllIcon/>}
                action={setNewScreenPosition(PagePosition.Discover)}
                text={"Заказы"}
            />
            <ButtonGridPlacement
                rowArea = {"1 / 1"}
                columnArea={"9 / 15"}
                icon={<SupervisorAccountIcon/>}
                action={setNewScreenPosition(PagePosition.AdminManagement)}
                text={"Пользователи"}
            />
            <ButtonGridPlacement
                rowArea = {"1 / 1"}
                columnArea={"34 / 40"}
                icon={<CachedIcon/>}
                action={toggleLogsReloadActivator()}
                text={"Обновить"}
            />
        </div>
    )
}
