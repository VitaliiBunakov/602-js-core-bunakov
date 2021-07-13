const express = require('express');
const expressBars = require('express-handlebars')
const path = require('path')

const PORT = 5000;

const appOldHbs = express();


appOldHbs.use(express.static(path.join(__dirname, 'static', 'views')));
appOldHbs.use(express.json());
appOldHbs.use(express.urlencoded());
appOldHbs.engine('.hbs',expressBars({
    extname : '.hbs',
    defaultLayout: false
}))

appOldHbs.set('view engine', '.hbs');
appOldHbs.set('views',path.join(__dirname, 'static','views' ));


appOldHbs.get('/',(req, res)=>{
    res.render('main',{
        name : 'Victor'
    })
})

appOldHbs.get('/register',(req, res)=>{
    res.render('register')

})

appOldHbs.post('/register',(req, resp)=>{
    console.log(req.body);
    resp.end('all good');}

)







appOldHbs.listen(PORT,(err)=>{
     if (err){
         console.log(err);
     } else {
         console.log(`Listen on port: ${PORT}`)
     }
})
