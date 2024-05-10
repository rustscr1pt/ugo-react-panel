import {createSlice} from "@reduxjs/toolkit";

export const Alert = createSlice({
    name : "Alert",
    initialState : {
        value : []
    },
    reducers : {
        setAlertActivity : (state, condition) => {
            state.value = [
                {
                    condition : condition.payload.condition,
                    text : `${condition.payload.text}`,
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
