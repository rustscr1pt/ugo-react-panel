import "./LogsBrowser.style.sass"
import LogoutFAB from "../discover_orders/LogoutFAB";
import {useEffect, useState} from "react";
import route_fillers from "../../../constants&addons/route_fillers";
import LogsTable from "./LogsTable";
import PagePagination from "../discover_orders/PagePagination";
import LogsTopPanel from "./LogsTopPanel";
const LogsBrowser = (props) => {
    const [logsVector, setLogsVector] = useState([]);
    const [reloadActivator, setReloadActivator] = useState(false);

    const [rowsCount, setRowsCount] = useState(0);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    function fill_vec_error_case(message) {
        console.log(message);
        setLogsVector([{
            id : "0",
            contents : `${message}`,
            date_time : "Null"
        }])
    }

    useEffect(() => {
        fetch(`${route_fillers.url}/api/logs/browse`, {
            method : "POST",
            body : JSON.stringify({
                rows_per_page : `${rowsPerPage}`,
                page_number : `${page}`
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.is_succeed) {
                    setLogsVector(json.reply);
                    setRowsCount(parseInt(json.message));
                }
                else {
                    fill_vec_error_case(json.message)
                }
            })
            .catch(function(err) {
                fill_vec_error_case(err)
            })
    }, [reloadActivator, page, rowsPerPage]);

    return (
        <div className="LogsBrowserDiv">
            <LogsTopPanel
                setPagePosition={props.setPagePosition}
                setReloadActivator={setReloadActivator}
            />
            <LogsTable
                logsVector={logsVector}
                reloadActivator={reloadActivator}
            />
            <div className="PagePaginationDiv">
                <PagePagination
                    rowsCount={rowsCount}
                    page={page}
                    setPage={setPage}
                    rowsPerPage={rowsPerPage}
                    setRowsPerPage={setRowsPerPage}
                />
            </div>
            <LogoutFAB
                setIsAuthorized={props.setIsAuthorized}
            />
        </div>
    )
}
export default LogsBrowser;
