import express from 'express';
import { protectroute } from '../middleware/protectroute.js';
import { createPost, deletePost, commentOnPost, likeUnlikePost , getAllPost} from '../controllers/post.controller.js';


const router = express.Router();

router.get('/all', protectroute, getAllPost);
router.post("/create", protectroute, createPost);
router.post('/like/:id', protectroute, likeUnlikePost)
router.post('/comment/:id', protectroute, commentOnPost)
router.delete("/:id", protectroute, deletePost)


export default router;
 