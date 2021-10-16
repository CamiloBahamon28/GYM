const express = require('express');
const methodOverride=require('method-override')
const session =require('express-session')


//Inicializaciones
const app = express()
app.use(express.json());
require('./database')

//settings
app.set('port', process.env.PORT || 8000)

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
	secret: 'mysecretapp',
	resave:true,
	saveUninitialized:true
}))

//Global Variables


//Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
app.use(require('./routes/users.routes'));

//Static Files


//Server is listen
app.listen(app.get('port'), () => {
	console.log('Server on port', app.get('port'));
} )