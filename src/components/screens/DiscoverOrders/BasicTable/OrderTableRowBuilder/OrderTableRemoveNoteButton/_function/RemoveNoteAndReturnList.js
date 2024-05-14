import route_fillers from "../../../../../../../constants&addons/route_fillers";

export const RemoveNoteAndReturnList = (note_id, related_id, setNotes) => {
    fetch(`${route_fillers.url}/api/orders/remove_note`, {
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