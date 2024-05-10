import {createSlice} from "@reduxjs/toolkit";

export const Auth = createSlice( {
    name : "Auth",
    initialState : {
        value : false
    },
    reducers : {
        toggleAuthValue : (state) => {
            state.value = !state.value;
        },
        setAuthValue : (state, value) => {
            state.value = value.payload
        }
    }
});

export const {toggleAuthValue, setAuthValue} = Auth.actions;
export default Auth.reducer;
