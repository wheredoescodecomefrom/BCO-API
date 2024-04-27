import { Request, Response } from 'express';
import * as userService from './users.service';
import User from './users.model';

// Create a new user
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = await userService.createUser(req.body as User);
    res.status(201).json({ id: userId });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create user' });
  }
};

// Get a user by ID
export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const userId = parseInt(req.params.id);
  try {
    const user = await userService.getUserById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch user' });
  }
};

// Get all users
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users' });
  }
};

// Update a user
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const userId = parseInt(req.params.id);
  try {
    await userService.updateUser(userId, req.body);
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update user' });
  }
};

// Delete a user
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const userId = parseInt(req.params.id);
  try {
    await userService.deleteUser(userId);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete user' });
  }
};