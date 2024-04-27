import {useEffect, useState} from "react";
import LogoutFAB from "../discover_orders/LogoutFAB";
import AdminsTable from "./admins_table";
import route_fillers from "../../../constants&addons/route_fillers";
import "./manage_admins.style.sass";
import AddAdminFAB from "./add_admin_fab";
import AddAdminFloating from "./add_admin_floating";

const ManageAdmins = (props) => {
    // An activator to reload the data.
    const [reloadActivator, setReloadActivator] = useState(false);

    const [adminsVector, setAdminsVector] = useState([]);

    const [displayAddAccount, setDisplayAddAccount] = useState(true);

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
            <AdminsTable
                adminsVector={adminsVector}
                setReloadActivator={setReloadActivator}
            />
            <AddAdminFloating displayAddAccount={displayAddAccount}/>
            <LogoutFAB setIsAuthorized={props.setIsAuthorized}/>
            <AddAdminFAB setDisplayAddAccount={setDisplayAddAccount}/>
        </div>
    )
}

export default ManageAdmins;