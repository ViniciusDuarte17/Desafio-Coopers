import axios from "axios"


export const udateTastk = (id: string, body: any, setTask: React.Dispatch<React.SetStateAction<any[]>>) => {
    axios
    .put(`http://localhost:3003/task/${id}`, body)
    .then( (res) => {
        setTask(res.data.task)
        console.log(id)
    })
    .catch( (err) => {
        console.log(err)
    })
}