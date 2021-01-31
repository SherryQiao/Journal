// Need to refactor to server version, here is just for test

import axios from 'axios'

export const getYearCalendar = ( year ) => {
    return axios.get('http://localhost:8080/api/getYearCalendar',{
        params:{
            year:year
        }
    }).then(res => {
        return res.data;
    })
}