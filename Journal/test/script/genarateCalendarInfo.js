// Genarate Calendar Info
/** 
 * Pivot day is 12/28 of pervious day, due to week num calculate.
 * the first week of a year need to check if Thursday is in current year or in pervious year
 * if Thursday is in pervious year, like 2016/1/1, then the first week is start from 2016/1/4 (start from Monday)
 */ 

const fs = require("fs");
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

genarateDate(2020);
function isLeap ( year ) {
// TODO: complete the function
// 1. 能被 4 整除 且 不能被 100 整除
// 2. 能被 400 整除
// 满足 1，2 两点的为闰年
    return Boolean( !( year % 4 ) && ( year % 100) ) || Boolean( !( year % 400 ) );
}

function genarateDate ( year ) {

    // Need to update since getWeek modified
    let firstDay = year + "/01/01",
        firstDayWeek = getWeek( firstDay ),
        firstDayInfo = new Date( firstDay ),
        dayInfo = firstDayInfo.getDay();

    Month[1].endTo = isLeap( year ) ? Month[1].endTo + 1 : Month[1].endTo;

    
    Month.forEach(( month ) => {
        for (let i = month.startFrom; i <= month.endTo; i++) {
            let dayCount = output.length,
                day = (dayCount + dayInfo) % 7,
                week = 0;
            if( dayCount < 3 && ![1, 2, 3, 4].includes( day )) {
                week = firstDayWeek.week;
            } else if ( dayCount === 3 ) {
                week = 1;
            } else {
                week = dayCount  ? ( day === 1? output[ dayCount - 1].week + 1 : output[ dayCount - 1].week) : 1;
            }

            output.push( { 
                year: year, 
                month: month.id, 
                week: week,
                date: i, 
                day: day,
                dayCount: dayCount + 1 // start from day 1
            } )
        }
    });
    
    fs.writeFileSync("./test/mockCalendarDate_" + year + ".json", JSON.stringify( output ));
    //let ws = fs.createWriteStream( "./test/mockCalendarDate_" + year + ".js" );
    //ws.write( output );

}

/**
 * calculate the week number of current date
 * 
 * @param date date need to get week number
 * 
 * @returns the week number
 */
function getWeek( date ) {
    let thur = getThursdayDate( date ),
        fullYear = new Date( thur ).getFullYear(),
        timeObj = new Date( fullYear + "/01/01" ),
        day = timeObj.getDay(),
        timestamp = new Date( date ).getTime();

    let firstWeekTimeStamp = 0;
    if ([1, 2, 3, 4].includes( day )) {
        firstWeekTimeStamp = (timeObj.getTime()) - (day * 24 * 3600000 );
    } else {
        let num = day > 0 ? 8 : 1;
        firstWeekTimeStamp = ( timeObj.getTime() ) + ( num - day ) * 24 * 3600000;
    }

    if ( timestamp >= firstWeekTimeStamp ) {
        let num = Math.ceil(( timestamp - firstWeekTimeStamp ) / 7 / 24 / 3600000 );
        return { year: fullYear, week: num };
    } else {
        return this.getWeek( (fullYear - 1 ) + "/12/28")
    }
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

