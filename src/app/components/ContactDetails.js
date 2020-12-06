import React from 'react'
import svg1 from '../../images/svg1.svg'

const ContactDetails =() =>{

  return (
    <div className='right-content square'>
        <img src={svg1}/>
        <div className='contact-info'>
            <div className='contact-flex'>
                <i className='fa fa-map-marker'></i>
                <p>151 New Park Ave, Hartford, CT 06106 <br/> United States </p>
            </div>
            <div className='contact-flex'>
                <i className='fa fa-phone'></i>
                <p>+1 (203) 302-9545</p>
            </div>
            <div className='contact-flex'>
                <i className='fa fa-envelope'></i>
                <p>contactus@inveritasoft.com </p>
            </div>
        </div>
        <div className='social-flex'>
            <span className='social fb'>
                <i className='fa fa-facebook'></i>
            </span>
            <span className='social tw'>
                <i className='fa fa-twitter'></i>
            </span>
            <span className='social ig'>
                <i className='fa fa-instagram'></i>
            </span>
        </div>
    </div>
   )

}

export default ContactDetails