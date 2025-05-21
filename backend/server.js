const express=require('express');
require('dotenv').config();
const aiRoutes=require('./src/routes/ai.routes');
const cors=require('cors');

const app=express();
const port= process.env.PORT || 3000;

app.use(cors());


app.use(express.json());
app.use('/api',aiRoutes);

app.get('/',(req,res)=>{
    res.send('Hello World!');
});

app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});