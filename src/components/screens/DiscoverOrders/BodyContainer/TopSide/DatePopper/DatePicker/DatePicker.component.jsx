import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from "dayjs";
import {useDispatch} from "react-redux";
import {ManageDataChange} from "./_functions/ManageDataChange";

export default function BasicDateCalendar() {
    const [value, setValue] = React.useState(dayjs());
    const dispatch = useDispatch();

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar value={value} onChange={(newValue) => ManageDataChange(setValue, newValue, dispatch)}/>
        </LocalizationProvider>
    );
}
