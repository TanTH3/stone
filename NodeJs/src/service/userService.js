import e from 'express';
import db from '../models/index';
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

let hashUserPassword = (password) => {
    return new Promise(async (res, rej) => {
        try {
            var hashPassword = await bcrypt.hashSync(password, salt);
            res(hashPassword);
        } catch (e) {
            rej(e);
        }
    });
};

let handleUserLogin = (email, password) => {
    return new Promise(async (res, rej) => {
        try {
            let userData = {};
            let isExit = await checkUserEmail(email);
            if (isExit) {
                // user already exits
                let user = await db.User.findOne({
                    attributes: ['email', 'roleId', 'password'],
                    where: { email: email },
                    raw: true,
                });
                if (user) {
                    // compare password
                    let check = await bcrypt.compareSync(password, user.password); // false
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = 'OK';
                        delete user.password;
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong psas';
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = `User;s not found`;
                }
            } else {
                userData.errCode = 1;
                userData.errMessage = `Your's email isn't exist`;
            }
            res(userData);
        } catch (e) {
            rej(e);
        }
    });
};

let checkUserEmail = (userEmail) => {
    return new Promise(async (res, rej) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail },
            });
            if (user) {
                res(true);
            } else {
                res(false);
            }
        } catch (e) {
            rej(e);
        }
    });
};

let getAllUsers = (userId) => {
    return new Promise(async (res, rej) => {
        try {
            let users = '';
            if (userId === 'ALL') {
                users = await db.User.findAll({
                    attributes: {
                        exclude: ['password'],
                    },
                });
            }
            if (userId && userId !== 'ALL') {
                users = await db.User.findOne({
                    attributes: {
                        exclude: ['password'],
                    },
                    where: { id: userId },
                });
            }
            res(users);
        } catch (e) {
            rej(e);
        }
    });
};

let createNewUser = (data) => {
    return new Promise(async (res, rej) => {
        try {
            let check = await checkUserEmail(data.email);
            if (check === true) {
                res({
                    errCode: 1,
                    message: 'your email is already is used',
                });
            }
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                gender: data.gender === '1' ? true : false,
                roleId: data.role,
                phoneNumber: data.phoneNumber,
            });
            res({
                errCode: 0,
                errMessage: 'OK',
            });
        } catch (e) {
            rej(e);
        }
    });
};
module.exports = {
    handleUserLogin,
    getAllUsers,
    createNewUser,
};
