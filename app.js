const express = require('express')

const app = express()
const path = require('path');
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public', '/table.html'));
});

// app.get('/voice', function (req, res) {
//     res.sendFile('./voice.html');
// });

app.get('/movement',function(req,res){
    res.sendFile(path.join(__dirname, './public', '/movement.html'));
});

app.get('/voice',function(req,res){
    res.sendFile(path.join(__dirname, './public', '/voice.html'));
});
// app.get('/movement',function(req,res){
//     res.redirect('/?badge_id='+req.query.badge_id+'&dataset_id='+req.query.dataset_id);
// });
  
  


app.listen(3000,()=>{

    console.log('App listening on port 3000')

});