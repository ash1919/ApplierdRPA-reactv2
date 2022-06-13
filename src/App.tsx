import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AppliedRpaLandingpage from './component/AppliedRpaLandingpage'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppliedRpaLandingpage />} />
            </Routes>
        </Router>
    )
}

export default App
