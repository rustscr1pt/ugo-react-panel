import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import * as React from "react";

export const OrderTableHeadBuilder = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell sx={{color: "#FFFFFF"}}>ID</TableCell>
                <TableCell style={{width : '20%'}}>Статус</TableCell>
                <TableCell style={{width : '10%'}}>Имя</TableCell>
                <TableCell style={{width : '10%'}}>Почта</TableCell>
                <TableCell style={{width : '20%'}}>Описание</TableCell>
                <TableCell style={{width : '15%'}}>Время добавления</TableCell>
                <TableCell align={"center"}>Удалить</TableCell>
                <TableCell align={"center"}>Развернуть</TableCell>
            </TableRow>
        </TableHead>
    )
}
