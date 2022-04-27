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
          <small>
            <a
              href="https://github.com/FereshteBahrami/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            by{" "}
            <a
              href="https://www.linkedin.com/in/fereshtebahrami"
              target="_blank"
              rel="noreferrer"
            >
              Fereshte Bahrami
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
