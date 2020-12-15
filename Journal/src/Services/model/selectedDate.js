class SelectedDate {
    constructor(date){
        if(!date) {
            let today = new Date();
            this.year = today.getFullYear();
            this.monthId = today.getMonth();
            this.day = today.getDay();
            this.date = today.getDate();
        } else {
            this.year = date.year;
            this.monthId = date.monthId;
            this.day = date.day;
            this.date = date.date;
        }
       
    }
}

export default SelectedDate;