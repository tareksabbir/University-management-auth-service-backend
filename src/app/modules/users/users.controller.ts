import { Request, Response } from 'express'
import usersService from '../users/users.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await usersService.createUsers(user)
    res.status(200).json({
      success: true,
      message: 'user created successfully!',
      data: result,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Filed to create user ',
    })
  }
}

export default {
  createUser,
}
