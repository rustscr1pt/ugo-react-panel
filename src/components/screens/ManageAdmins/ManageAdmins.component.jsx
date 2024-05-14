import "./ManageAdmins.style.sass";
import {useDispatch, useSelector} from "react-redux";
import {LogoutFAB} from "../DiscoverOrders/LogoutFAB/LogoutFAB.component";
import {AdminTopPanelContainer} from "./AdminTopPanelContainer/AdminTopPanelContainer.component";
import {AddAdminWrapped} from "./AddAdminWrapped/AddAdminWrapped.component";
import {AdminsTable} from "./AdminsTable/AdminsTable.component";
import {FetchAdminsAndReload} from "./_functions/FetchAdminsAndReload";

export const ManageAdmins = () => {
    const adminsReloadActivator = useSelector((state) => state.adminsReloadActivator.value)
    const dispatch = useDispatch();

    FetchAdminsAndReload(adminsReloadActivator, dispatch);

    return (
        <div className="ManageAdminsDiv">
            <AdminTopPanelContainer/>
            <AddAdminWrapped/>
            <AdminsTable/>
            <LogoutFAB/>
        </div>
    )
}
