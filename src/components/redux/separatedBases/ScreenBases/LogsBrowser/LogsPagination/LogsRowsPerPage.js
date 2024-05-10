import {createSlice} from "@reduxjs/toolkit";

export const LogsRowsPerPage = createSlice({
    name : "LogsRowsPerPage",
    initialState : {
        value : 10
    },
    reducers : {
        setLogsRowsPerPage : (state, value) => {
            state.value = value.payload;
        }
    }
});
export const {setLogsRowsPerPage} = LogsRowsPerPage.actions;
export default LogsRowsPerPage.reducer
