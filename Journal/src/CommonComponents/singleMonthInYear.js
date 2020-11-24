import React from 'react'

const SingleMonthInYear = ( props ) => {
    console.log(props)
    return (
        <div>
            {props.monthId}
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        <th>M</th>
                        <th>T</th>
                        <th>W</th>
                        <th>T</th>
                        <th>F</th>
                        <th>S</th>
                        <th>S</th>
                    </tr>
                    {
                        props.month.map( (week) => {
                            return <tr>
                                <th>{week.days[0].week}</th>
                                {
                                    week.days.map( day => {
                                        if(day.date === 1) {
                                            let item = [];
                                            for( let i = 1; i < day.day; i++) {
                                                item.push(<th></th>)
                                            }
                                            item.push(<th>{day.date}</th>);
                                            return item;
                                        } else {
                                            return <th>{day.date}</th>
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