import {createSlice} from "@reduxjs/toolkit";

export const Auth = createSlice( {
    name : "Auth",
    initialState : {
        value : false
    },
    reducers : {
        toggleAuthValue : (state) => {
            state.value = !state.value;
        }
    }
});

export const {toggleAuthValue} = Auth.actions;
export default Auth.reducer;
