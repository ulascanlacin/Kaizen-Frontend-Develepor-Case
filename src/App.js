import "./App.css";
import PromotionDetails from "./Components/PromotionDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PromotionDetails />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
