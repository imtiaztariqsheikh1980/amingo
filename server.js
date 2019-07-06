
var bodyParser = require('body-parser')
const express = require('express');
const app = express();
const User=require('./models/User');
const mongoose=require('mongoose');

const ds="mongodb+srv://imtiaztariq:radiohead1!@cluster0-ud6lk.mongodb.net/test?retryWrites=true&w=majority"

mongoose
.connect(ds,{})
.then(()=>console.log("Db Connected"))
.catch ( err =>console.log(err));

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req,res) => res.json({
	msg: "Hello! Amigo part 2"
}));

app.post('/users',(req,res) => {

	const newUser=new User(({
		name:req.body.name,
		email:req.body.email,
		password:req.body.password
	}))

	newUser
	.save()
	.then(user=>res.json(user))
	.catch(err=>console.log(err))

});

app.get('/users',(res,req) =>{

	User.find()
	.then(user=>res.json(users))
	.catch(err=>console.log(err))
	

})


// Body parser middleware
//app.use(express.urlencoded());
//
/* GET home page. */

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));