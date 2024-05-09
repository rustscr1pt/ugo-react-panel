import {createSlice} from "@reduxjs/toolkit";
export const Login = createSlice({
    name : "Login",
    initialState : {
        value : ""
    },
    reducers : {
        setLoginField : (state, result) => {
            state.value = result.payload;
        }
    }
});
export const {setLoginField} = Login.actions;
export default Login.reducer;
