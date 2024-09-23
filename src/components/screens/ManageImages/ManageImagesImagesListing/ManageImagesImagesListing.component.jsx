import './ManageImagesImagesListing.style.sass';
import {ManageImagesTableBuilder} from "./ManageImagesTableBuilder/ManageImagesTableBuilder.component";

export const ManageImagesImagesListing = () => {
    return (
        <section className="ManageImagesImagesListing">
            <h4 className="ManageImagesImagesListing__header">Список загруженных изображений</h4>
            <ManageImagesTableBuilder/>
        </section>
    )
}