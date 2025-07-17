import express from 'express';
import { getAllArtworks } from '../controllers/artworkController.js';

const router = express.Router();

router.get('/', getAllArtworks);

export default router;