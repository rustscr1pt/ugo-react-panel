import "./LogsBrowser.style.sass"
import {useEffect} from "react";
import route_fillers from "../../../constants&addons/route_fillers";
import {useDispatch, useSelector} from "react-redux";
import {setAsErrorLogsVector, setLogsVector} from "../../redux/separatedBases/ScreenBases/LogsBrowser/LogsVector/LogsVector";
import {setLogsRowCount} from "../../redux/separatedBases/ScreenBases/LogsBrowser/LogsPagination/LogsRowCount";
import {setLogsCurrentPage} from "../../redux/separatedBases/ScreenBases/LogsBrowser/LogsPagination/LogsCurrentPage";
import {setLogsRowsPerPage} from "../../redux/separatedBases/ScreenBases/LogsBrowser/LogsPagination/LogsRowsPerPage";
import {PagePagination} from "../DiscoverOrders/PagePagination/PagePagination.component";
import {LogoutFAB} from "../DiscoverOrders/LogoutFAB/LogoutFAB.component";
import {LogsTopPanel} from "./LogsTopPanel/LogsTopPanel.component";
import {LogsTable} from "./LogsTable/LogsTable.component";
export const LogsBrowser = () => {
    const dispatch = useDispatch();

    const rowsPerPage = useSelector((state) => state.logsRowPerPage.value);
    const currentPage = useSelector((state) => state.logsCurrentPage.value);
    const reloadActivator = useSelector((state) => state.logsReloadActivator.value);

    const rowsCount = useSelector((state) => state.logsRowCount.value);

    function fill_vec_error_case(message) {
        console.log(message);
        dispatch(setAsErrorLogsVector(message));
    }

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
                    fill_vec_error_case(json.message)
                }
            })
            .catch(function(err) {
                fill_vec_error_case(err)
            })
    }, [reloadActivator, currentPage, rowsPerPage]);

    return (
        <div className="LogsBrowserDiv">
            <LogsTopPanel/>
            <LogsTable/>
            <div className="PagePaginationDiv">
                <PagePagination
                    rowsCount={rowsCount}
                    page={currentPage}
                    rowsPerPage={rowsPerPage}
                    changePage={setLogsCurrentPage}
                    setRowsPerPage={setLogsRowsPerPage}
                />
            </div>
            <LogoutFAB/>
        </div>
    )
}
