// Need to refactor to server version, here is just for test

import axios from 'axios'

const PORT = process.env.PORT;

export const getYearCalendar = ( year ) => {
    return axios.get(`http://localhost:${PORT}/api/getYearCalendar`,{
        params:{
            year:year
        }
    })
}

export const getDayPreviewList = ( data ) => {
    let date = `${data.year}-${data.monthId}-${data.date}`
    return axios.get(`http://localhost:${PORT}/api/getDayPreviewList`, {
        params: {
            date: date
        }
    })
}