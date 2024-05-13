import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import * as React from "react";

export const AdminsTableHeadBuilder = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">Логин</TableCell>
                <TableCell align="center">Пароль</TableCell>
                <TableCell align="center">Когда добавлен</TableCell>
                <TableCell align="center">Показать</TableCell>
                <TableCell align="center">Удалить</TableCell>
            </TableRow>
        </TableHead>
    )
}
