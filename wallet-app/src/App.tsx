import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Meus cartões</h1>
      </header>
      <div>
        <h2>Marca</h2>
        <h3>numero do caretão</h3>
        <h4>
          RS <span>2.500,00</span>
        </h4>
      </div>
      <div>
        <div>
          <p>ultimas 2 semanas</p>
          <p>
            total: <span>valor</span>
          </p>
        </div>
        <ul>lista</ul>
      </div>
    </>
  );
}

export default App;
