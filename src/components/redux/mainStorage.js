import {configureStore} from "@reduxjs/toolkit";
import ScreenPosition from "./separatedBases/ScreenPosition/ScreenPosition";
import Auth from "./separatedBases/AuthAndAlert/Auth";
import Alert from "./separatedBases/AuthAndAlert/Alert";
import Login from "./separatedBases/LoginAndPassword/Login";
import Password from "./separatedBases/LoginAndPassword/Password";
import AdminsVector from "./separatedBases/ScreenBases/ManageAdmins/AdminsVector/AdminsVector";
import AdminsReloadActivator from "./separatedBases/ScreenBases/ManageAdmins/AdminsReloadActivator/AdminsReloadActivator";
import DisplayAddAccount from "./separatedBases/ScreenBases/ManageAdmins/DisplayAddAccount/DisplayAddAccount";
import AdminNewLogin from "./separatedBases/ScreenBases/ManageAdmins/AdminNewPassAndLogin/AdminNewLogin";
import AdminNewPassword from "./separatedBases/ScreenBases/ManageAdmins/AdminNewPassAndLogin/AdminNewPassword";
import LogsCurrentPage from "./separatedBases/ScreenBases/LogsBrowser/LogsPagination/LogsCurrentPage";
import LogsRowCount from "./separatedBases/ScreenBases/LogsBrowser/LogsPagination/LogsRowCount";
import LogsRowsPerPage from "./separatedBases/ScreenBases/LogsBrowser/LogsPagination/LogsRowsPerPage";
import LogsReloadActivator from "./separatedBases/ScreenBases/LogsBrowser/LogsReloadActivator/LogsReloadActivator";
import LogsVector from "./separatedBases/ScreenBases/LogsBrowser/LogsVector/LogsVector";
import OrdersFilterCondition from "./separatedBases/ScreenBases/DiscoverOrders/OrdersFilters/OrdersFilterCondition";
import OrdersFilteredQuery from "./separatedBases/ScreenBases/DiscoverOrders/OrdersFilters/OrdersFilteredQuery";
import OrdersFilterType from "./separatedBases/ScreenBases/DiscoverOrders/OrdersFilters/OrdersFilterType";
import OrdersCurrentPage from "./separatedBases/ScreenBases/DiscoverOrders/OrdersPagination/OrdersCurrentPage";
import OrdersRowCount from "./separatedBases/ScreenBases/DiscoverOrders/OrdersPagination/OrdersRowCount";
import OrdersRowsPerPage from "./separatedBases/ScreenBases/DiscoverOrders/OrdersPagination/OrdersRowsPerPage";
import OrdersReloadActivator from "./separatedBases/ScreenBases/DiscoverOrders/OrdersReloadActivator/OrdersReloadActivator";
import OrdersVector from "./separatedBases/ScreenBases/DiscoverOrders/OrdersVector/OrdersVector";

export default configureStore({
    reducer : {
        screenPosition : ScreenPosition,

        auth : Auth,
        alert : Alert,
        login : Login,
        password : Password,

        adminsVector : AdminsVector,
        adminsReloadActivator : AdminsReloadActivator,
        displayAddAccount : DisplayAddAccount,
        adminNewLogin : AdminNewLogin,
        adminNewPassword : AdminNewPassword,

        logsVector : LogsVector,
        logsReloadActivator : LogsReloadActivator,
        logsCurrentPage : LogsCurrentPage,
        logsRowPerPage : LogsRowsPerPage,
        logsRowCount : LogsRowCount,

        ordersVector : OrdersVector,
        ordersReloadActivator : OrdersReloadActivator,
        ordersFilterCondition : OrdersFilterCondition,
        ordersFilteredQuery : OrdersFilteredQuery,
        ordersFilterType : OrdersFilterType,
        ordersCurrentPage : OrdersCurrentPage,
        ordersRowCount : OrdersRowCount,
        ordersRowsPerPage : OrdersRowsPerPage
    }
});
