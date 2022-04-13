import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListUserComponent from "./ListUserComponent";
import AddUserComponent from "./AddUserComponent";
import AddUserMaterialComponent from "./AddUserMaterialComponent";


import React from "react";
const AppRouter = () => {
    return (
        <Router>
            <div className="col-md-6">
                <h1 className="text-center" style={style}>Primeira Aplicação em React</h1>
                <Routes>
                    <Route path="/add-material" exact element={<ListUserComponent />} />
                    <Route path="/add" element={<AddUserComponent />} />]
                    <Route path="/" element={<AddUserMaterialComponent/>} />
                </Routes>
            </div>
        </Router>
    )
}
const style = {
    color: 'red', margin: '10px', textAlign: 'center'
}
export default AppRouter;