import React from 'react'
import Enum from '../Services/enums'

const SingleMonthInYear = ( props ) => {
    console.log(props)
    return (
        <div style={{width: "25%", height:"20%","margin":"0 auto 0 auto"}}>
            {Enum.MonthIdMap[props.monthId]}

            <table>
                <tbody>
                    <tr>
                        <th style={{"paddingRight": "15px"}}></th>
                        <th>M</th>
                        <th>T</th>
                        <th>W</th>
                        <th>T</th>
                        <th>F</th>
                        <th>S</th>
                        <th>S</th>
                    </tr>
                    {
                        props.month.map(  (week, index ) => {
                            return <tr key={index}>
                                <th key={index} style={{"paddingRight": "15px"}}>{week.days[0].week}</th>
                                {
                                    week.days.map( (day) => {
                                        if(day.date === 1) {
                                            let item = [];
                                            for( let i = 1; i < day.day; i++) {
                                                item.push(<td key={index.toString() + week.week.toString() + i.toString()}></td>)
                                            }
                                            item.push(<td key={index.toString() + week.week.toString() + day.day.toString()}>{day.date}</td>);
                                            return item;
                                        } else {
                                            return <td key={index.toString() + week.week.toString() + day.day.toString()}>{day.date}</td>
                                        }
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SingleMonthInYear