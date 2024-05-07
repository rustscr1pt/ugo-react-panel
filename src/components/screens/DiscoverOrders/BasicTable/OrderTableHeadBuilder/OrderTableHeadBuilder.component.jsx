import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import * as React from "react";

const OrderTableHeadBuilder = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell sx={{color : "#FFFFFF"}}>ID</TableCell>
                <TableCell>Статус</TableCell>
                <TableCell>Имя</TableCell>
                <TableCell>Почта</TableCell>
                <TableCell>Описание</TableCell>
                <TableCell>Время добавления</TableCell>
                <TableCell align={"center"}>Удалить</TableCell>
                <TableCell align={"center"}>Развернуть</TableCell>
            </TableRow>
        </TableHead>
    )
}
export default OrderTableHeadBuilder;
