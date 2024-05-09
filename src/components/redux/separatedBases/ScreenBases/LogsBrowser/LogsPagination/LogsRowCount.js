import {createSlice} from "@reduxjs/toolkit";

export const LogsRowCount = createSlice({
    name : "LogsRowCount",
    initialState : {
        value : 0
    },
    reducers : {
        setLogsRowCount : (state, value) => {
            state.value = value.payload;
        }
    }
});
export const {setLogsRowCount} = LogsRowCount.actions;
export default LogsRowCount.reducer
