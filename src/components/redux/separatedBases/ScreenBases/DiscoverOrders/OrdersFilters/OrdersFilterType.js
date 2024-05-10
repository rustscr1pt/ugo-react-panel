import {createSlice} from "@reduxjs/toolkit";

export const OrdersFilterType = createSlice({
    name : "OrdersFilterType",
    initialState : {
        value : ""
    },
    reducers : {
        setOrdersFilterType : (state, value) => {
            state.value = value.payload;
        }
    }
});
export const {setOrdersFilterType} = OrdersFilterType.actions;
export default OrdersFilterType.reducer;
