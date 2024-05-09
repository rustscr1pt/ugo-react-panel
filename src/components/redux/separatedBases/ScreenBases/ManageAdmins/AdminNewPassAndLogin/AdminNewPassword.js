import {createSlice} from "@reduxjs/toolkit";

export const AdminNewPassword = createSlice({
    name : "AdminNewPassword",
    initialState : {
        value : ""
    },
    reducers : {
        setAdminNewPassword : (state, value) => {
            state.value = value.payload;
        }
    }
});
export const {setAdminNewPassword} = AdminNewPassword.actions;
export default AdminNewPassword.reducer;
