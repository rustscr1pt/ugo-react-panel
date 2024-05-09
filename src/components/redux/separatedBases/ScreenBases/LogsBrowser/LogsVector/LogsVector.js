import {createSlice} from "@reduxjs/toolkit";

export const LogsVector = createSlice({
    name : "LogsVector",
    initialState : {
        value : []
    },
    reducers : {
        setLogsVector : (state, value) => {
            state.value = value.payload;
        },
        setAsErrorLogsVector : (state, value) => {
            state.value = [
                {
                    id : "0",
                    contents : `${value.payload}`,
                    date_time : "Null"
                }
            ]
        }
    }
})
export const {setLogsVector, setAsErrorLogsVector} = LogsVector.actions;
export default LogsVector.reducer;
