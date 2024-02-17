import express from "express";
// import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import { getNotificationCount,notificationData} from "../controllers/notificationController.js";

const router = express.Router();

// GET notification count for a worker
router.get("/notifications/count/:workId", getNotificationCount);
// notificationData
router.get("/notifications/:workId", notificationData);


export default router;
