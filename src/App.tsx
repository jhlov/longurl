import classNames from "classnames";
import React from "react";
import "./App.scss";
import LongUrl from "./LongUrl";

function App() {
  const isMobile = true;

  return (
    <div className="App">
      <div className={classNames(isMobile ? "mobile-container" : "container")}>
        <LongUrl />
      </div>
    </div>
  );
}

export default App;
