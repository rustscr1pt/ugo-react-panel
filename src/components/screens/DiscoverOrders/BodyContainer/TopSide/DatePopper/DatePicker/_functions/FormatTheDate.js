export const FormatTheDate = (value) => {
    if (`${value}`.length < 2) {
        return `0${value}`
    }
    else {
        return value
    }
};