import "./buttons-container.style.sass"
import RefreshButton from "../refresh-button";
const ButtonsContainer = (props) => {
    return (
        <div className='top-panel-button-container-flex'>
            <RefreshButton setOrdersVector={props.setOrdersVector}/>
        </div>
    )
}

export default ButtonsContainer;