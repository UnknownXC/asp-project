import dayjs from 'dayjs'
import JobTitle from './JobTitle'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const Day = ({ day, rowIdx }) => {
    const { jobData } = useContext(GlobalContext)

    const getCurrentDayClass = () => {
        return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
            ? 'bg-red-600 text-white rounded-full w-7'
            : ''
    }

    return (
        <div className='border border-gray-200 flex flex-col'>
            <header className='flex flex-col items-center overflow-hidden'>
                {rowIdx === 0 && (
                    <p className='text-sm mt-1'>
                        {day.format('ddd').toUpperCase()}
                    </p>
                )}
                <p
                    className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}
                >
                    {day.format('DD')}
                </p>
                {/* {day.get('date') === 3 && day.get('month') === 11 ? (
                    <h1>Hello</h1>
                ) : (
                    ''
                )} */}
                {/* {console.log(day.format('DD-MM-YY'))}
                {day.format('DD-MM-YY') === '09-08-22' && (
                    <JobTitle>Godiva Chocolate</JobTitle>
                )} */}
            </header>
            {jobData.map((job) =>
                job.date === day.format('DD-MM-YY') ? (
                    <JobTitle id={job._id}>{job.title}</JobTitle>
                ) : (
                    ''
                )
            )}
        </div>
    )
}

export default Day
