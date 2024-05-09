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
                    condition : condition,
                    text : `${text}`,
                    severity : "error"
                }
            ]
        }
    }
})

export const {setAlertActivity} = Alert.actions;
export default Alert.reducer;
