"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.findUserByNameAndId = exports.findUserByName = exports.findUserById = exports.addUser = exports.getUsers = void 0;
let users = []; // Base de datos en memoria
let nextId = 1; // Autoincremental para IDs
// Obtener todos los usuarios no eliminados
const getUsers = () => users.filter(user => !user.isDeleted);
exports.getUsers = getUsers;
// Agregar un nuevo usuario
const addUser = (user) => {
    if (users.some(u => u.email === user.email)) {
        throw new Error("El usuario ya existe.");
    }
    const newUser = Object.assign(Object.assign({}, user), { id: nextId++, isDeleted: false });
    users.push(newUser);
    return newUser;
};
exports.addUser = addUser;
// Buscar usuario por ID
const findUserById = (id) => {
    const user = users.find(u => u.id === id && !u.isDeleted);
    if (!user)
        throw new Error("Usuario no encontrado.");
    return user;
};
exports.findUserById = findUserById;
// Buscar usuarios por nombre
const findUserByName = (name) => {
    return users.filter(u => u.name.includes(name) && !u.isDeleted);
};
exports.findUserByName = findUserByName;
// Buscar usuarios por nombre e ID
const findUserByNameAndId = (name, id) => {
    return users.filter(u => u.name.includes(name) && u.id === id && !u.isDeleted);
};
exports.findUserByNameAndId = findUserByNameAndId;
// Actualizar usuario
const updateUser = (id, updatedUser) => {
    const userIndex = users.findIndex(u => u.id === id && !u.isDeleted);
    if (userIndex === -1)
        throw new Error("Usuario no encontrado.");
    users[userIndex] = Object.assign(Object.assign({}, users[userIndex]), updatedUser);
    return users[userIndex];
};
exports.updateUser = updateUser;
// Eliminar usuario (soft delete)
const deleteUser = (id) => {
    const userIndex = users.findIndex(u => u.id === id && !u.isDeleted);
    if (userIndex === -1)
        throw new Error("Usuario no encontrado.");
    users[userIndex].isDeleted = true;
    return { message: "Usuario eliminado correctamente." };
};
exports.deleteUser = deleteUser;
