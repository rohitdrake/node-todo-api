const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to mongo database');
  }
  console.log('connected to MongoDB sever');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("58dca9f21a0db966db4955ed")
  },
  {
    $set:{
      name: 'Rohit'
    },
    $inc:{
      age: 1
    }
  },
  {
    returnOriginal: false
  }).then((response)=>{
    console.log(response);
  });


  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("58dca6251a0db966db4953f4")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // },{
  //     returnOriginal: false
  //   }).then((result)=>{
  //   console.log(result);
  // });


  //db.close();
});
