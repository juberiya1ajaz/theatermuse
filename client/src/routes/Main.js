import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Scripts from '../pages/Scripts'
import NearbyPlays from '../pages/NearbyPlays'
import Shop from '../pages/Shop'
import Opportunity from '../pages/Opportunity'

function Main() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/scripts" element={<Scripts />} />
                <Route path="/nearbyPlays" element={<NearbyPlays />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/opportunity" element={<Opportunity />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
