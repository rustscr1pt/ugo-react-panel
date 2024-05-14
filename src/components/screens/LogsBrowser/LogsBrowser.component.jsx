import "./LogsBrowser.style.sass"
import {useDispatch, useSelector} from "react-redux";
import {setLogsCurrentPage} from "../../redux/separatedBases/ScreenBases/LogsBrowser/LogsPagination/LogsCurrentPage";
import {setLogsRowsPerPage} from "../../redux/separatedBases/ScreenBases/LogsBrowser/LogsPagination/LogsRowsPerPage";
import {PagePagination} from "../DiscoverOrders/PagePagination/PagePagination.component";
import {LogoutFAB} from "../DiscoverOrders/LogoutFAB/LogoutFAB.component";
import {LogsTopPanel} from "./LogsTopPanel/LogsTopPanel.component";
import {LogsTable} from "./LogsTable/LogsTable.component";
import {GetLogsAndReload} from "./_functions/GetLogsAndReload";
export const LogsBrowser = () => {
    const dispatch = useDispatch();

    const rowsPerPage = useSelector((state) => state.logsRowPerPage.value);
    const currentPage = useSelector((state) => state.logsCurrentPage.value);
    const reloadActivator = useSelector((state) => state.logsReloadActivator.value);

    const rowsCount = useSelector((state) => state.logsRowCount.value);

    GetLogsAndReload(rowsPerPage, currentPage, reloadActivator, dispatch);

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
