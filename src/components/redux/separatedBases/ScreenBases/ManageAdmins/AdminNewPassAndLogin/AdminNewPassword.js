import {createSlice} from "@reduxjs/toolkit";

export const AdminNewPassword = createSlice({
    name : "AdminNewPassword",
    initialState : {
        value : ""
    },
    reducers : {
        setAdminNewPassword : (state, value) => {
            state.value = value.payload;
        },
        resetAdminNewPassword : (state) => {
            state.value = ""
        }
    }
});
export const {setAdminNewPassword, resetAdminNewPassword} = AdminNewPassword.actions;
export default AdminNewPassword.reducer;
