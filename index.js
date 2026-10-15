import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/users',(req,res)=>{
    res.send(user)
})

const user =[
    { id:1, name:'Rezwan Kabir',email:'rezwan9932@gamil.com'},
    { id:2, name:'Md:Baigid Bostami',email:'baigid332@gamil.com'},
    { id:3, name:'MD.Latiful Khabir',email:'rezwan9@gamil.com'},
    { id:4, name:'Md.Munna ',email:'rezw2@gamil.com'},
    {id:5,name:'Badhon Mondol',email:'badhon@22gamil.com'}
]

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
})