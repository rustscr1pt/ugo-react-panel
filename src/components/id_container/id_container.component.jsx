import './id_container.style.sass';

const IDContainer = (props) => {

    function remove_order_by_id(id, setMain) {
        fetch('http://localhost:8000/api/orders/remove_order', {
            method : "POST",
            body : JSON.stringify({
                id : `${id}`
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.is_succeed) {
                    console.log(json.message);
                    setMain([]);
                }
                else {
                    console.log(json.message);
                }
            })
            .catch(function(err) {
                console.log(err)
            })
    }

    return (
        <div className='black-id-flex-container'>
            <button
                className="collapsible-container__activator"
                onClick={() => remove_order_by_id(props.id, props.reload_orders)}>Удалить
            </button>
        </div>
    )
}

export default IDContainer;