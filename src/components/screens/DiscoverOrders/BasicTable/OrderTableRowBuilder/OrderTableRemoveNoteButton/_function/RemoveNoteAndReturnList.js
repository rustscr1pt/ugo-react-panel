import route_fillers from "../../../../../../../constants&addons/route_fillers";

export const RemoveNoteAndReturnList = (note_id, related_id, setNotes, sourceType) => {
    fetch(`${route_fillers.url}${format_the_route(sourceType)}`, {
        method : "POST",
        body : JSON.stringify({
            note_id : `${note_id}`,
            related_id : `${related_id}`
        }),
        headers : {
            "Content-Type" : "application/json"
        }
    })
        .then((reply) => reply.json())
        .then((json) => {
            if (json.is_succeed) {
                setNotes(json.reply);
            }
            else {
                console.log(json.message)
            }
        })
        .catch(function(err) {
            console.log(err)
        })
}

function format_the_route(sourceType) {
    if (sourceType === "ugo-vape") {
        return "/api/orders/remove_note"
    }
    else {
        return "/api/walgreen/walgreen_requests/remove_note"
    }
}