
// Set textfield and if value is empty display error
export const SetTextField = (event, setTextField, setFieldError) => {
    if (event.target.value !== "") {
        setFieldError(false);
        setTextField(event.target.value);
    }
    else {
        setTextField(event.target.value);
    }
}