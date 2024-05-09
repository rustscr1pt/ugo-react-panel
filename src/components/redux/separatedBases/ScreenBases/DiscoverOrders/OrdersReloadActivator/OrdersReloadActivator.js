import {createSlice} from "@reduxjs/toolkit";

export const OrdersReloadActivator = createSlice({
    name : "OrdersReloadActivator",
    initialState : {
        value : false
    },
    reducers : {
        setOrdersReloadActivatorValue : (state, value) => {
            state.value = value.payload;
        },
        toggleOrdersReloadActivator : (state) => {
            state.value = !state.value;
        }
    }
})

export const {setOrdersReloadActivatorValue, toggleOrdersReloadActivator} = OrdersReloadActivator.actions;
export default OrdersReloadActivator.reducer;
