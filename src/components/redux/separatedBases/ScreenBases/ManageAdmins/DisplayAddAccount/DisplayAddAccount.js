import {createSlice} from "@reduxjs/toolkit";

export const DisplayAddAccount = createSlice({
    name : "DisplayAddAccount",
    initialState : {
        value : false
    },
    reducers : {
        toggleDisplayAddAccount : (state) => {
            state.value = !state.value;
        },
        setToValueDisplayAddAccount : (state, condition) => {
            state.value = condition.payload;
        }
    }
})

export const {toggleDisplayAddAccount, setToValueDisplayAddAccount} = DisplayAddAccount.actions;
export default DisplayAddAccount.reducer;
