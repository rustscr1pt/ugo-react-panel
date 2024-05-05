import {useEffect, useState} from "react";
import AdminsTable from "./admins_table";
import route_fillers from "../../../constants&addons/route_fillers";
import "./manage_admins.style.sass";
import AddAdminWrapped from "./add_admin_wrapped";
import TopPanelContainer from "./top_panel_container";
import LogoutFAB from "../discover_orders/LogoutFAB";

const ManageAdmins = (props) => {
    // An activator to reload the data.
    const [reloadActivator, setReloadActivator] = useState(false);

    // Vector for storing accounts and displaying it in table.
    const [adminsVector, setAdminsVector] = useState([]);

    // If true == menu for adding accounts is shown
    const [displayAddAccount, setDisplayAddAccount] = useState(false);

    useEffect(() => {
        fetch(`${route_fillers.url}/api/admins/fetch`, {
            method : "POST",
            body : JSON.stringify({
                token : `${sessionStorage.getItem("ugo-token")}`
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then((reply) => reply.json())
            .then((json) => {
                if (json.is_succeed) {
                    console.log(json);
                    setAdminsVector(json.reply);
                }
                else {
                    console.log(json);
                }
            })
            .catch(function(err) {
                console.log(err);
            })
    }, [reloadActivator]);

    return (
        <div className="ManageAdminsDiv">
            <TopPanelContainer
                setPagePosition={props.setPagePosition}
                setDisplayAddAccount={setDisplayAddAccount}
                displayAddAccount={displayAddAccount}
            />
            <AddAdminWrapped
                displayAddAccount={displayAddAccount}
                setReloadActivator={setReloadActivator}
            />
            <AdminsTable
                adminsVector={adminsVector}
                setReloadActivator={setReloadActivator}
            />
            <LogoutFAB setIsAuthorized={props.setIsAuthorized}/>
        </div>
    )
}

export default ManageAdmins;