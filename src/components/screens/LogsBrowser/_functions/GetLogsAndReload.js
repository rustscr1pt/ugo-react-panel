import {useEffect} from "react";
import route_fillers from "../../../../constants&addons/route_fillers";
import {setLogsVector} from "../../../redux/separatedBases/ScreenBases/LogsBrowser/LogsVector/LogsVector";
import {setLogsRowCount} from "../../../redux/separatedBases/ScreenBases/LogsBrowser/LogsPagination/LogsRowCount";
import {FillLogsInErrorCase} from "./FillLogsInErrorCase";

export const GetLogsAndReload = (rowsPerPage, currentPage, reloadActivator, dispatch) => {
    useEffect(() => {
        fetch(`${route_fillers.url}/api/logs/browse`, {
            method : "POST",
            body : JSON.stringify({
                rows_per_page : `${rowsPerPage}`,
                page_number : `${currentPage}`
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.is_succeed) {
                    dispatch(setLogsVector(json.reply));
                    dispatch(setLogsRowCount(parseInt(json.message)));
                }
                else {
                    FillLogsInErrorCase(json.message, dispatch);
                }
            })
            .catch(function(err) {
                FillLogsInErrorCase(err, dispatch);
            })
    }, [reloadActivator, currentPage, rowsPerPage]);
}