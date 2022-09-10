import { Request, Response, Router } from "express";
import { CadastroController } from "../http/controller/cadastroController";
import { LoginController } from "../http/controller/loginController";

const routerController: Router = Router();

routerController.post('/login', (req: Request, res: Response) => {
  const authlogin = new LoginController();
  authlogin.dadosUsuario(req, res);
});

routerController.post('/cadastro', (req: Request, res: Response) => {
  const cadastro = new CadastroController();
  cadastro.dadosUsuario(req, res)
})


export const router: Router = routerController;
