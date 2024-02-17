

import express from "express";
import { userlogin, userregister ,workerregister,workerlogin} from "../controllers/authController.js";

const router = express.Router()

router.post('/userregister', userregister);
router.post('/userlogin', userlogin);

router.post('/workerregister', workerregister);
router.post('/workerlogin', workerlogin);


export default router