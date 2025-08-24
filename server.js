const express = require('express');
const app = express();
app.use(express.json());

const genres = [
    {id:1, name:"Adventure"},
    {id:2, name:"Action"},
    {id:3, name:"Comedy"},
    {id:4, name:"Sci-fi"},
    {id:5, name:"Romance"}
]

app.get('/api/genres',(req,res)=>{
     res.send(genres);
})

app.get('/api/genres/:id',(req,res)=>{
    const genre = genres.find(c=>c.id === parseInt(req.params.id));
    if(!genre) res.status(404).send("Wrong Request");
    res.send(genre);
})

app.post('/api/genres',(req,res)=>{
    const genre = {
        id:genres.length+1,
        name:req.body.name
    }
    genres.push(genre);
    res.send(genre);

});

app.put('/api/genres/:id',(req,res)=>{
   const genre = genres.find(c=>c.id === parseInt(req.params.id));
    if(!genre) res.status(404).send("Wrong Request"); 


    if(!req.body.name || req.body.name.length < 3) res.status(401).json({error:"Name Required"});

    genre.name = req.body.name
    res.json(genre);
});

app.delete('/api/genres/:id',(req,res)=>{
   const genre = genres.find(c=>c.id === parseInt(req.params.id));
    if(!genre) res.status(404).send("Wrong Request"); 


    if(!req.body.name || req.body.name.length < 3) res.status(401).json({error:"Name Required"});

    genre = genres.filter(g=>g.id !== genre.id)
    res.json({message:"Deleted Sucessfully",deleted:genre});
});



const PORT = process.env.port || 3000;

app.listen(PORT,()=>console.log("Server Running On 3000"));
