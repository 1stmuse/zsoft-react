import React from 'react'

const AppInput =(props) =>{

    const renderInput =()=>{
        let template =''
        switch (props.label) {
            case 'input':
                template = <input {...props} />
                break;
            case 'textArea':
                template = <textarea {...props} ></textarea>
                break;
            default:
                break;
        }
        return template
    }
  return (
    <div className='app-input'>
        <p>{props.text}</p>
        {renderInput()}
    </div>
   )

}

export default AppInput