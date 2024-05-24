import {createSlice} from "@reduxjs/toolkit";
import BasePosition from "../../../../constants&addons/selected_base_enums.ts";

export const SelectedBase = createSlice({
    name : "SelectedBase",
    initialState : {
        value : BasePosition.UgoVape
    },
    reducers : {
        setNewBase(state, value) {
            state.value = value.payload
        }
    }
});

export const {setNewBase} = SelectedBase.actions;
export default SelectedBase.reducer;