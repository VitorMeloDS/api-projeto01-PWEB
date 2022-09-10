import { Request, Response } from "express";
import connection from "../../config/db";

export class CadastroController {
  public async dadosUsuario(req: Request, res: Response) {
    const conn = connection;
    let erro!:any;
    let result: any;

    const cadastro = req.body

    result = await conn
      .table('tb_usuario')
      .returning('*')
      .insert({
        email: cadastro.email,
        senha: cadastro.senha,
        nome: cadastro.nome,
        sobrenome: cadastro.sobrenome,
        telefone: cadastro.telefone,
        empresa: cadastro.empresa,
      }).then((data: any) => {
        console.log(data)
        result = data
      }).catch((e: any) => {
        erro = e.message
      })

    return erro ? res.status(500).send(erro) : res.status(200).send(result)
  }
}
