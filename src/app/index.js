import React, { useContext } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Profile from '../pages/Profile'
import Order from '../pages/Order'
import {orderContext} from '../orderContext'
const App =() =>{


  return (
    <div>
       <Router>
           <Route path='/' exact component={Profile}/>
           <Route path='/order' component={Order}/>
       </Router>
    </div>
   )

}

export default App