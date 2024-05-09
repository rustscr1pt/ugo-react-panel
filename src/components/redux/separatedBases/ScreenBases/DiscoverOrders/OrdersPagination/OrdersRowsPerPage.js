import {createSlice} from "@reduxjs/toolkit";

export const OrdersRowsPerPage = createSlice({
    name : "OrdersRowsPerPage",
    initialState : {
        value : 10
    },
    reducers : {
        setOrdersRowsPerPage : (state, value) => {
            state.value = value.payload;
        }
    }
});
export const {setOrdersRowsPerPage} = OrdersRowsPerPage.actions;
export default OrdersRowsPerPage.reducer
