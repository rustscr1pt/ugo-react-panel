import {createSlice} from "@reduxjs/toolkit";

export const OrdersFilteredQuery = createSlice({
    name : "OrdersFilteredQuery",
    initialState : {
        value : ""
    },
    reducers : {
        setOrdersFilteredQuery : (state, value) => {
            state.value = value.payload;
        }
    }
});
export const {setOrdersFilteredQuery} = OrdersFilteredQuery.actions;
export default OrdersFilteredQuery.reducer;
