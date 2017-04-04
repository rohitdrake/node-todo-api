const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


let id = '58de003d9208ab04fe8a148a';

User.findById({
  _id: id
}).then((todo)=>{
  if(!todo)
  return console.log('ID not found');
  console.log('todo\n', todo);
}).catch((e)=>console.log(e));

// let id = '58df4b74ae563d08cc0a4870';
//
// Todo.find({
//       _id: id
//     }).then((todos)=>{
//       console.log('Todos\n', todos);
//     });
//
// Todo.findOne({
//       _id: id
//     }).then((todo)=>{
//       console.log('Todo\n', todo)
//     });
//
// Todo.findById(id).then((todo)=>{
//   if(!todo)
//   return console.log('ID not found!');
//   console.log('Todo By Id\n', todo)
// }).catch((e)=>console.log(e));
