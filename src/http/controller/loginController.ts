import { Request, Response } from "express";
import connection from "../../config/db";

export class LoginController {
  public async dadosUsuario(req: Request, res: Response) {
    const conn = connection;
    let erro!:any;
    let user: any;

    const login = atob(req.body.headers.Authorization?.split(' ')[1]).split(':')

    await conn
      .table('tb_usuario')
      .select('email', 'senha')
      .where({
        email: login[0],
        senha: login[1]
      })
      .first().then((data: any) => {
        console.log(data)
        user = data
      }).catch((e: any) => {
        console.log(e)
        erro = e.message;
      })

    return erro ? res.status(500).send(erro) : res.status(200).send(user)
  }
}
