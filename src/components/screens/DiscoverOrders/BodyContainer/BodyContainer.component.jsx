import "./BodyContainer.style.sass";
import * as React from "react";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PagePosition from "../../../../constants&addons/screen_enums.ts";
import {setNewScreenPosition} from "../../../redux/separatedBases/ScreenPosition/ScreenPosition";
import {DatePopper} from "./TopSide/DatePopper/DatePopper.component";
import {ChipsContainer} from "./TopSide/ChipsContainer/ChipsContainer.component";
import {TextFieldQuery} from "./BottomSide/TextFieldQuery/TextFieldQuery.component";
import {SortSelector} from "./BottomSide/SortSelector/SortSelector.component";
import {SearchButton} from "./BottomSide/SearchButton/SearchButton.component";
import {ButtonGridPlacement} from "../../../unified_components/ButtonGridPlacement/ButtonGridPlacement.component";

export const BodyContainer = () => {
    return (
        <div className="body-container-grid">
            <DatePopper/>
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
            <ChipsContainer/>
            <TextFieldQuery/>
            <SortSelector/>
            <SearchButton/>
        </div>
    )
}
