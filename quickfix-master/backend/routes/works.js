import express from 'express'
import { createWork, deleteWork, getAllWork, getAvailableWorks, getSingleWork, getWorkBySearch, getWorkCount, updateWork } from '../controllers/workController.js'
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();


//create new work
router.post('/',verifyAdmin,createWork);
//update new work
router.put('/:id',verifyAdmin,updateWork);
//delete new work
router.delete('/:id',verifyAdmin,deleteWork);
//get single work
router.get('/:id',getSingleWork);
//get all work
router.get('/',getAllWork);
//get work by search
router.get("/search/getWorkBySearch", getWorkBySearch);


router.get("/search/getAvailableWorks", getAvailableWorks);

router.get("/search/getWorkCount", getWorkCount);



export default router;