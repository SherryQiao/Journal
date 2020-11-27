import React from 'react'
import { withRouter } from 'react-router-dom';
import Calendar from '../../../test/mockCalendarDate_2020.json'
import SingleMonthInYear from "../../CommonComponents/singleMonthInYear"

class Year extends React.Component {
    constructor() {
        super();
        this.state = ({
            CalendarInfo: this.genarateData()
        })
    }
    // Will move to service
    genarateData() {
        let calendar = Calendar;
        let calendarInfo = [];
        let tempWeek = 0
        calendar.forEach( item => {
            if( !calendarInfo[item.month] ) {
                calendarInfo[item.month] = [ {week: 0, days:[item]} ];
                tempWeek = item.week;
            } else {
                let firstWeekInMonth = calendarInfo[item.month][0].days[0].week
                if( tempWeek !== item.week) {
                    calendarInfo[item.month].push( {week: item.week - firstWeekInMonth, days:[item]} );
                    tempWeek = item.week;
                } else {
                    calendarInfo[item.month][item.week - firstWeekInMonth].days.push(item)
                }
            }
        })
        return calendarInfo;
    }

    handleClick() {
        console.log("clicked");
    }
    render() {
        return (
            <div style={{"display":"flex", "flexWrap":"wrap", "height":"100%"}}>
                {
                    Object.keys( this.state.CalendarInfo ).map( ( index ) => {
                        return  <SingleMonthInYear key={index} month={this.state.CalendarInfo[index]} monthId={index} onClick={() => this.handleClick()}></SingleMonthInYear>
                    })
                }
            </div>
        )
    }
}

export default withRouter(Year)