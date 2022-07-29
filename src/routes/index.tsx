import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Event from "../pages/event";

export default function RouteLinks() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/event" element={<Event/>} />
            </Routes>
        </Router>
    )
}