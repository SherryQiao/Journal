import React from 'react'
import { withRouter } from 'react-router-dom';
import SingleMonthInYear from "../../CommonComponents/singleMonthInYear"
import Header from "../../CommonComponents/header"
import Controller from "../../CommonComponents/controller"
// TODO: Need to get data from server
import Calendar2020 from '../../../test/mockCalendarDate_2020.json'
import Calendar2021 from '../../../test/mockCalendarDate_2021.json'
import Calendar2022 from '../../../test/mockCalendarDate_2022.json'
import Calendar2019 from '../../../test/mockCalendarDate_2019.json'
import Calendar2018 from '../../../test/mockCalendarDate_2018.json'

class Year extends React.Component {
    constructor() {
        super();
        this.state = ({
            CalendarInfo: this.genarateData(Calendar2020),
            selectedDate: this.initialDate()
        })
    }

    getYear(item) {
        // TODO: Get data from server to switch year
        let year = null;
        let data = null;
        switch (item) {
            case 'previous': {
                year = this.state.selectedDate.year - 1;
                break;
            }

            case 'next': {
                year = this.state.selectedDate.year + 1;
                break;
            }
            default: {
                year = new Date().getFullYear();
            }
        }
        switch (year) {
            case 2018: 
                data = Calendar2018;
                break;
            case 2019: 
                data = Calendar2019;
                break;
            case 2020: 
                data = Calendar2020;
                break;
            case 2021: 
                data = Calendar2021;
                break;
            case 2022: 
                data = Calendar2022;
                break;
        }
        if( year>2017 && year < 2023 ){
            data = this.genarateData(data);
            let selectedDate = this.state.selectedDate;
            selectedDate.year = year;
            this.setState({CalendarInfo:data})
            this.setState({selectedDate:selectedDate})
        }
        
    }
    // TODO: Will move to service
    genarateData( data ) {
        let calendar = data;
        let calendarInfo = [];
        let tempWeek = 0
        let year = calendar[3].year;
        calendar.forEach( item => {
            if( !calendarInfo[item.month] ) {
                calendarInfo[item.month] = [ {week: 0, days:[item]} ];
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
        let target = ev.target;
        let date = {
            year: this.state.CalendarInfo.year,
            monthId: monthId,
            day: parseInt(target.getAttribute("day")),
            date: parseInt(target.getAttribute("date"))
        }

        if( date.date ) {
            this.setState({selectedDate:date})
        }
    }
    render() {
        return (
            <div style={{"height": "100%"}}>
               <Header year={this.state.CalendarInfo.year}></Header>
                <div style={{"display":"flex", "flexWrap":"wrap", "height":"90%", "padding":"10px 0 10px 0"}}>
                {
                    Object.keys( this.state.CalendarInfo.month ).map( ( item, index ) => {
                        return  <SingleMonthInYear key={index} month={this.state.CalendarInfo.month[index]} monthId={index} selectedDate={this.state.selectedDate} selectDateHandler={this.selectDateHandler.bind(this)}></SingleMonthInYear>
                    })
                }
                </div>
                <Controller getYear={this.getYear.bind(this)}></Controller>
            </div>
            
        )
    }
}

export default withRouter(Year)