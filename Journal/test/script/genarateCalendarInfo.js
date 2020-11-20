// Genarate Calendar Info
/** 
 * Pivot day is 12/28 of pervious day, due to week num calculate.
 * the first week of a year need to check if Thursday is in current year or in pervious year
 * if Thursday is in pervious year, like 2016/1/1, then the first week is start from 2016/1/4 (start from Monday)
 */ 


let Month = [
    { id: 0, month: "Jan", startFrom: 1, endTo: 31 },
    { id: 1, month: "Feb", startFrom: 1, endTo: 28 },
    { id: 2, month: "Mar", startFrom: 1, endTo: 31 },
    { id: 3, month: "Apr", startFrom: 1, endTo: 30 },
    { id: 4, month: "May", startFrom: 1, endTo: 31 },
    { id: 5, month: "June", startFrom: 1, endTo: 30 },
    { id: 6, month: "July", startFrom: 1, endTo: 31 },
    { id: 7, month: "Aug", startFrom: 1, endTo: 31 },
    { id: 8, month: "Sep", startFrom: 1, endTo: 30 },
    { id: 9, month: "Oct", startFrom: 1, endTo: 31 },
    { id: 10, month: "Nov", startFrom: 1, endTo: 30 },
    { id: 11, month: "Dec", startFrom: 1, endTo: 31 }
];

let output = [];


function isLeap ( year ) {
// TODO: complete the function
}

function genarateDate ( year ) {
    let firstDay = year + "/01/01",
        firstDayInfo = calculateDayInfo( firstDay );

    Month[1].endTo = isLeap( year ) ? Month[1].endTo + 1 : Month[1].endTo;

    
    Month.forEach(( month ) => {
        for (let i = month.startFrom; i <= endTo; i++) {
            let dayCount = output.length(),
                day = dayCount % 7 + firstDayInfo.day,
                week = dayCount ? ( day === 1? output[ dayCount - 1] + 1 : output[ dayCount - 1]) : 1;
            if( dayCount < 4 && ![1, 2, 3, 4].includes( day )) {
                week = firstDayInfo.week;
            }
            

            output.push( { 
                year: year, 
                month: month.id, 
                week: week,
                date: i, 
                day: day
            } )
        }
    })

}

/**
 * calculate the week number of current date
 * 
 * @param date date need to get week number
 * 
 * @returns the week number
 */
function calculateDayInfo( date ) {
    let currThur = getThursdayDate( date ),
        fullYear = new Date( currThur ).getFullYear(),
        timeObj = new Date( fullYear + "/01/01" ),
        month = timeObj.getMonth(),
        day = timeObj.getDay(),
        date = timeObj.getDate();

    let firstWeekTimeStamp = 0;

    // TODO: complete the function

    return { year: fullYear, month: month, week: weekNum, date: date, day: day };
}

/**
 * get timestamp of Thursday
 * 
 * @param date date need to get week number
 * 
 * @returns timestamp of Thursday
 */
function getThursdayDate( date ) {
    let dateObj = new Date( date ),
        timestamp = dateObj.getTime(),
        day = dateObj.getDay();
    if ([0, 1, 2, 3].includes(day)) {
        timestamp += (4 - day) * 24 * 3600000;
    } else if ([5, 6].includes(day)) {
        timestamp -= (day - 4) * 24 * 3600000;
    }

    return timestamp;
}

