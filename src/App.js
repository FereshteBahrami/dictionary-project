import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <Dictionary defaultKeyword="sunset" />
        <footer className="App-footer">
          <small>Coded by Fereshte Bahrami</small>
        </footer>
      </div>
    </div>
  );
}
