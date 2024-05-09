import {createSlice} from "@reduxjs/toolkit";

export const LogsVector = createSlice({
    name : "LogsVector",
    initialState : {
        value : []
    },
    reducers : {
        setLogsVector : (state, value) => {
            state.value = value.payload;
        }
    }
})
export const {setLogsVector} = LogsVector.actions;
export default LogsVector.reducer;
