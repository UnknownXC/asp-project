import CalendarUI from '../components/CalendarUI'

const Home = ({ jobData }) => {
    return (
        <>
            <CalendarUI jobs={jobData} />
        </>
    )
}

export default Home
