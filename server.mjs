//Imports
import express from 'express'; 

const app = express();
const PORT = 3000;

//Setups

//Middleware
function logReq(req,res,next){
    console.log(`req received ${req.method} made to '${req.ur}'`)
    next();
    
}

app.use();

//Routes

app
    .route("/")
    .get((req,res) =>{
        res.send('Testing Post route');
    })

    .post((req,res) =>{
        res.send('Testing Post route');
    })

app
    .route("/:id")

    .put((req,res) =>{
        console.log(req.params);
        res.send(`Testing put route: param value is ${req.params.id}`);
    })

    .delete((req,res) =>{
        console.log(req.params);
        res.send(`Testing delete route: param value is ${req.params.id}`);
    })




// //read-get
// app.get('/',(req, res) => {
//     res.send('Testing,Home path');
//     res.json();
// })

// //POST
// app.post('/',(req,res) =>{
//     res.send('Testing Post route');
// })
// //Put
// app.put('/:id',(req,res) =>{
//     console.log(req.params);
//     res.send(`Testing Put route: param value is ${req.params.id}`);
// })
// //Delete
// app.delete('/:id',(req,res) =>{
//     console.log(req.params);
//     res.send(`Testing delete route: param value is ${req.params.id}`);
// })
//Global Error Handling Middleware

//server listener
app.listen(PORT,() => {
    console.log(`Server Running on Port: ${PORT}`);
})