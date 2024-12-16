/* eslint-disable no-restricted-globals */
import React from "react";

const Card = ({ tasks,deletetask,updatetask }) => {
  const baseindeletetask=(id)=>{
    if(confirm("Are you sure s paw?")){
      deletetask(id)
    }
   
  }
  return (
    <div>
      {
      tasks.map((item, index) => (
        <div key={item.id} className={item.complete?"list-group-item w-100 mt-4 shadow-sm bg-success text-decoration-line-through":"list-group-item w-100 mt-4 shadow-sm"}>
          <div className="row">
            <div className="col-9 offset-1">
              <input type="checkbox" className="me-3" onClick={()=>updatetask(item.id,!item.complete)} checked={item.complete}/>
              {item.name}</div>
            <div className="col-2">
              <i onClick={()=>baseindeletetask(item.id)} className="fa-solid fa-trash"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
