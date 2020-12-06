function initialDate() {
    let date = new Date();
    return {
        year: date.getFullYear(),
        monthId: date.getMonth(),
        day: date.getDay(),
        date: date.getDate()
    }
}

const defaultState = {
    selectedDate: initialDate()
}

export default defaultState
