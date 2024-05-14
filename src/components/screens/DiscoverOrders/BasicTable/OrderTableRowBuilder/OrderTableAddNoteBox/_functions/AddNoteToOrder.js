import route_fillers from "../../../../../../../constants&addons/route_fillers";

// Add note to order in the db
export const AddNoteToOrder = (textField, setFieldError, id, setNotes, setTextField) => {
    if (textField === "") {
        setFieldError(true);
    }
    else {
        fetch(`${route_fillers.url}/api/orders/add_note`, {
            method : "POST",
            body : JSON.stringify({
                order_id : `${id}`,
                note_to_add : `${textField}`
            }),
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then((reply) => reply.json())
            .then((json) => {
                if (json.is_succeed) {
                    console.log(json.message);
                    setNotes(json.reply)
                    setTextField("");
                }
                else {
                    console.log(json.message)
                }
            })
    }
}