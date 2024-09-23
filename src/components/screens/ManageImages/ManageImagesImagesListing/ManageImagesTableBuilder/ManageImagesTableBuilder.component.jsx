import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchImages} from "../../../../redux/separatedBases/ManageImages/ManageImages";


export const ManageImagesTableBuilder = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchImages());
    })

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth : 650}} aria-label="table for displaying images">
                <TableHead>
                    <TableCell>Ссылка на изображение</TableCell>
                    <TableCell>Посмотреть</TableCell>
                    <TableCell>Удалить</TableCell>
                </TableHead>
            </Table>
            <TableBody>

            </TableBody>
        </TableContainer>
    )
}