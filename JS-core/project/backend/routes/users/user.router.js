const {Router} = require('express');
const userRouter =  new Router();

const {userController} = require('../../controllers')
const {userValidMidlwar} = require('../../middlewars/index')

userRouter.get('', userController.getAllUsers);
userRouter.get('/:user_identifier', userController.getUser);

userRouter.post('',userValidMidlwar, userController.createUser);
userRouter.delete('/:user_identifier', userController.deleteUser);
userRouter.put('', userController.updateUser);






module.exports = userRouter;


