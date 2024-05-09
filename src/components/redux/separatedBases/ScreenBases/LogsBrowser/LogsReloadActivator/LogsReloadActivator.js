import {createSlice} from "@reduxjs/toolkit";

export const LogsReloadActivator = createSlice({
    name : "LogsReloadActivator",
    initialState : {
        value : false
    },
    reducers : {
        setLogsReloadActivatorValue : (state, value) => {
            state.value = value.payload
        },
        toggleLogsReloadActivator : (state) => {
            state.value = !state.value
        }
    }
});

export const {setLogsReloadActivatorValue, toggleLogsReloadActivator} = LogsReloadActivator.actions;
export default LogsReloadActivator.reducer;
