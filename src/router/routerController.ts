import { Request, Response, Router } from "express";
import { LoginController } from "../http/controller/loginController";

const routerController: Router = Router();

routerController.post('/login', (req: Request, res: Response) => {
  const authlogin = new LoginController();
  authlogin.dadosUsuario(req, res);
});

routerController.post('/cadastro', (req: Request, res: Response) => {

})


export const router: Router = routerController;
