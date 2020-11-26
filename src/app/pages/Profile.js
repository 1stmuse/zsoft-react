import React from 'react'

import profile from '../../images/profile.jpg'
import PrefCard from '../components/PrefCard'

const user = {
  likes:['egg', 'pineapple', 'swallow'],
  dislike:['benas', 'flower', 'orange']
}

const Profile =() =>{

  return (
    <div>
      <section className='profile-top-section'>
        <div className='profile-overlay'>
          <div className='profile-abs'>
            <div className='abs-flex'>
              <div className='profile-img'>
                <img src={profile} />
              </div>
              <div className='profile-details'>
                <h2>Akinnagbe Oluwasegun</h2>
                <p className='p-number'> <i className='fa fa-phone'></i>  0905863524</p>
                <p>jefferson avenue allen kentucky</p>
              </div>
            </div>
            <div className='about'>
              <h4>About</h4>
              <p>Goal oriemted reasonable fine programmer with the sauce mehn forget is</p>
            </div>
          </div>
        </div>
      </section>
      <section className='pref-section'>
        <div>
          <PrefCard like={true} data={user.likes} />
          <PrefCard like={false} data={user.dislike} />
        </div>
      </section>
    </div>
   )

}

export default Profile