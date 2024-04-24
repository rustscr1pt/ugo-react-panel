import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from "dayjs";

export default function BasicDateCalendar() {
    const [value, setValue] = React.useState(dayjs());

    function format_the_date(value) {
        if (`${value}`.length < 2) {
            return `0${value}`
        }
        else {
            return value
        }
    }

    function manage_data_change(newValue) {
        setValue(newValue);
        console.log(`${newValue.$y}-${format_the_date(newValue.$M + 1)}-${format_the_date(newValue.$D)}`);

    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar value={value} onChange={(newValue) => manage_data_change(newValue)}/>
        </LocalizationProvider>
    );
}