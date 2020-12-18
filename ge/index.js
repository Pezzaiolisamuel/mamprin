const express = require('express');
const app = express();
const PORT= 1000;
const path = require('path');

//add ejs
app.set('view engine', 'ejs');
//ejs look inside client views instead only view
app.set('views', path.join(__dirname, 'client/views'));
// grab css code from client
app.use(express.static(__dirname + '/client'));

app.get('/', (req, res)=>{
 res.render("germano.ejs")
})

app.listen(PORT, ()=>{
    console.log('Listening on port ' + PORT)
});