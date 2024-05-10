import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from "dayjs";
import {useDispatch} from "react-redux";
import {
    setOrdersFilteredQuery
} from "../../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersFilters/OrdersFilteredQuery";
import {
    setOrdersFilterType
} from "../../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersFilters/OrdersFilterType";
import {
    setOrdersFilterCondition
} from "../../../../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersFilters/OrdersFilterCondition";

export default function BasicDateCalendar() {
    const [value, setValue] = React.useState(dayjs());
    const dispatch = useDispatch();

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
        dispatch(setOrdersFilteredQuery(get_the_result(newValue)));
        dispatch(setOrdersFilterType("date_time_added"));
        dispatch(setOrdersFilterCondition(true));
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar value={value} onChange={(newValue) => manage_data_change(newValue)}/>
        </LocalizationProvider>
    );
}
