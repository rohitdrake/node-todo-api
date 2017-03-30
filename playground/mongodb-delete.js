const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to mongo database');
  }
  console.log('connected to MongoDB sever');

  // db.collection('Users').deleteMany({ name: 'Rohit' }).then((commandResult)=>{
  //   console.log(commandResult.result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID("58dcaa6b1a0db966db49561f")}).then((res)=>{
    console.log(res);
  });

  //deleteMany
  // db.collection('Todos').deleteMany({ text: 'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({ text: 'Eat Lunch'}).then((result)=>{
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=> {
  // //   console.log(result);
  // // });

  //db.close();
});
