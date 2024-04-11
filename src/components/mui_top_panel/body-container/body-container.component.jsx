import "./body-container.style.sass";
import ButtonsContainer from "../buttons-container";
const BodyContainer = (props) => {
    return (
        <div className="body-container-flex">
            <ButtonsContainer setOrdersVector={props.setOrdersVector}/>
        </div>
    )
}

export default BodyContainer;