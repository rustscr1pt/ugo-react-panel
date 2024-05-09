import {createSlice} from "@reduxjs/toolkit";

export const LogsCurrentPage = createSlice({
    name : "LogsCurrentPage",
    initialState : {
        value : 0
    },
    reducers : {
        setLogsCurrentPage : (state, value) => {
            state.value = value.payload;
        }
    }
});
export const {setLogsCurrentPage} = LogsCurrentPage.actions;
export default LogsCurrentPage.reducer
