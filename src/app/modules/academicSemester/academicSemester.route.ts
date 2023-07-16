import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterValidation } from './academicSemester.validation';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(academicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemesterController
);
router.patch(
  '/:id',
  validateRequest(academicSemesterValidation.updateAcademicSemesterZodSchema),
  AcademicSemesterController.updateSemesterController
);
router.get('/:id', AcademicSemesterController.getSingleSemesterController);

router.get('/', AcademicSemesterController.getAllSemesterController);

export const SemesterRoutes = router;
