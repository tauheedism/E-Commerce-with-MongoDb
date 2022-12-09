const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://tauheedism:TauheedSiddiqui@cluster0.6kuoqed.mongodb.net/shop?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected!');
      _db=client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
    });
};

const getDb=()=>{
  if (_db) {
    return _db
  }
  throw 'No database found!'
}

exports.mongoClient= mongoConnect;
exports.getDb=getDb
