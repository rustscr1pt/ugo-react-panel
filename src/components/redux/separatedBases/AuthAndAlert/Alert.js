import {createSlice} from "@reduxjs/toolkit";

export const Alert = createSlice({
    name : "Alert",
    initialState : {
        value : []
    },
    reducers : {
        setAlertActivity : (state, condition, text) => {
            state.value = [
                {
                    condition : condition.payload,
                    text : `${text.payload}`,
                    severity : "error"
                }
            ]
        },
        emptyAlertActivity : (state) => {
            state.value = []
        }
    }
})

export const {setAlertActivity, emptyAlertActivity} = Alert.actions;
export default Alert.reducer;
