import {createSlice} from "@reduxjs/toolkit";

export const AdminNewLogin = createSlice({
    name : "AdminNewLogin",
    initialState : {
        value : ""
    },
    reducers : {
        setAdminNewLogin : (state, value) => {
            state.value = value.payload;
        },
        resetAdminNewLogin : (state) => {
            state.value = ""
        }
    }
});
export const {setAdminNewLogin, resetAdminNewLogin} = AdminNewLogin.actions;
export default AdminNewLogin.reducer;
