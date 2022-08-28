import { Link } from 'react-router-dom'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const JobTitle = ({ children, id }) => {
    const { jobData } = useContext(GlobalContext)

    return (
        <Link to={`/job-details/${id}`}>
            <h3 id='job-title'>{children}</h3>
        </Link>
    )
}

export default JobTitle
