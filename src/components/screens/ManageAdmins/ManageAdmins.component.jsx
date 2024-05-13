import {useEffect} from "react";
import route_fillers from "../../../constants&addons/route_fillers";
import "./ManageAdmins.style.sass";
import {useDispatch, useSelector} from "react-redux";
import {setAdminsVector} from "../../redux/separatedBases/ScreenBases/ManageAdmins/AdminsVector/AdminsVector";
import {LogoutFAB} from "../DiscoverOrders/LogoutFAB/LogoutFAB.component";
import {AdminTopPanelContainer} from "./AdminTopPanelContainer/AdminTopPanelContainer.component";
import {AddAdminWrapped} from "./AddAdminWrapped/AddAdminWrapped.component";
import {AdminsTable} from "./AdminsTable/AdminsTable.component";

export const ManageAdmins = () => {
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
