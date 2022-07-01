require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userSchema = require('./Models/userSchema');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
//app.use(express.json());


//const dbUrl = 'mongodb+srv://username:Password@cluster0.2wp8ctn.mongodb.net/Databasename?retryWrites=true&w=majority';

//Routes = 
//const category = require('./routes/category');

//Database Connection
console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL,{
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(()=>{
	app.get('/',(req,res)=>{
	res.send('Welcome to MongoDB');
});
	


app.post('/register',async (req,res)=>{
	try{
		
	const {
		name,
		mobileno,
		email,
		password,
		cnfpassword
	} = req.body;

	if(password === cnfpassword){
		const userData = new userSchema({
		name,
	mobileno,
email,
password,
cnfpassword
	});
	userSchema.save(err=>{
	if(err){
		console.log('Error');
	} else{
		res.render('register',{title:'Done',password:'',email:''});
	}
})
	} else{
	res.render('register',{title:'',password:'Password not match',email:''});		
	}
	res.send('Under Try Block');
	}catch(error){
		res.send('Undet Catch Block');
		//res.render('register',{title:'Error in code',password:'',email:''});
	}
});

app.post("/getsumdetails", function(req, res) {
 
  res.send("You will get a sum using this" + req.body.name);
})
	
console.log("Databaese connected Start Working")
}).catch((e)=>{
	console.log("Error :", e)
})


//Middleware
app.use(bodyParser.json());
app.use(cors());

//Routes
//app.use('/api',category);


// app.get('/',(req,res)=>{
// 	res.send('Welcome to NodeQuiz');
// });


const port = process.env.PORT || 8080;
app.listen(port,()=>console.log(`Listening on port ${port}`));
