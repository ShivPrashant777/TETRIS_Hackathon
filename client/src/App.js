import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Institutes from './components/Institutes/Institutes'
import Dashboard from './components/dashboard/Dashboard'
import CollegeRegister from './components/CollegeRegister'
import CollegeLogin from './components/CollegeLogin'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CollegeRegister />} />
                    <Route path="/login" element={<CollegeLogin />} />
                    <Route path="/institutes" element={<Institutes />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
