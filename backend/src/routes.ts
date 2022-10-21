import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { GetUserController } from "./controllers/GetUserController";
import { GetTagController } from "./controllers/GetTagController";
import multer from "multer";
import { multerConfig } from "./config/multer";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const profileUserController = new ProfileUserController();
const listUsers = new ListUsersController();
const getUserController = new GetUserController();
const getTagController = new GetTagController();

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/users", multer(multerConfig).single("profilePhoto"), createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle)
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle);
router.get("/tags", ensureAuthenticated, listTagsController.handle);
router.get("/profile", ensureAuthenticated, profileUserController.handle);
router.get("/users", ensureAuthenticated, listUsers.handle);
router.get("/user", ensureAuthenticated, getUserController.handle);
// router.get("/tag", ensureAuthenticated, getTagController.handle);
router.get("/tag", getTagController.handle);

export { router };