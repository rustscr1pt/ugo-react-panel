import {TablePagination} from "@mui/material";
import {useDispatch} from "react-redux";


// Bottom pagination component for browsing orders
export const PagePagination = (props) => {
    const dispatch = useDispatch();

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        dispatch(props.changePage(newPage));
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        dispatch(props.setRowsPerPage(parseInt(event.target.value, 10)));
        dispatch(props.changePage(0));
    };

    return (
        <TablePagination
            component="div"
            count={props.rowsCount}
            page={props.page}
            onPageChange={handleChangePage}
            rowsPerPage={props.rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            showFirstButton={true}
            showLastButton={true}
        />
    )
}
