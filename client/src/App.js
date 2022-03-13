import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CollegeRegister from './components/CollegeRegister'
import Institutes from './components/Institutes/Institutes'
import Dashboard from './components/dashboard/Dashboard'
import CollegeState from './context/college/CollegeState'
import AlertState from './context/alert/AlertState'
import Alerts from './components/layout/Alerts'

function App() {
    return (
        <CollegeState>
            <AlertState>
                <div className="App">
                    <Alerts />
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<CollegeRegister />} />
                            <Route
                                path="/institutes"
                                element={<Institutes />}
                            />
                            <Route path="/dashboard" element={<Dashboard />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </AlertState>
        </CollegeState>
    )
}

export default App
