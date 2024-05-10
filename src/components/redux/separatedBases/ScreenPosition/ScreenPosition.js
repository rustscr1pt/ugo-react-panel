import {createSlice} from "@reduxjs/toolkit";
import PagePosition from "../../../../constants&addons/screen_enums.ts";


export const ScreenPosition = createSlice({
    name : "ScreenPosition",
    initialState : {
        value : PagePosition.Discover
    },
    reducers : {
        setNewScreenPosition(state, value) {
            state.value = value.payload
        }
    }
});

export const {setNewScreenPosition} = ScreenPosition.actions;
export default ScreenPosition.reducer;
