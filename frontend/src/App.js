import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Mypage from './pages/Mypage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import JobDetails from './pages/JobDetails'
import { useState } from 'react'
import jobs from './data/jobs'
import useToken from './useToken'//steve added


function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}//steve added

function getToken() {
    const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}//steve added

function App() {
    const { token, setToken } = useToken();//steve added
    const [jobData, setJobData] = useState(jobs)

    if(!token) {
        return <Login setToken={setToken} />
      }//steve added
    return (
        <Router>
            <Header />
            <main id='main-section'>
                <div className="container">
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/login' element={<Login />}/>
                        <Route path='/admin' element={<Admin />}/>
                        <Route path='/mypage' element={<Mypage />}/>
                        <Route path='/job-details/:id' element={<JobDetails />}/>
                    </Routes>
                </div>
            </main>
            <Footer />
        </Router>
    )
}

export default App
