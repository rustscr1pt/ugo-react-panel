import {useDispatch} from "react-redux";
import "./ManagePhotosFAB.style.sass";
import {Fab} from "@mui/material";
import {SwitchScreenToPhotos} from "./_functions/SwitchScreenToPhotos";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

export const ManagePhotosFAB = () => {
    const dispatch = useDispatch();
    return (
        <div className="ManagePhotosFAB">
            <Fab
                color="secondary"
                aria-label="edit"
                onClick={() => SwitchScreenToPhotos(dispatch)}
            >
                <AddToPhotosIcon/>
            </Fab>
        </div>
    )
}