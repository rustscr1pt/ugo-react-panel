import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import * as React from "react";

const TableHeadBuilder = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Логин</TableCell>
                <TableCell align="right">Пароль</TableCell>
                <TableCell align="right">Когда добавлен</TableCell>
                <TableCell align="right">Показать</TableCell>
                <TableCell align="right">Удалить</TableCell>
            </TableRow>
        </TableHead>
    )
}

export default TableHeadBuilder;