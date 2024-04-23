import {TablePagination} from "@mui/material";

const PagePagination = (props) => {
    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        props.setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        props.setRowsPerPage(parseInt(event.target.value, 10));
        props.setPage(0);
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
export default PagePagination;