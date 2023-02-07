import axios from "axios"


export const udateTastk =  (id: string, body: any, setTask: React.Dispatch<React.SetStateAction<any[]>>) => {
    axios
    .put(`https://viniTodo-production.up.railway.app/task/${id}`, body)
    .then( (res) => {
        // setTask('')
        // alert('tarefa adicionada')
    })
    .catch( (err) => {
        console.log(err)
    })
}