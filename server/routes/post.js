import express from 'express'
import { createPost, getPosts } from '../controllers/posts.js';

const router = express.Router();

// https:localhost:5000/post

router.get('/',getPosts);
router.get('/',createPost);


export default router;