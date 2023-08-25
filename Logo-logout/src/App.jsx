import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Are you sure you want to signout</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>signout</button>
      </div>
    </>
  );
}

export default App;
