import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  

  return (
  <div className='bg-cover bg-center h-screen'
       style={{backgroundImage: `url('/Rectangle1.png')`}}>
    <BrowserRouter>
      <Header/>
    </BrowserRouter>
  </div>
  )
}

export default App
