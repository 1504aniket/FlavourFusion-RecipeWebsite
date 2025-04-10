import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pages from './assets/pages/pages'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [selectedCuisine, setSelectedCuisine] = useState('');

  return (
    <div>
      <BrowserRouter>
      <Pages/>
    </BrowserRouter>
      </div>
  );
};


export default App
