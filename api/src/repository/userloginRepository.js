import { con } from './connection.js'

export async function userLogin(email, senha) {
    const comando = 
    `SELECT id_usuario       id,
            ds_email         email,
            nm_usuario       nome
    FROM TB_USUARIO
    WHERE ds_email          = ?
    AND   ds_senha          = ? `

    const [linhas] = await con.query(comando, [email, senha])
    return linhas.affectedRows;
}