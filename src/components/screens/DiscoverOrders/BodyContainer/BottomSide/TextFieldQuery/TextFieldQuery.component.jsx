import "./TextFieldQuery.style.sass";
import {TextField} from "@mui/material";
import * as React from "react";
const TextFieldQuery = (props) => {
    return (
        <div className="TextFieldQuery">
            <TextField
                className="TextFieldQuery__field"
                label="Введите данные для поиска"
                variant='outlined'
                value={props.filteredQuery}
                onChange={(event) => props.setFilteredQuery(event.target.value)}
            />
        </div>
    )
}

export default TextFieldQuery;
