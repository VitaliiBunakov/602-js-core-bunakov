const {validateEmail} = require('../../service/emailValidate.service')
const {validatePass} = require('../../service/passValidation.service')
const {validateUserName} = require('../../service/userNameValidation.service')


module.exports = (req, res, next) => {

    console.log('user validate midwar starts')
    if(!validateUserName(req.body.name)) {
        throw new Error('Name is invalid');
    }
    if(!validateEmail(req.body.email)){
        throw new Error('E-mail is invalid');

    }
    if(!validatePass(req.body.password) ){
        throw new Error('Password is invalid');
    }
    console.log('user validate midwar done ok')
    next();
};