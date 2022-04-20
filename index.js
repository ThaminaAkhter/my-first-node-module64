

const express=require('express');
const cors=require('cors');
const app=express();
const port=process.env.Port||5000;
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('look mama,i did it');
})

const users=[
    {id:1, name:'shabana', email:'sabana@gmail.com', phone:'01888888'},
    {id:2, name:'Shabnoor', email:'Shabnoor@gmail.com', phone:'01888888'},
    {id:3, name:'Shuchorita', email:'Shuchorita@gmail.com', phone:'01888888'},
    {id:4, name:'Aliya', email:'Aliya@gmail.com', phone:'01888888'},
    {id:5, name:'Mahima', email:'Mahima@gmail.com', phone:'01888888'},
    {id:6, name:'Faiza', email:'Faiza@gmail.com', phone:'01888888'},
    {id:7, name:'Purnima', email:'Purnima@gmail.com', phone:'01888888'},
]
app.get('/users',(req,res)=>{
    //filter by query/search parameter
    if(req.query.name){
     const search=req.query.name.toLowerCase();
     const matched=users.filter(user=>user.name.toLowerCase().includes(search))
     res.send(matched);
    }
    else{
        res.send(users);
    }
    
})
app.get('/user/:id',(req,res)=>{
    console.log(req.params);
    const id=parseInt (req.params.id);
    //const user=users[id];
    const  user=users.find(u => u.id === id);
    res.send(user);
})


app.post('/user',(req,res)=>{
    //console.log(req.body);
    const user=req.body;
    user.id=users.length+1;
    users.push(user);
    res.send(user);
})
app.listen(port,()=>{
  console.log('listening to', port);
})