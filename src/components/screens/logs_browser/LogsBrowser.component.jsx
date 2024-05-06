import "./LogsBrowser.style.sass"
import LogoutFAB from "../discover_orders/LogoutFAB";
import {useEffect, useState} from "react";
import route_fillers from "../../../constants&addons/route_fillers";
import LogsTable from "./LogsTable";
const LogsBrowser = (props) => {
    const [logsVector, setLogsVector] = useState([]);
    const [reloadActivator, setReloadActivator] = useState(false);

    const [rowsCount, setRowsCount] = useState(0);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

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
                setLogsVector(json.reply);
                setRowsCount(parseInt(json.message));
            })
            .catch(function(err) {
                console.log(err);
            })
    }, [reloadActivator, page, rowsPerPage]);

    return (
        <div className="LogsBrowserDiv">
            <LogsTable
                logsVector={logsVector}
                reloadActivator={reloadActivator}
                setReloadActivator={setReloadActivator}
            />
            <LogoutFAB
                setIsAuthorized={props.setIsAuthorized}
            />
        </div>
    )
}
export default LogsBrowser;
