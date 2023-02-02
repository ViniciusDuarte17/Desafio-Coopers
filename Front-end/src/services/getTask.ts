import axios from "axios"



export const getTask = (setTask: React.Dispatch<React.SetStateAction<any[]>>) => {
   
    axios
    .get(`http://localhost:3003/task/`)
    .then( (response) => {
        setTask(response.data.task)
    })
    .catch( (err) => {
        console.log(err)
    })
}