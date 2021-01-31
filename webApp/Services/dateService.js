export const genarateData = ( data ) => {
    let calendar = data;
    let calendarInfo = [];
    let tempWeek = 0
    let year = calendar[3].year;
    calendar.forEach( item => {
        if( !calendarInfo[item.month] ) {
            calendarInfo[item.month] = [ {week: item.week, days:[item]} ];
            tempWeek = item.week;
        } else {
            let firstWeekInMonth = calendarInfo[item.month][0].days[0].week
            if( tempWeek !== item.week) {
                calendarInfo[item.month].push( {
                    week: item.week, 
                    days:[item]
                } );
                tempWeek = item.week;
            } else {
                //calendarInfo[item.month][item.week].days.push(item);
                if( item.year === year) {
                    if(firstWeekInMonth > 1 && item.month === 0) {
                        firstWeekInMonth = 0;
                    }
                    calendarInfo[item.month][item.week - firstWeekInMonth].days.push(item);
                } else {
                    if( item.month === 0) {
                        calendarInfo[0][0].days.push(item);
                    } else if( item.month === 11) {
                        calendarInfo[11][calendarInfo[11].length - 1].days.push(item);
                    }
                }
            }
        }
    });
    let output = {};
    output.year = year;
    output.month = calendarInfo;
    return output;
}