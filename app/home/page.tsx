
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import "./App.css";
import Create from "../components/Create";
import Edit from "../components/Edit";


function App() {
    return (
        <div className="App">
            <h1 className="geeks">GeeksforGeeks </h1>
            <h3>CRUD App</h3>
            <Router>
                <Routes>
                    
                    <Route
                        path="/create"
                        element={<Create />}
                    />
                    <Route
                        path="/edit"
                        element={<Edit />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;