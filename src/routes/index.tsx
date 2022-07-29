import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Login from "../pages/login";


export default function RouteLinks() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
            </Routes>
        </Router>
    )
}