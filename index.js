import express from 'express'

const app = express;

const port = 3000;

app.listen(port, ()=>{
    console.log("listening to port "+ port);
})

app.get("/", (req,res)=>{
    
    const name = "DevAshura"

    const agent = 700;
    res.render()
})