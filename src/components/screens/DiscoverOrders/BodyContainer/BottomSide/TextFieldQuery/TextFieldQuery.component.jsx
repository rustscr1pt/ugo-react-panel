import "./TextFieldQuery.style.sass";
import {TextField} from "@mui/material";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    setOrdersFilteredQuery
} from "../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersFilters/OrdersFilteredQuery";
export const TextFieldQuery = () => {
    const filteredQuery = useSelector((state) => state.ordersFilteredQuery.value);
    const dispatch = useDispatch();

    return (
        <div className="TextFieldQuery">
            <TextField
                className="TextFieldQuery__field"
                label="Введите данные для поиска"
                variant='outlined'
                value={filteredQuery}
                onChange={(event) => dispatch(setOrdersFilteredQuery(event.target.value))}
            />
        </div>
    )
}

