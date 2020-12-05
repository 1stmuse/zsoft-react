import React from 'react'
import ContactForm from './components/ContactForm'
import ContactDetails from './components/ContactDetails'

const App =() =>{


  return (
    <div className='wrapper'>
      <div className='wh-bg'>
         <ContactForm/>
         <ContactDetails/>
      </div>
    </div>
   )

}

export default App