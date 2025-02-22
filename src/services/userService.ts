import {
  User,
  getUsers,
  addUser,
  findUserById,
  findUserByName,
  findUserByNameAndId,
  updateUser,
  deleteUser,
} from "../models/userModel";

export const getAllUsers = () => getUsers();

export const createUser = (user: Omit<User, "id">) => addUser(user);

export const getUserById = (id: number) => findUserById(id);

export const getUsersByName = (name: string) => findUserByName(name);

export const getUsersByNameAndId = (name: string, id: number) =>
  findUserByNameAndId(name, id);

export const updateUserById = (id: number, updatedUser: Partial<User>) =>
  updateUser(id, updatedUser);

export const removeUser = (id: number) => deleteUser(id);
