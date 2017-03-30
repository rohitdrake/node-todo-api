const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to mongo database');
  }
  console.log('connected to MongoDB sever');

  // db.collection('Todos').find({
  //   _id: new ObjectID('58dc92a21a0db966db494e71')
  // }).toArray().then((document)=>{
  //   console.log('Documents: ', document);
  // }, (err)=>{
  //   console.log('Unable to fetch documents: ', err);
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos counts: ${count}`);
  // }, (err)=>{
  //   console.log('Unable to fetch todos: ', err);
  // });

  db.collection('User').find({
    name: 'Rohit'
  }).toArray().then((document)=>{
    console.log(document);
  }, (err)=>{
    console.log(`Unable to fetch document: ${err}`);
  });

  // db.close();
});
