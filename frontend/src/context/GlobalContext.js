import { createContext, useState } from "react"
import dayjs from "dayjs"
import jobs from '../data/jobs'

const GlobalContext = createContext({
    monthIndex : 0,
    setMonthIndex : (index) => {}
})

export const GlobalProvider = ({ children }) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month())
    const [jobData, setJobData] = useState(jobs)

    return <GlobalContext.Provider 
    value={{ monthIndex, setMonthIndex, jobData }}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalContext