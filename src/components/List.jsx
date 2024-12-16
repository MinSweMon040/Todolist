import React from 'react'
import Card from './Card'

const List = ({tasks,deletetask,updatetask }) => {
  return (
    <div>
        
        
        <ol className="list-group">
        <Card tasks={tasks} deletetask={deletetask} updatetask={updatetask}/>
        </ol>
    </div>
  )
}

export default List