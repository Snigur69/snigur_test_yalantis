import React from "react";
import "./App.css";
import MonthsList from "./components/MonthsList";

function App() {
    return (
        <div className="App">
            <h1>
                Тестове завдання для <b>Yalantis React.js School</b>
            </h1>
            <h2>Виконав: Антон Снігур</h2>
            <MonthsList />
        </div>
    );
}

export default App;
