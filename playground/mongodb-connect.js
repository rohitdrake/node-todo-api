const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to mongo database');
  }
  console.log('connected to MongoDB sever');
  db.collection('User').insertOne({
    name: 'Rohit',
    age: 14,
    location: 'Palo Alto'
  }, (err, result)=>{
    if(err) return console.log('unable to insert todo');
    // console.log(JSON.stringify(result.ops, undefined, 2));
    console.log(result.ops[0]._id.getTimestamp());
  });
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, res)=>{
  //   if(err){
  //   return  console.log('Unable to insert todo ', err);
  //   }
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });
  db.close();
});
