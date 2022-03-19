import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Institutes from './components/Institutes/Institutes'
import Dashboard from './components/dashboard/Dashboard'
import CollegeState from './context/college/CollegeState'
import AlertState from './context/alert/AlertState'
import Alerts from './components/layout/Alerts'
import CollegeRegister from './components/Auth/CollegeRegister'
import CollegeLogin from './components/Auth/CollegeLogin'
import Manage from './components/manage/Manage'
import PrivateRoute from './utils/PrivateRoute'

function App() {
    return (
        <CollegeState>
            <AlertState>
                <div className="App">
                    <Alerts />
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<CollegeRegister />} />
                            <Route path="/login" element={<CollegeLogin />} />
                            <Route
                                path="/institutes"
                                element={<Institutes />}
                            />
                            <Route
                                path="/dashboard"
                                element={<PrivateRoute component={Dashboard} />}
                            />
                            <Route
                                path="/manage"
                                element={<PrivateRoute component={Manage} />}
                            />
                        </Routes>
                    </BrowserRouter>
                </div>
            </AlertState>
        </CollegeState>
    )
}

export default App
