import React, { useState } from 'react'

const AddTaskModal = ({onAdd,onClose}) => {
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")

    const handleSubmit=()=>{
        if(!title)return
        onAdd({
            id:Date.now(),
            title,
            description,
            status:"todo"
        })
        setTitle("")
        setDescription("")
        onClose()
    }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
        <div className='bg-white p-6 rounded w-96'>
            <h2 className="text-lg font-bold mb-4">Add Task</h2>
            <input
            type="text"
            placeholder='Title'
            className='w-full mb-3 p-2 border rounded'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
            <textarea
            placeholder='Description'
            className='w-full mb-3 p-2 border rounded'
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            />
            <div className='flex justify-end gap-2'>
                <button className='px-4 py-2 border rounded' onClick={onClose}>Cancel</button>
                <button className='px-4 py-2 bg-blue-500 text-white rounded' onClick={handleSubmit}>Add</button>
            </div>
        </div>
    </div>
  )
}

export default AddTaskModal