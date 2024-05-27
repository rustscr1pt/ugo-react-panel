import route_fillers from "../../../../../../../constants&addons/route_fillers";

// Add note to order in the db
export const AddNoteToOrder = (textField, setFieldError, id, setNotes, setTextField, sourceType) => {
    if (textField === "") {
        setFieldError(true);
    }
    else {
        fetch(`${route_fillers.url}${format_the_route(sourceType)}`, {
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

function format_the_route(sourceType) {
    if (sourceType === "ugo-vape") {
        return "/api/orders/add_note"
    }
    else {
        return "/api/walgreen/walgreen_requests/add_note"
    }
}