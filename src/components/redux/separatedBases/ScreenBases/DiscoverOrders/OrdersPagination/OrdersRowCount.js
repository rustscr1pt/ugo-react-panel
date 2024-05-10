import {createSlice} from "@reduxjs/toolkit";

export const OrdersRowCount = createSlice({
    name : "OrdersRowCount",
    initialState : {
        value : 0
    },
    reducers : {
        setOrdersRowCount : (state, value) => {
            state.value = value.payload;
        }
    }
});
export const {setOrdersRowCount} = OrdersRowCount.actions;
export default OrdersRowCount.reducer
