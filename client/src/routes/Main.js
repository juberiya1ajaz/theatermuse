import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import Home from '../pages/Home'

function Main() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
