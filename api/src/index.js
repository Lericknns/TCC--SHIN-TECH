import 'dotenv/config'

import { userLogin } from './repository/userloginRepository.js'
import loginController from './controller/userloginController.js'

import express from "express"
import cors from "cors"

const server = express();
server.use(cors());
server.use(express.json());
server.use(loginController);

server.use(userLogin)

const port = process.env.PORT;

server.listen(process.env.PORT,
                () => console.log(`Api está online na porta ${port}`)); 