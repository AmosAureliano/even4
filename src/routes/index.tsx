import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";

export default function RouteLinks() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
        </Router>
    )
}