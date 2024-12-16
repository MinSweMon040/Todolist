import React, { useState } from 'react'

const Form = ({submittask}) => {
    const [usertask,setusertask]=useState('')
    // const submittask=()=>{
    //     setusertask('')
    //     console.log(usertask)
    // }
    const submittaskk=()=>{
      submittask(usertask)
      setusertask('')
    }

  return (
    <div>
        <h1 className='mb-3'>React TO DO List</h1>
        <div className="row">
            <div className="col-6 offset-3">
    <input type="text" value={usertask} onChange={(e)=>setusertask(e.target.value)} className='form-control' placeholder='Enter the Item'/>
            </div>
            <div className="col-3">
           <button type='button' onClick={()=>submittaskk(usertask)} className='btn btn-primary'><i className="fa-solid fa-plus"></i></button> 
            </div>
        </div>
    </div>
  )
}

export default Form