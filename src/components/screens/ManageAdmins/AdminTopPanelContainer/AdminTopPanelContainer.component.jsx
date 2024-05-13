import "./AdminTopPanelContainer.style.sass";
import ButtonGridPlacement from "../../../unified_components/ButtonGridPlacement";
import LogoDevIcon from '@mui/icons-material/LogoDev';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import PagePosition from "../../../../constants&addons/screen_enums.ts";
import {setNewScreenPosition} from "../../../redux/separatedBases/ScreenPosition/ScreenPosition";
import {FoldUnwrapAdminDiv} from "./FoldUnwrapAdminDiv/FoldUnwrapAdminDiv.component";

export const AdminTopPanelContainer = () => {

    return (
        <div className="TopPanelContainer">
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
                icon={<LogoDevIcon/>}
                action={setNewScreenPosition(PagePosition.LogsBrowser)}
                text={"Логи"}
            />
            <FoldUnwrapAdminDiv/>
        </div>
    )
}
