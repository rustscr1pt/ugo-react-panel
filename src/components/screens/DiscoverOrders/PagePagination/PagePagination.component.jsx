import {TablePagination} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {
    setOrdersCurrentPage
} from "../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersPagination/OrdersCurrentPage";
import {
    setOrdersRowsPerPage
} from "../../../redux/separatedBases/ScreenBases/DiscoverOrders/OrdersPagination/OrdersRowsPerPage";

// Bottom pagination component for browsing orders
const PagePagination = () => {
    const dispatch = useDispatch();

    const rowsCount = useSelector((state) => state.ordersRowCount.value);
    const page = useSelector((state) => state.ordersCurrentPage.value);
    const rowsPerPage = useSelector((state) => state.ordersRowsPerPage.value);


    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        dispatch(setOrdersCurrentPage(newPage));
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        dispatch(setOrdersRowsPerPage(parseInt(event.target.value, 10)));
        dispatch(setOrdersCurrentPage(0));
    };

    return (
        <TablePagination
            component="div"
            count={rowsCount}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            showFirstButton={true}
            showLastButton={true}
        />
    )
}
export default PagePagination;
