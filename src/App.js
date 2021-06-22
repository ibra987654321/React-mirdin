import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Work from './components/Work/Work'
import Team from './components/Team/Team'
import Contacts from './components/Contacts/Contacts'
import Home from './components/Home/Home'
import "./App.css"
export default function App() {
  return (
    <BrowserRouter>
    <div>
    <Header/>
    <Route path='/Home' component={Home}/>
  
    <Route path='/Work' component={Work}/>
    <Route path='/Team' component={Team}/>
    <Route path='/Contacts' component={Contacts}/>
    
    </div>
    
    </BrowserRouter>
  )
    
}
