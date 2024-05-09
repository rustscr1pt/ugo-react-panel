import {createSlice} from "@reduxjs/toolkit";

export const OrdersCurrentPage = createSlice({
    name : "OrdersCurrentPage",
    initialState : {
        value : 0
    },
    reducers : {
        setOrdersCurrentPage : (state, value) => {
            state.value = value.payload;
        }
    }
});
export const {setOrdersCurrentPage} = OrdersCurrentPage.actions;
export default OrdersCurrentPage.reducer
