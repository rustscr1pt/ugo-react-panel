import "./buttons-container.style.sass"
import RefreshButton from "../refresh-button";
import SortSelector from "../sort-selector";
const ButtonsContainer = (props) => {
    return (
        <div className='top-panel-button-container-flex'>
            <SortSelector/>
            <RefreshButton setOrdersVector={props.setOrdersVector}/>
        </div>
    )
}

export default ButtonsContainer;