export interface User {
  id: number;
  name: string;
  email: string;
  isDeleted?: boolean; // Para soft delete
}

let users: User[] = []; // Base de datos en memoria
let nextId = 1; // Autoincremental para IDs

// Obtener todos los usuarios no eliminados
export const getUsers = () => users.filter(user => !user.isDeleted);

// Agregar un nuevo usuario
export const addUser = (user: Omit<User, "id">) => {
  if (users.some(u => u.email === user.email)) {
    throw new Error("El usuario ya existe.");
  }
  const newUser = { ...user, id: nextId++, isDeleted: false };
  users.push(newUser);
  return newUser;
};

// Buscar usuario por ID
export const findUserById = (id: number) => {
  const user = users.find(u => u.id === id && !u.isDeleted);
  if (!user) throw new Error("Usuario no encontrado.");
  return user;
};

// Buscar usuarios por nombre
export const findUserByName = (name: string) => {
  return users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()) && !u.isDeleted);
};

// Buscar usuarios por nombre e ID
export const findUserByNameAndId = (name: string, id: number) => {
  return users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()) && u.id === id && !u.isDeleted);
};

// Actualizar usuario
export const updateUser = (id: number, updatedUser: Partial<User>) => {
  const userIndex = users.findIndex(u => u.id === id && !u.isDeleted);
  if (userIndex === -1) throw new Error("Usuario no encontrado.");
  users[userIndex] = { ...users[userIndex], ...updatedUser };
  return users[userIndex];
};

// Eliminar usuario (soft delete)
export const deleteUser = (id: number) => {
  const userIndex = users.findIndex(u => u.id === id && !u.isDeleted);
  if (userIndex === -1) throw new Error("Usuario no encontrado.");
  users[userIndex].isDeleted = true;
  return { message: "Usuario eliminado correctamente." };
};