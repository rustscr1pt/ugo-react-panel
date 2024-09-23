import './ManageImages.style.sass';
import {ManageImagesTopPanel} from "./ManageImagesTopPanel/ManageImagesTopPanel.component";
import {ManageImagesImagesListing} from "./ManageImagesImagesListing/ManageImagesImagesListing.component";

export const ManageImages = () => {
    return (
        <div className="ManageImagesDiv">
            <ManageImagesTopPanel/>
            <ManageImagesImagesListing/>
        </div>
    )
}