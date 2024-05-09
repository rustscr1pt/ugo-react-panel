import "./AdminTopPanelContainer.style.sass";
import FoldUnwrapAdminDiv from "./FoldUnwrapAdminDiv";
import ButtonGridPlacement from "../../../unified_components/ButtonGridPlacement";
import LogoDevIcon from '@mui/icons-material/LogoDev';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import {useDispatch} from "react-redux";
import {goToDiscover, goToLogs} from "../../../redux/separatedBases/ScreenPosition/ScreenPosition";
const AdminTopPanelContainer = () => {

    const dispatch = useDispatch();

    return (
        <div className="TopPanelContainer">
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
                icon={<LogoDevIcon/>}
                action={dispatch(goToLogs())}
                text={"Логи"}
            />
            <FoldUnwrapAdminDiv/>
        </div>
    )
}
export default AdminTopPanelContainer;
