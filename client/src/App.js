import './App.css'
import CollegeRegister from './components/CollegeRegister'
import Institutes from './components/Institutes/Institutes'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CollegeRegister />} />
                    <Route path="/institutes" element={<Institutes />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
