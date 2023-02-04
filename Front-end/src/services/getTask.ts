import axios from "axios"



export const getTask = (setTask: React.Dispatch<React.SetStateAction<any[]>>) => {
   
    axios
    .get(`https://viniTodo-production.up.railway.app/task/`)
    .then( (response) => {
        setTask(response.data.task)
    })
    .catch( (err) => {
        console.log(err)
    })
}