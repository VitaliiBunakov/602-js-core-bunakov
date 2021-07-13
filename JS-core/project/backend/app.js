const express = require('express');
const expressBars = require('express-handlebars')
const path = require('path');
const PORT = 5000;
const app = express();


app.use(express.urlencoded());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, 'public','views')));
app.engine('.hbs',expressBars({
    extname : '.hbs',
    defaultLayout: false
}))

app.set('view engine', '.hbs');
app.set('views',path.join(__dirname, 'public','views' ));

const {userRouter,deviceRouter} = require('./routes');

app.use('/users', userRouter);
app.use('/devices', deviceRouter);

app.get('/',(req, res)=>{
    res.render('main');

})

app.get('/404',(req, res)=>{
    res.render('404');

})








app.listen(5000, ()=> console.log('Listen at port 5000'))