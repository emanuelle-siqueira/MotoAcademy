const express = require('express')

const app = express();
app.use(express.json())
const users = [
    {id: 1, name: "Emanuelle"},
    {id: 2, name: "Euclides"},
]

app.get('/usuarios', (req,res)=> {
    res.json(users);
})

app.post('/usuarios', (req,res) => {
    const name = req.body.name;
    const id = users.length+1;
    const newUser = {id, name}
    users.push(newUser);
    res.status(201).json(newUser);
})

//http://localhost:3000/usuarios

app.get('/', (req,res) => {
    res.send({message: "Olá mundo"})
})

app.listen(3000)

//pessoa -> requisição -> site _> resposta