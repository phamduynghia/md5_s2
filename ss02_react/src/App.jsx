import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Footer from './components/ListPrroduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
    <header/>
     <h3>App component</h3>

     <Footer/>
    </>
  );
}

export default App;
