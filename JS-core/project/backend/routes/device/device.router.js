const {Router} = require('express');
const deviceRouter = new Router();

deviceRouter.get('',(req,res ) => {
    res.end('get device');

})

module.exports = deviceRouter;