import "./body-container.style.sass";
import SortSelector from "./BottomSide/sort-selector";
import SearchButton from "./BottomSide/search-button";
import * as React from "react";
import ChipsContainer from "./TopSide/ChipsContainer";
import DatePopper from "./TopSide/DatePopper";
import GoToAdminButton from "./TopSide/DatePopper/GoToAdminButton";
import TextFieldQuery from "./BottomSide/text-field-query";
import ButtonGridPlacement from "../../../unified_components/ButtonGridPlacement";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import PagePosition from "../../../../constants&addons/screen_enums.ts";
const BodyContainer = (props) => {

    function go_to_logs() : void {
        props.setPagePosition(PagePosition.LogsBrowser)
    }

    return (
        <div className="body-container-grid">
            <DatePopper
                setPage={props.setPage}
                setFilterType={props.setFilterType}
                setFilteredQuery={props.setFilteredQuery}
                setFilterCondition={props.setFilterCondition}
            />
            <GoToAdminButton
                setPagePosition={props.setPagePosition}
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
