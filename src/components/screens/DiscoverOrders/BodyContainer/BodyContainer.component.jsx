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
import PagePosition from "../../../../constants&addons/screen_enums.ts";
const BodyContainer = (props) => {

    function go_to_logs() : void {
        props.setPagePosition(PagePosition.LogsBrowser)
    }

    function go_to_admins() : void {
        props.setPagePosition(PagePosition.AdminManagement)
    }

    return (
        <div className="body-container-grid">
            <DatePopper
                setPage={props.setPage}
                setFilterType={props.setFilterType}
                setFilteredQuery={props.setFilteredQuery}
                setFilterCondition={props.setFilterCondition}
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
                columnArea={"16 / 22"}
                icon={<LogoDevIcon/>}
                action={go_to_logs}
                text={"Логи"}
            />
            <ChipsContainer filterCondition={props.filterCondition}/>
            <TextFieldQuery
                filteredQuery={props.filteredQuery}
                setFilteredQuery={props.setFilteredQuery}
            />
            <SortSelector
                filterType={props.filterType}
                setFilterType={props.setFilterType}
            />
            <SearchButton
                setPage={props.setPage}
                filterCondition={props.filterCondition}
                setFilterCondition={props.setFilterCondition}
                setFilteredQuery={props.setFilteredQuery}
            />
        </div>
    )
}

export default BodyContainer;
