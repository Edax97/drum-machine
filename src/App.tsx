import React from "react";
import "./App.scss";
import { DrumMachine } from "./components/drum-machine/DrumMachine";
import { DisplayServiceProvider } from "./services/display-service.provider";

function App() {
  return (
    <DisplayServiceProvider>
      <div className="App">
        <DrumMachine />
      </div>
    </DisplayServiceProvider>
  );
}

export default App;
