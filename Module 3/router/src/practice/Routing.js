import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./LogIn";

export const Routing = () => {
    return (
        <div className='container-fluid'>
            <BrowserRouter>
            <div className="container text-center pt-4">
                <Link to="/login" className="btn btn-danger fw-bolder"></Link>
            </div>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
            );
}