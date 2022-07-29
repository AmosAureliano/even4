import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Event from "../pages/event";
import Profile from "../pages/profile";

export default function RouteLinks() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/event" element={<Event/>} />
                <Route path="/profile" element={<Profile/>} />
            </Routes>
        </Router>
    )
}