import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CollegeRegister from './components/CollegeRegister'
import Institutes from './components/Institutes/Institutes'
import Dashboard from './components/dashboard/Dashboard'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CollegeRegister />} />
                    <Route path="/institutes" element={<Institutes />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
