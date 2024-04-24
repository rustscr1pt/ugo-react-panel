import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from "dayjs";

export default function BasicDateCalendar() {
    const [value, setValue] = React.useState(dayjs());

    function manage_data_change(newValue) {
        setValue(newValue)
        console.log(`Day : ${newValue.$D} Month : ${newValue.$M + 1} Year : ${newValue.$y}`)
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar value={value} onChange={(newValue) => manage_data_change(newValue)}/>
        </LocalizationProvider>
    );
}