import {createSlice} from "@reduxjs/toolkit";

export const AdminsVector = createSlice({
    name : "AdminsVector",
    initialState : {
        value : []
    },
    reducers : {
        setAdminsVector : (state, object) => {
            state.value = object.payload;
        }
    }
})

export const {setAdminsVector} = AdminsVector.actions;
export default AdminsVector.reducer;
