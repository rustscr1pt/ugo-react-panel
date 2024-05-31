import {createSlice} from "@reduxjs/toolkit";

export const SelectedBase = createSlice({
    name : "SelectedBase",
    initialState : {
        value : "ugo-vape"
    },
    reducers : {
        setNewBase(state, value) {
            state.value = value.payload
        },
        toggleNewBase(state) {
            state.value = state.value === "ugo-vape" ? "walgreen" : "ugo-vape";
        }
    }
});

export const {setNewBase, toggleNewBase} = SelectedBase.actions;
export default SelectedBase.reducer;
