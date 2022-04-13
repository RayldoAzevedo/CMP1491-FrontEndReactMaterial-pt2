import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListUserComponent from "./ListUserComponent";
import AddUserComponent from "./AddUserComponent";
import AddUserMaterialComponent from "./AddUserMaterialComponent";
import AddUserCardsComponent from './AddUserCarsComponent';


import React from "react";
const AppRouter = () => {
    return (
        <Router>
            <div className="col-md-6">
                <br /> <br />
                <Routes>
                    <Route path="/adduser-cards" exact element={<ListUserComponent />} />
                    <Route path="/add" element={<AddUserComponent />} />]
                    <Route path="/add-material" element={<AddUserMaterialComponent/>} />
                    <Route path="/" element={<AddUserCardsComponent/>} />
                </Routes>
            </div>
        </Router>
    )
}
export default AppRouter;