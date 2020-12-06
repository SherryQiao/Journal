// Need to refactor to server version, here is just for test
import Calendar2020 from '../test/mockCalendarDate_2020.json'
import Calendar2021 from '../test/mockCalendarDate_2021.json'
import Calendar2022 from '../test/mockCalendarDate_2022.json'
import Calendar2019 from '../test/mockCalendarDate_2019.json'
import Calendar2018 from '../test/mockCalendarDate_2018.json'

export const getYearCalendar = ( year ) => {
    let data = null;
    
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
        return data
    }
}