import "./body-container.style.sass";
import SortSelector from "./BottomSide/sort-selector";
import SearchButton from "./BottomSide/search-button";
import * as React from "react";
import ChipsContainer from "./TopSide/ChipsContainer";
import DatePopper from "./TopSide/DatePopper";
import GoToAdminButton from "./TopSide/DatePopper/GoToAdminButton";
import TextFieldQuery from "./BottomSide/text-field-query";
const BodyContainer = (props) => {
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