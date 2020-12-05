import React from 'react'
import AppInput from './AppInput'
import AppButton from './AppButton'


const Contact =() =>{

  return (
    <div className='left-content square'>
        <div className='intro'>
            <h1>Let's talk</h1>
            <p>
                To request a quote or want to meet up for coffee.
                contact us directly or fill out the form and we will get back to you promptly.
            </p>
        </div>
        <AppInput type='text' name='name' label='input' text='Your Name'  className='nm-input'/>
        <AppInput type='email' name='name' label='input' text='Your Email' className='nm-input' />
        <AppInput name='name' label='textArea' text='Your Message' placeholder ='Type something if you want..' className='ta-input'/>
        <AppButton text='Send Message'/>
    </div>
   )

}

export default Contact