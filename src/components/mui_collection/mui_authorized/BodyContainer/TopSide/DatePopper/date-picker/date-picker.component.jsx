import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from "dayjs";

export default function BasicDateCalendar(props) {
    const [value, setValue] = React.useState(dayjs());

    function format_the_date(value) {
        if (`${value}`.length < 2) {
            return `0${value}`
        }
        else {
            return value
        }
    }

    function get_the_result(newValue) {
        return `${newValue.$y}-${format_the_date(newValue.$M + 1)}-${format_the_date(newValue.$D)}`
    }

    function manage_data_change(newValue) {
        setValue(newValue);
        console.log(get_the_result(newValue));
        props.setFilteredQuery(get_the_result(newValue));
        props.setFilterType("date_time_added");
        props.setFilterCondition(true);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar value={value} onChange={(newValue) => manage_data_change(newValue)}/>
        </LocalizationProvider>
    );
}