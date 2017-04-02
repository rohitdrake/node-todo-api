const {ObjectID} = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');



let app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{

  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  }, (e)=>{
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res)=>{
     Todo.find().then((todos) => {
       res.send({todos});
     }, (e)=>{
       res.status(400).send(e);
     });
});

app.get('/todos/:id', (req, res)=>{
  let id = req.params.id;
  if(!ObjectID.isValid(id)){
    res.status(404).send('ID passed is not valid');
    return console.log('Id passed is not valid');
  }
  User.findById(id).then((todo)=>{
    if(!todo){
    res.status(400).send('todo not found in our database')
    return console.log('todo not found in our database');
    }
    res.send(todo)
  }, (e)=>{
    res.status(404)
  }).catch((e)=>{
    res.status(400).send('Some problem occured');
    console.log('Errorrrrrrrr!');
  });

});

app.listen(port, ()=>{
  console.log(`Started on port ${port}`);
});

module.exports = {app};
