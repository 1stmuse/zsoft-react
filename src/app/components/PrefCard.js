import React from 'react'

const PrefCard =({like, data}) =>{

    // const options = ()=>{
    //     data.map(text=>(
    //         <div className='pref'>{text} </div>
    //     ))
    // }
  return (
    <div className='prefs-card'>
        <p className='pref-label'> <i></i> {like ? 'Likes' : 'Dislikes'} </p>
        <div className='prefs-flex'>
            {data.map(text=>(
                <div className='pref'>{text} </div>
            ))
            }
        </div>
    </div>
   )

}

export default PrefCard