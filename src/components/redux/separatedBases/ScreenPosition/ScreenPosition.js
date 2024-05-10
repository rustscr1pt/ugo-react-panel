import {createSlice} from "@reduxjs/toolkit";
import PagePosition from "../../../../constants&addons/screen_enums.ts";


export const ScreenPosition = createSlice({
    name : "ScreenPosition",
    initialState : {
        value : PagePosition.Discover
    },
    reducers : {
        goToDiscover : (state) => {
            state.value = PagePosition.Discover;
        },
        goToAdmins : (state) => {
            state.value = PagePosition.AdminManagement;
        },
        goToLogs : (state) => {
            state.value = PagePosition.LogsBrowser;
        }
    }
});

export const {goToDiscover, goToAdmins, goToLogs} = ScreenPosition.actions;
export default ScreenPosition.reducer;
