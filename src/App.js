import { useState } from 'react';
import Routes from './routes';
import './App.css';

function App() {
  const [name, setName] = useState('');

  return (
    <div className="App">
      <Routes name={name} setName={setName} />
    </div>
  );
}

export default App;
