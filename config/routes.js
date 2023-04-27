const express = require('express')
const routes = express.Router()

let dataBase = [
    {Nome:'Matheus'},{Nome:'Maria'},{Nome:'Paulo'},{Nome:'João'}
  ]
  
  // Buscar dados
  routes.get('/',(req,res) =>{
      return res.json(dataBase)
  })
  
  //Inserir dados
  routes.post('/add',(req,res) => {
      const body = req.body
  
      if(!body){
          return res.status(400).end()
      }
  
      dataBase.push(body)
  
      return res.json(body)
  })

module.exports = routes

