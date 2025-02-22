import { Request, Response, RequestHandler } from "express";
import * as userService from "../services/userService";

// Obtener todos los usuarios
export const getAllUsers: RequestHandler = (req: Request, res: Response): void => {
  try {
    const users = userService.getAllUsers();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener usuario por ID
export const getUserById: RequestHandler = (req: Request, res: Response): void => {
  try {
    const user = userService.getUserById(Number(req.params.id));
    res.status(200).json(user);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

// Crear usuario
export const createUser: RequestHandler = (req: Request, res: Response): void => {
  try {
    const { name, email } = req.body;
    
    if (!name || !email) {
      res.status(400).json({ message: "Name and email are required" });
    }

    const newUser = userService.createUser({ name, email });

    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar usuario
export const updateUser: RequestHandler = (req: Request, res: Response): void => {
  try {
    const id = Number(req.params.id);
    const updatedUser = req.body;
    
    if (!updatedUser || Object.keys(updatedUser).length === 0) {
      res.status(400).json({ message: "At least one field must be updated" });
    }

    const user = userService.updateUserById(id, updatedUser);

    res.status(200).json(user);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

// Eliminar usuario (soft delete)
export const deleteUser: RequestHandler = (req: Request, res: Response): void => {
  try {
    const id = Number(req.params.id);
    const result = userService.removeUser(id);
    
    res.status(200).json(result);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};