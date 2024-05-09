import {createSlice} from "@reduxjs/toolkit";

export const AdminNewLogin = createSlice({
    name : "AdminNewLogin",
    initialState : {
        value : ""
    },
    reducers : {
        setAdminNewLogin : (state, value) => {
            state.value = value.payload;
        }
    }
});
export const {setAdminNewLogin} = AdminNewLogin.actions;
export default AdminNewLogin.reducer;
