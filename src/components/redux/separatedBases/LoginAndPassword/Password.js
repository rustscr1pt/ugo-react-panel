import {createSlice} from "@reduxjs/toolkit";

export const Password = createSlice({
    name : "Password",
    initialState : {
        value : ""
    },
    reducers : {
        setPasswordField : (state, result) => {
            state.value = result.payload;
        }
    }
});
export const {setPasswordField} = Password.actions;
export default Password.reducer;
