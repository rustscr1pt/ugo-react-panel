import "./body-container.style.sass";
import SortSelector from "./BottomSide/sort-selector";
import SearchButton from "./BottomSide/search-button";
import {TextField} from "@mui/material";
import * as React from "react";
import ChipsContainer from "./TopSide/ChipsContainer";
import DatePopper from "./TopSide/DatePopper";
const BodyContainer = (props) => {
    return (
        <div className="body-container-grid">
            <DatePopper
                setFilterType={props.setFilterType}
                setFilteredQuery={props.setFilteredQuery}
                setFilterCondition={props.setFilterCondition}
            />
            <ChipsContainer filterCondition={props.filterCondition}/>
            <TextField
                sx={{
                    gridColumn : "2 / 28",
                    gridRow : "2 / 2",
                    backgroundColor : "white"
                }}
                label="Введите данные для поиска"
                variant='outlined'
                value={props.filteredQuery}
                onChange={(event) => props.setFilteredQuery(event.target.value)}
            />
            <SortSelector
                filterType={props.filterType}
                setFilterType={props.setFilterType}
            />
            <SearchButton
                setPage={props.setPage}
                filterCondition={props.filterCondition}
                setFilterCondition={props.setFilterCondition}
            />
        </div>
    )
}

export default BodyContainer;