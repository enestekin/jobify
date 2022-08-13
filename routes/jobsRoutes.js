import express from 'express';
const router = express.Router();

import {
  createJob,
  getAllJobs,
  showStats,
  updateJob,
  deleteJob,
} from '../controller/jobsController.js';

router.route('/').post(createJob).get(getAllJobs);
router.route('/stats').get(showStats);
router.route('/:id').delete(deleteJob).patch(updateJob);

export default router;
