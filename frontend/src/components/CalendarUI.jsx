import { getMonth } from '../util'
import { useState, useContext, useEffect } from 'react'
import CalendarHeader from './CalendarHeader'
import Month from './Month'
import GlobalContext from '../context/GlobalContext'

const CalendarUI = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const { monthIndex } = useContext(GlobalContext)
    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex))
    }, [monthIndex])

    return (
        <div id='calendar' className='container'>
            <div className='h-screen w-screen flex flex-col p-10'>
                <CalendarHeader />
                <div className='flex flex-1'>
                    {/* <Sidebar /> */}
                    <Month month={currentMonth} />
                </div>
            </div>
        </div>
    )
}

export default CalendarUI
