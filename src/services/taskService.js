import axios from "axios";

export const fetchTasksFromAPI = async()=>{

    const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=15")
    return response.data.map((task)=>({
        id:task.id,
        title:task.title,
        description:"Sample description",
        status:task.completed ? "completed":"todo",
    }))
}