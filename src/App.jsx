import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Form from './components/Form';
import { useEffect, useState } from 'react';
import { api } from './api/apiResource';
import List from "./components/List"
import uuid from "react-uuid"

function App() {
const [tasks,settask]=useState([])
  const fetchData=async()=>{
    const data=await api.get("/todolist")
    
    settask(data.data)
  };

  useEffect(()=>{
    fetchData();
  },[tasks])

  const submittask= async(usertask)=>{
   const data= {
      id:uuid(),
      name:usertask,
      email:"mgmg@gmail.com",
      complete:false
  }
  await api.post("todolist",data)
  
  
}
const deletetask=async(id)=>{
  
    await api.delete(`/todolist/${id}`)
  

}
const updatetask=async(id,complete)=>{
  
  await api.patch(`/todolist/${id}`,{complete})


}

  return (
   <div className='mx-auto mt-5 w-50'>
    <Form submittask={submittask}/>
    
   <List tasks={tasks} deletetask={deletetask} updatetask={updatetask}/>
   </div>
  );
}

export default App;
