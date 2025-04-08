import express from "express";
import pg from 'pg';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import bcrypt from 'bcrypt'

const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/", (req,res) =>{
    res.render("home.ejs");
})

app.get("/signup", (req,res) =>{
    res.render("signup.ejs");
})

app.get("/signin",(req,res) =>{
    res.render("login.ejs");
})

// app.post("/signup", async (req,res) =>{
//     const firstName = req.body.firstName;
//     const LastName = req.body.lastName;
//     const email = req.body.email;
//     const password = req.body.password;
//     const confirmPassword = req.body.Confirmpassword;

//     const result = await db.query("select * from userdata where email = $1",[email]);
//     if(result.rows.length > 0){
//         res.send("Email already exists 😎");
//     }
//     else{
//         if (password == confirmPassword)
//         {   
//             const data = await db.query("insert into userdata (first_name,last_name,email,password) values ($1,$2,$3,$4)",
//                 [firstName,LastName,email,password]
//             )
//             res.render("home.ejs");
//         }
//         else{
//             res.send("Password and Confirm Password does not match 😓");
//         }
//     }
// })

// app.post("/login", async (req,res) =>{
//     const email = req.body.email;
//     const password = req.body.password;
//     const result = await db.query("select * from userdata where email = $1",
//         [email]);
//     if(result.rows.length > 0)
//     {
//         const dbPassword = await result.rows[0];
//         if(password == dbPassword.password)
//         {
//             res.render("home.ejs");
//         }
//         else{
//             res.send("Invalid Email or Password 🤔");
//         }
//     }
//     else{
//         res.send("No Such user exists 🤔");
//     }
// })

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})