"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUser = exports.updateUserById = exports.getUsersByNameAndId = exports.getUsersByName = exports.getUserById = exports.createUser = exports.getAllUsers = void 0;
const userModel_1 = require("../models/userModel");
const getAllUsers = () => (0, userModel_1.getUsers)();
exports.getAllUsers = getAllUsers;
const createUser = (user) => (0, userModel_1.addUser)(user);
exports.createUser = createUser;
const getUserById = (id) => (0, userModel_1.findUserById)(id);
exports.getUserById = getUserById;
const getUsersByName = (name) => (0, userModel_1.findUserByName)(name);
exports.getUsersByName = getUsersByName;
const getUsersByNameAndId = (name, id) => (0, userModel_1.findUserByNameAndId)(name, id);
exports.getUsersByNameAndId = getUsersByNameAndId;
const updateUserById = (id, updatedUser) => (0, userModel_1.updateUser)(id, updatedUser);
exports.updateUserById = updateUserById;
const removeUser = (id) => (0, userModel_1.deleteUser)(id);
exports.removeUser = removeUser;
