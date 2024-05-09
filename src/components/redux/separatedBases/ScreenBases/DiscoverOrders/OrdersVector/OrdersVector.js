import {createSlice} from "@reduxjs/toolkit";

export const OrdersVector = createSlice({
    name : "OrdersVector",
    initialState : {
        value : []
    },
    reducers : {
        setOrdersVector : (state, value) => {
            state.value = value.payload;
        }
    }
});

export const {setOrdersVector} = OrdersVector.actions;
export default OrdersVector.reducer;
