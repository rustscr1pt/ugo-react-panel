import "./LogsTopPanel.style.sass";
import ButtonGridPlacement from "../../../unified_components/ButtonGridPlacement";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BorderAllIcon from "@mui/icons-material/BorderAll";
import CachedIcon from '@mui/icons-material/Cached';
import {useDispatch} from "react-redux";
import {goToAdmins, goToDiscover} from "../../../redux/separatedBases/ScreenPosition/ScreenPosition";
import {toggleLogsReloadActivator} from "../../../redux/separatedBases/ScreenBases/LogsBrowser/LogsReloadActivator/LogsReloadActivator";
const LogsTopPanel = () => {
    const dispatch = useDispatch();

    return (
        <div className="LogsTopPanel">
            <ButtonGridPlacement
                rowArea = {"1 / 1"}
                columnArea={"2 / 8"}
                icon={<BorderAllIcon/>}
                action={dispatch(goToDiscover())}
                text={"Заказы"}
            />
            <ButtonGridPlacement
                rowArea = {"1 / 1"}
                columnArea={"9 / 15"}
                icon={<SupervisorAccountIcon/>}
                action={dispatch(goToAdmins())}
                text={"Пользователи"}
            />
            <ButtonGridPlacement
                rowArea = {"1 / 1"}
                columnArea={"34 / 40"}
                icon={<CachedIcon/>}
                action={dispatch(toggleLogsReloadActivator())}
                text={"Обновить"}
            />
        </div>
    )
}
export default LogsTopPanel;
