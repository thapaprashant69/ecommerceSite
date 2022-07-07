const express = require('express');
const app = express();
// const router = require('./productAPI');
const products = require('./data.json');
const hbs = require('hbs');

app.use('/static',express.static(__dirname + '/public'));

hbs.registerPartials( __dirname + '/views/partials');
app.set('view engine','hbs');

app.get('/',(req,res) => {
    res.render('index',{products});
})

app.get('/:productID',(req,res)=>{
    const {productID} = req.params;
    const product = products.find((singleProd)=>{
        if(singleProd.id == Number(productID)){
            return singleProd;
        }
    })
    res.render('singleProduct',{product});
})

//This is SSR so no API endpoint provided
// app.use('/api/products',router);

app.listen(5000,()=>{
    console.log("Server started and listening at port 5000...");
})