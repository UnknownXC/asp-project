import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const JobDetails = () => {
    const { id } = useParams()
    const { jobData } = useContext(GlobalContext)

    return (
        <div className='container'>
            <div></div>
        </div>
    )
}

export default JobDetails
