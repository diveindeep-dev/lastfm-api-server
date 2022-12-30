import express from 'express';
import * as searchController from './controllers/search.controller.js';

const router = express.Router();

router.put('/cover', searchController.getCover);

export default router;
