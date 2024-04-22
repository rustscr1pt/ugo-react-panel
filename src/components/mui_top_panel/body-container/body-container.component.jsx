import "./body-container.style.sass";
import SortSelector from "../sort-selector";
import SearchButton from "../refresh-button";
import {TextField} from "@mui/material";
import * as React from "react";
const BodyContainer = (props) => {
    return (
        <div className="body-container-grid">
            <TextField
                sx={{
                    gridColumn : "2 / 28",
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
                filterCondition={props.filterCondition}
                setFilterCondition={props.setFilterCondition}
            />
        </div>
    )
}

export default BodyContainer;