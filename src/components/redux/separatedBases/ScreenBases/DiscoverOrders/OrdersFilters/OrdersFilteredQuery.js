import {createSlice} from "@reduxjs/toolkit";

export const OrdersFilteredQuery = createSlice({
    name : "OrdersFilteredQuery",
    initialState : {
        value : ""
    },
    reducers : {
        setOrdersFilteredQuery : (state, value) => {
            state.value = value.payload;
        },
        clearOrdersFilteredQuery : (state) => {
            state.value = ""
        }
    }
});
export const {setOrdersFilteredQuery, clearOrdersFilteredQuery} = OrdersFilteredQuery.actions;
export default OrdersFilteredQuery.reducer;
