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
import StorageIcon from '@mui/icons-material/Storage';
import {useSelector} from "react-redux";
import {toggleNewBase} from "../../../redux/separatedBases/SelectedBase/SelectedBase";

export const BodyContainer = () => {

    const sourceType = useSelector((state) => state.selectedBase.value);

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
            <ButtonGridPlacement
                rowArea = {"1 / 1"}
                columnArea={"23 / 29"}
                icon={<StorageIcon/>}
                action={toggleNewBase()}
                text={sourceType === 'ugo-vape' ? 'Ugo-Vape' : 'Walgreen'}
            />
            <ChipsContainer/>
            <TextFieldQuery/>
            <SortSelector/>
            <SearchButton/>
        </div>
    )
}
