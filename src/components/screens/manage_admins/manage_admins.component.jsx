import {useEffect, useState} from "react";
import LogoutFAB from "../discover_orders/LogoutFAB";
import AdminsTable from "./admins_table";
import route_fillers from "../../../constants&addons/route_fillers";
import "./manage_admins.style.sass";

const ManageAdmins = (props) => {
    const [reloadActivator, setReloadActivator] = useState(false);

    const [adminsVector, setAdminsVector] = useState([]);

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
            <LogoutFAB setIsAuthorized={props.setIsAuthorized}/>
        </div>
    )
}

export default ManageAdmins;