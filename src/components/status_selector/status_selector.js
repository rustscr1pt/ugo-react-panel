import React from "react";
import "./status_selector.sass";

const Status_selector = () => {
    return (
        <div className="request-grid-holder__status">
            <select name="order_status" id="order_status">
                <option value="БЕЗ ВНИМАНИЯ">БЕЗ ВНИМАНИЯ</option>
                <option value="ОБРАБОТАН">ОБРАБОТАН</option>
                <option value="ОЖИДАЕТ ОТВЕТА">ОЖИДАЕТ ОТВЕТА</option>
                <option value="ЗАВЕРШЕН">ЗАВЕРШЕН</option>
            </select>
        </div>
    )
}

export default Status_selector;