import React from 'react'
import { BrowserRouter as Router ,  Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Home from './components/Home'




const App = () => {
  return (
    <>
     <Router>
     <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/home' element = {<Home/>}/>

     
     </Routes>
     </Router>
    </>
  
  )
}

export default App