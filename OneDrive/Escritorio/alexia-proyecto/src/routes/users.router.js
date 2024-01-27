import { Router } from 'express';
import userModel from '../models/user.model.js';

const usersRouter = Router();

usersRouter
.get('/', async (request, response) => {
    try {
    const users = await userModel.find({});
    response.json({
        status: 'success',
        result: users,
    });
    } catch (error) {
    console.log(error);
    }
})
.post('/', async (request, response) => {
    try {
    const { body } = request;
    const result = await userModel.create(body);
    response.json({
        status: 'success',
        result: result,
    });
    } catch (error) {
    console.log(error);
    }
})
.get('/:uid', async (request, response) => {
    try {
    const { uid } = request.params;
    const user = await userModel.findOne({ _id: uid });
    response.json({
        status: 'success',
        result: user,
    });
    } catch (error) {
    console.log(error);
    }
})
.put('/:uid', async (request, response) => {
    try {

    const { uid } = request.params;
    response.send(`Actualizando usuario con UID: ${uid}`);
    } catch (error) {
    console.log(error);
    }
})
.delete('/:uid', async (request, response) => {
    try {
    const { uid } = request.params;
    const result = await userModel.findByIdAndUpdate(uid, { isActive: false });
    response.json({
        status: 'success',
        result: result,
    });
    } catch (error) {
    console.log(error);
    }
});

export { usersRouter };


