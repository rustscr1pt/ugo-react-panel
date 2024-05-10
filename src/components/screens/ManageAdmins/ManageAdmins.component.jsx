import {useEffect} from "react";
import AdminsTable from "./AdminsTable";
import route_fillers from "../../../constants&addons/route_fillers";
import "./ManageAdmins.style.sass";
import AddAdminWrapped from "./AddAdminWrapped";
import AdminTopPanelContainer from "./AdminTopPanelContainer";
import LogoutFAB from "../DiscoverOrders/LogoutFAB";
import {useDispatch, useSelector} from "react-redux";
import {setAdminsVector} from "../../redux/separatedBases/ScreenBases/ManageAdmins/AdminsVector/AdminsVector";

const ManageAdmins = (props) => {
    const adminsReloadActivator = useSelector((state) => state.adminsReloadActivator.value)
    const dispatch = useDispatch();

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
                    dispatch(setAdminsVector(json.reply));
                }
                else {
                    console.log(json);
                }
            })
            .catch(function(err) {
                console.log(err);
            })
    }, [adminsReloadActivator]);

    return (
        <div className="ManageAdminsDiv">
            <AdminTopPanelContainer/>
            <AddAdminWrapped/>
            <AdminsTable/>
            <LogoutFAB/>
        </div>
    )
}

export default ManageAdmins;
