import {createSlice} from "@reduxjs/toolkit";

export const OrdersFilterType = createSlice({
    name : "OrdersFilterType",
    initialState : {
        value : ""
    },
    reducers : {
        setOrdersFilterType : (state, value) => {
            state.value = value.payload;
        },
        dropOrdersFilterType : (state) => {
            state.value = ""
        }
    }
});
export const {setOrdersFilterType, dropOrdersFilterType} = OrdersFilterType.actions;
export default OrdersFilterType.reducer;
