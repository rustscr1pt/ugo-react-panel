import {createSlice} from "@reduxjs/toolkit";

export const OrdersFilterCondition = createSlice({
    name : "OrdersFilterCondition",
    initialState : {
        value : false
    },
    reducers : {
        setOrdersFilterCondition : (state, value) => {
            state.value = value.payload;
        },
        toggleOrdersFilterCondition : (state) => {
            state.value = !state.value;
        }
    }
});

export const {setOrdersFilterCondition, toggleOrdersFilterCondition} = OrdersFilterCondition.actions;
export default OrdersFilterCondition.reducer;
