import {createSlice} from "@reduxjs/toolkit";

export const AdminsReloadActivator = createSlice({
    name : "AdminsReloadActivator",
    initialState : {
        value : false
    },
    reducers : {
        setAdminsReloadActivator : (state, condition) => {
            state.value = condition.payload;
        },
        toggleAdminsReloadActivator : (state) => {
            state.value = !state.value;
        }
    }
});

export const {setAdminsReloadActivator, toggleAdminsReloadActivator} = AdminsReloadActivator.actions;
export default AdminsReloadActivator.reducer
