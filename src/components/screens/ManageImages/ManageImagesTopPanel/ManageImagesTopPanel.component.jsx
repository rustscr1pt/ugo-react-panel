import './ManageImagesTopPanel.style.sass'
import {ButtonGridPlacement} from "../../../unified_components/ButtonGridPlacement/ButtonGridPlacement.component";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import {setNewScreenPosition} from "../../../redux/separatedBases/ScreenPosition/ScreenPosition";
import PagePosition from "../../../../constants&addons/screen_enums";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import LogoDevIcon from "@mui/icons-material/LogoDev";

export const ManageImagesTopPanel = () => {
    return (
        <div className='ManageImagesTopPanel'>
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
                columnArea={"16 / 22"}
                icon={<LogoDevIcon/>}
                action={setNewScreenPosition(PagePosition.LogsBrowser)}
                text={"Логи"}
            />
        </div>
    )
}