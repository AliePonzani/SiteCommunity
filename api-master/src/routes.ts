import { Router, Request, Response } from "express";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { AuthVendedorController } from "./controllers/user/AuthVendedorController";
import { CreateUserConstroller } from "./controllers/user/CreateUserController";
import { CreateVendedorConstroller } from "./controllers/user/CreateVendedorController";
import { GetVendedorServer } from './Services/user/GetVendedorServer';
import { GetVendedoresServer } from "./Services/user/GetVendedoresServer";

const router = Router();
const getVendedorServer = new GetVendedorServer();
const getVendedoresServer = new GetVendedoresServer();

router.post('/cadastroMorador', new CreateUserConstroller().handle)

router.post('/cadastroVendedor', new CreateVendedorConstroller().handle)

router.post('/loginMorador', new AuthUserController().handle);

router.post('/loginVendedor', new AuthVendedorController().handle);

router.get('/vendedores/:email', async (req, res) => {
  await getVendedorServer.execute(req, res);
});

router.get('/vendedores', async (req, res) => {
  await getVendedoresServer.execute(req, res);
});

router.put('/vendedores/:email', async (req, res) => {
  await getVendedorServer.execute(req, res);
});

export { router };