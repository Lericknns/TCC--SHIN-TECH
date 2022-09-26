import { userLogin } from './../repository/userloginRepository.js'

import { Router } from 'express';
const server = Router();

server.post('/usuario/login', async (req, resp) => {
    try {
        const {email, senha} = req.body;
        const response = await userLogin(email,senha);
        resp.send(response)
        console.log(response)
    }   catch(err){
        resp.status(400).send({
            erro: 'Ocorreu um erro ao efetuar o login'
        });
    }
})


export default server;