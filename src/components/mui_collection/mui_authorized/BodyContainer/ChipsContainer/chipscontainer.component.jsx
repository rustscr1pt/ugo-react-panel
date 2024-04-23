import './chipscontainer.style.sass';
import SingleChip from "./SingleChip";

const ChipsContainer = (props) => {
    return (
        <div className="chips-container">
            <SingleChip filterCondition={props.filterCondition}/>
        </div>
    )
}
export default ChipsContainer;