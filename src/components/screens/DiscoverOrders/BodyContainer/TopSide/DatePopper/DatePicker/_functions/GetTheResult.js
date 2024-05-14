import {FormatTheDate} from "./FormatTheDate";

export const GetTheResult = (newValue) => {
    return `${newValue.$y}-${FormatTheDate(newValue.$M + 1)}-${FormatTheDate(newValue.$D)}`
}