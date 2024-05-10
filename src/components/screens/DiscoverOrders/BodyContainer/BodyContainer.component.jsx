import "./BodyContainer.style.sass";
import SortSelector from "./BottomSide/SortSelector";
import SearchButton from "./BottomSide/SearchButton";
import * as React from "react";
import ChipsContainer from "./TopSide/ChipsContainer";
import DatePopper from "./TopSide/DatePopper";
import TextFieldQuery from "./BottomSide/TextFieldQuery";
import ButtonGridPlacement from "../../../unified_components/ButtonGridPlacement";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import {useDispatch} from "react-redux";
import {goToAdmins, goToLogs} from "../../../redux/separatedBases/ScreenPosition/ScreenPosition";
const BodyContainer = () => {

    const dispatch = useDispatch();

    return (
        <div className="body-container-grid">
            <DatePopper/>
            <ButtonGridPlacement
                rowArea = {"1 / 1"}
                columnArea={"9 / 15"}
                icon={<SupervisorAccountIcon/>}
                action={dispatch(goToAdmins)}
                text={"Пользователи"}
            />
            <ButtonGridPlacement
                rowArea = {"1 / 1"}
                columnArea={"16 / 22"}
                icon={<LogoDevIcon/>}
                action={dispatch(goToLogs)}
                text={"Логи"}
            />
            <ChipsContainer/>
            <TextFieldQuery/>
            <SortSelector/>
            <SearchButton/>
        </div>
    )
}

export default BodyContainer;
