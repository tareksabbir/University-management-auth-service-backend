import { Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';

const createSemesterController = catchAsync(
  async (req: Request, res: Response) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemesterService(
      academicSemesterData
    );
    res.status(200).json({
      success: true,
      message: 'Academic Semester created successfully!',
      data: result,
    });
  }
);

export const AcademicSemesterController = {
  createSemesterController,
};
