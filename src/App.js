import React from "react";
import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Dictionary />
        <footer className="App-footer">
          <small>Coded by Fereshte Bahrami</small>
        </footer>
      </div>
    </div>
  );
}
