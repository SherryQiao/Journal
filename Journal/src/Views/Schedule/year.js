import React from 'react'
import { withRouter } from 'react-router-dom';
import SingleMonthInYear from "../../CommonComponents/singleMonthInYear"
import Header from "../../CommonComponents/header"
import Controller from "../../CommonComponents/controller"
// TODO: Need to get data from server
import Calendar from '../../../test/mockCalendarDate_2020.json'

class Year extends React.Component {
    constructor() {
        super();
        this.state = ({
            CalendarInfo: this.genarateData(),
            selectedDate: this.initialDate()
        })
    }

    getYear(item) {
        // TODO: Get data from server to switch year
        console.log(item)
    }
    // TODO: Will move to service
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
        });
        let output = {};
        output.year = calendar[0].year;
        output.month = calendarInfo;
        return output;
    }

    initialDate() {
        let date = new Date();
        return {
            year: date.getFullYear(),
            monthId: date.getMonth(),
            day: date.getDay(),
            date: date.getDate()
        }
    }

    selectDateHandler(monthId, ev) {
        let date = {
            year: this.state.CalendarInfo.year,
            monthId: monthId,
            day: ev.target.getAttribute("day"),
            date: ev.target.getAttribute("date")
        }

        if( date.day && date.date ) {
            this.setState({selectedDate:date}, () => {
                let date = this.state.selectedDate;
                alert(`year: ${date.year}, monthId: ${date.monthId}, day: ${date.day}, date: ${date.date}`)
            })
        }
    }
    render() {
        return (
            <div style={{"height": "100%"}}>
               <Header year={this.state.CalendarInfo.year}></Header>
                <div style={{"display":"flex", "flexWrap":"wrap", "height":"90%", "padding":"10px 0 10px 0"}}>
                {
                    Object.keys( this.state.CalendarInfo.month ).map( ( index ) => {
                        return  <SingleMonthInYear key={index} month={this.state.CalendarInfo.month[index]} monthId={index} selectDateHandler={this.selectDateHandler.bind(this)}></SingleMonthInYear>
                    })
                }
                </div>
                <Controller getYear={this.getYear.bind(this)}></Controller>
            </div>
            
        )
    }
}

export default withRouter(Year)