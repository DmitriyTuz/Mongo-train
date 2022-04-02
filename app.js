                        // ГЛАВА 6. NODE.JS И MANGODB

                        // 6.1 НАЧАЛО РАБОТЫ С MANGODB

/*const MongoClient = require("mongodb").MongoClient;

// создаем объект MongoClient и передаем ему строку подключения
const mongoClient = new MongoClient("mongodb://localhost:27017/", { useUnifiedTopology: true });
mongoClient.connect(function(err, client){

    if(err){
        return console.log(err);
    }
    // взаимодействие с базой данных
    client.close();
});*/

// метод insertOne();
/*const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });

mongoClient.connect(function(err, client){

    const db = client.db("usersdb");
    const collection = db.collection("users");
    let user = {name: "Tom", age: 23};
    collection.insertOne(user, function(err, result){

        if(err){
            return console.log(err);
        }
        console.log(result.ops);
        client.close();
    });
});*/

                // 6.2 ДОБАВЛЕНИЕ И ПОЛУЧЕНИЕ ДАННЫХ В MANGODB

/*// метод insertMany()
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });

let users = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}];

mongoClient.connect(function(err, client){

    const db = client.db("usersdb");
    const collection = db.collection("users");

    collection.insertMany(users, function(err, results){

        console.log(results);
        client.close();
    });
});*/

/*// для получения данных из коллекции применяется метод find()
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });

mongoClient.connect(function(err, client){

    const db = client.db("usersdb");
    const collection = db.collection("users");

    if(err) return console.log(err);

    collection.find().toArray(function(err, results){

        console.log(results);
        client.close();
    });
});*/

// може отфильтровать например по имени
/*const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });

mongoClient.connect(function(err, client){

    const db = client.db("usersdb");
    const collection = db.collection("users");

    if(err) return console.log(err);

    collection.find({name: 'Tom'}).toArray(function(err, results){

        console.log(results);
        client.close();
    });
});*/

// можем ещё + добавить фильтрацию по возрасту
/*const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });

mongoClient.connect(function(err, client){

    const db = client.db("usersdb");
    const collection = db.collection("users");

    if(err) return console.log(err);

    collection.find({name: 'Tom', age: 23}).toArray(function(err, results){

        console.log(results);
        client.close();
    });
});*/

// метод findOne()
/*const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });

mongoClient.connect(function(err, client){


    if(err) return console.log(err);

    const db = client.db("usersdb");
    db.collection("users").findOne(function(err, doc){

        console.log(doc);
        client.close();
    });
});*/

// также можно использовать фильтрацию
/*const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });

mongoClient.connect(function(err, client){


    if(err) return console.log(err);

    const db = client.db("usersdb");
    db.collection("users").findOne({name:'Bob'}, function(err, doc){

        console.log(doc);
        client.close();
    });
});*/

                      // 6.3 УДАЛЕНИЕ ДОКУМЕНТОВ В MANGODB

// метод deleteMany()
/*// удалим всех пользователей с именем "Tom"
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });

mongoClient.connect(function(err, client){


    if(err) return console.log(err);

    const db = client.db("usersdb");
    db.collection("users").deleteMany({name:'Tom'}, function(err, result){

        console.log(result);
        client.close();
    });
});*/

// метод deleteOne
/*const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });

mongoClient.connect(function(err, client){


    if(err) return console.log(err);

    const db = client.db("usersdb");
    db.collection("users").deleteOne({name:'Bob'}, function(err, result){

        console.log(result);
        client.close();
    });
});*/

// метод findOneAndDelete()
/*const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });

mongoClient.connect(function(err, client){


    if(err) return console.log(err);

    const db = client.db("usersdb");
    db.collection("users").findOneAndDelete({age: 21}, function(err, result){

        console.log(result);
        client.close();
    });
});*/

// метод drop() удаляет всю коллекцию
/*const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });

mongoClient.connect(function(err, client){


    if(err) return console.log(err);

    const db = client.db("usersdb");
    db.collection("users").drop(function(err, result){

        console.log(result);
        client.close();
    });
});*/

                    // 6.4 ОБНОВЛЕНИЕ ДОКУМЕНТОВ В MANGODB

// метод findOneAndUpdate
/*const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });
  
let users = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}];
mongoClient.connect(function(err, client){
     
    if(err) return console.log(err);
      
    const db = client.db("usersdb");
    const col = db.collection("users");
    col.insertMany(users, function(err, results){
             
        col.findOneAndUpdate(
            {age: 21}, // критерий выборки
            { $set: {age: 25, name: 'Dima'}}, // параметр обновления
            function(err, result) {
              console.log(result);
            });
        col.find().toArray(function(err,result){
                console.log(result);
                client.close();
            });
    });
});*/

/*// если хотим получить не старое а новое состояние
// изменённого документа
const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });
  
let users = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}];
mongoClient.connect(function(err, client){
     
    if(err) return console.log(err);
      
    const db = client.db("usersdb");
    const col = db.collection("users");
    col.insertMany(users, function(err, results){
             
        col.findOneAndUpdate(
            {name: 'Bob'}, // критерий выборки
            { $set: {name: 'Leha'}}, // параметр обновления
            {
              returnOriginal: false  // доп. опции обновления
            },
            function(err, result) {
              console.log(result);
            });
        col.find().toArray(function(err,result){
                console.log(result);
                client.close();
            });
    });
});*/

/*// метод updateMany()
const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });
  
mongoClient.connect(function(err, client){
     
    if(err) return console.log(err);
      
    const db = client.db("usersdb");
    const col = db.collection("users");

        col.updateMany(
            {name: 'Bob'},
            { $set:{name: 'Sam'}},
            function(err, result) {
              console.log(result);
            }
        );

        col.find().toArray(function(err,result){
                console.log(result);
                client.close();
            });
    });*/

/*// метод updateOne
const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useUnifiedTopology: true });
  
mongoClient.connect(function(err, client){
     
    if(err) return console.log(err);
      
    const db = client.db("usersdb");
    const col = db.collection("users");

        col.updateOne(
            {name: 'Sam'},
            { $set:{name: 'Tom Junior', age: 33}},
            function(err, result) {
              console.log(result);
            }
        );

        col.find().toArray(function(err,result){
                console.log(result);
                client.close();
            });
    });*/

                    // 6.5 EXPRESS И MONGODB

/*const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;

const app = express();
const jsonParser = express.json();

const mongoClient = new MongoClient("mongodb://localhost:27017/", { useUnifiedTopology: true });

let dbClient;

app.use(express.static(__dirname + "/public"));

mongoClient.connect(function(err, client){
    if(err) return console.log(err);
    dbClient = client;
    app.locals.collection = client.db("usersdb").collection("users");
    app.listen(3000, function(){
        console.log("Сервер ожидает подключения...");
    });
});

app.get("/api/users", function(req, res){

    const collection = req.app.locals.collection;
    collection.find({}).toArray(function(err, users){

        if(err) return console.log(err);
        res.send(users)
    });

});
app.get("/api/users/:id", function(req, res){

    const id = new objectId(req.params.id);
    const collection = req.app.locals.collection;
    collection.findOne({_id: id}, function(err, user){

        if(err) return console.log(err);
        res.send(user);
    });
});

app.post("/api/users", jsonParser, function (req, res) {

    if(!req.body) return res.sendStatus(400);

    const userName = req.body.name;
    const userAge = req.body.age;
    const user = {name: userName, age: userAge};

    const collection = req.app.locals.collection;
    collection.insertOne(user, function(err, result){

        if(err) return console.log(err);
        res.send(user);
    });
});

app.delete("/api/users/:id", function(req, res){
    console.log(req.params.id);
    const id = new objectId(req.params.id);
    const collection = req.app.locals.collection;
    collection.findOneAndDelete({_id: id}, function(err, result){

        if(err) return console.log(err);
        let user = result.value;
        console.log('result = ', result);
        res.send(user);
    });
});

app.put("/api/users", jsonParser, function(req, res){

    if(!req.body) return res.sendStatus(400);
    const id = new objectId(req.body.id);
    const userName = req.body.name;
    const userAge = req.body.age;

    const collection = req.app.locals.collection;
    collection.findOneAndUpdate({_id: id}, { $set: {age: userAge, name: userName}},
         {returnOriginal: false },function(err, result){

        if(err) return console.log(err);
        const user = result.value;
        res.send(user);
    });
});

// прослушиваем прерывание работы программы (ctrl-c)
process.on("SIGINT", () => {
    dbClient.close();
    process.exit();
});*/

                             // 6.6 MONGOOSE

/*const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// установка схемы
const userScheme = new Schema({
    name: String,
    age: Number
});

// подключение
mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true });

const User = mongoose.model("User", userScheme);
const user = new User({
    name: "Bill",
    age: 41
});

user.save(function(err){
    mongoose.disconnect();  // отключение от базы данных

    if(err) return console.log(err);
    console.log("Сохранен объект", user);
});*/

// т.к. save возвращает промис можно и так
/*//user.save()
.then(function(doc){
    console.log("Сохранен объект", doc);
    mongoose.disconnect();  // отключение от базы данных
})
.catch(function (err){
    console.log(err);
    mongoose.disconnect();
});*/

                    // 6.7 ОПРЕДЕЛЕНИЕ СХЕМЫ В MONGODB

                        // ЗНАЧЕНИЕ ПО УМОЛЧАНИЮ

/*// С помощью параметра default мы можем указать
// значение по умолчанию для свойства
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScheme = new Schema({
  name: {
      type: String,
      default: "NoName"
  },
  age: {
      type: Number,
      default: 22
  }
});

mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true });

const User = mongoose.model("User", userScheme);

// создадим 3х юзеров
const user1 = new User(); // name - NoName, age - 22
const user2 = new User({name: "Tom"}); // name - Tom, age - 22
const user3 = new User({age:34}); // name - NoName, age - 34

user3.save(function(err){
    mongoose.disconnect();  // отключение от базы данных

    if(err) return console.log(err);
    console.log("Сохранен объект", user3);
});*/

                              // ВАЛИДАЦИЯ

/*const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// подключение
mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true });

// установка схемы
const userScheme = new Schema({
    name: {
        type: String,
        required: true,
        minlength:3,
        maxlength:20
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max:100
    },

},
//    { versionKey: false } // так можно отключить версию документа
);
const User = mongoose.model("User", userScheme);
const user = new User({name: "Lid", age: 50});

user.save(function(err){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log("Сохранен объект user", user);
});*/

                        // 6.8 CRUD В MONGOOSE

                        // СОЗДАНИЕ ДОКУМЕНТОВ

/*// кроме метода save() есть ещё User.create()
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// подключение
mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true });

// установка схемы
const userScheme = new Schema({
    name: {
        type: String,
        required: true,
        minlength:3,
        maxlength:20
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max:100
    }
});
const User = mongoose.model("User", userScheme);
User.create({name: "Tom", age: 34}, function(err, doc){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log("Сохранен объект user", doc);
});*/

                          // ПОЛУЧЕНИЕ ДАННЫХ

/*// метод find()
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true });

const userScheme = new Schema({name: String, age: Number}, {versionKey: false});
const User = mongoose.model("User", userScheme);

User.find({}, function(err, docs){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log(docs);
});*/

/*// изменим код для получения только тех
// пользователей, у которых имя - Tom
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true });

const userScheme = new Schema({name: String, age: Number}, {versionKey: false});
const User = mongoose.model("User", userScheme);

User.find({name: 'Tom'}, function(err, docs){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log(docs);
});*/

/*// метод findOne()
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true });

const userScheme = new Schema({name: String, age: Number}, {versionKey: false});
const User = mongoose.model("User", userScheme);

User.findOne({name: 'Tom'}, function(err, docs){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log(docs);
});*/

/*// метод findById()
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true });

const userScheme = new Schema({name: String, age: Number}, {versionKey: false});
const User = mongoose.model("User", userScheme);

const id = "60f72c12aca0d6121c767239";
User.findById(id, function(err, docs){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log(docs);
});*/

                          // УДАЛЕНИЕ ДАННЫХ

/*// метод deleteMany()
// например удалим всех пользователей, у которых
// возраст равен 33
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true });

const userScheme = new Schema({name: String, age: Number}, {versionKey: false});
const User = mongoose.model("User", userScheme);

User.deleteMany({age: 33}, function(err, docs){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log(docs);
});*/

/*// метод deleteOne()
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true });

const userScheme = new Schema({name: String, age: Number}, {versionKey: false});
const User = mongoose.model("User", userScheme);

User.deleteOne({name: 'Tom'}, function(err, docs){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log('Удалён пользователь', docs);
});*/

/*// метод findOneAndDelete()
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true });

const userScheme = new Schema({name: String, age: Number}, {versionKey: false});
const User = mongoose.model("User", userScheme);

User.findOneAndDelete({name: 'Bill'}, function(err, docs){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log('Удалён пользователь', docs);
});*/

/*// метод findByIdAndDelete()
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true });

const userScheme = new Schema({name: String, age: Number}, {versionKey: false});
const User = mongoose.model("User", userScheme);

const id = "60f886ff5454e91a7489324a";
User.findByIdAndDelete(id, function(err, docs){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log('Удалён пользователь', docs);
});*/

                        // ИЗМЕНЕНИЕ ДАННЫХ

/*// методы updateOne() и updateMany()(аналогичен)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true });

const userScheme = new Schema({name: String, age: Number}, {versionKey: false});
const User = mongoose.model("User", userScheme);

User.updateOne({name: 'Tom'}, {name: 'Tom Smith'}, function(err, docs){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log(docs);
});*/

/*// метод findByIdAndUpdate()
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/usersdb",
                { useUnifiedTopology: true, useNewUrlParser: true, useFindModify: false });

const userScheme = new Schema({name: String, age: Number}, {versionKey: false});
const User = mongoose.model("User", userScheme);

const id = '60f886e90a1a341fa0bbb099';
User.findByIdAndUpdate(id, {name: "Bilbo Baggins", age: 111}, {new: true}, function(err, docs){

    mongoose.disconnect();
    if(err) return console.log(err);
    console.log('Обновлённый объект', docs);
});*/

/*// метод findOneAndUpdate()
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/usersdb",
                { useUnifiedTopology: true, useNewUrlParser: true, useFindModify: false });

const userScheme = new Schema({name: String, age: Number}, {versionKey: false});
const User = mongoose.model("User", userScheme);

User.findOneAndUpdate({name: "Sam"}, {name: 'Bill', age: 24}, {new: true}, function(err, docs){

    mongoose.disconnect();
    if(err) return console.log(err);
    console.log('Обновлённый объект', docs);
});*/

/*const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true });

const userScheme = new Schema({name: String, age: Number}, {versionKey: false});
const User = mongoose.model("User", userScheme);

User.find(function(err, docs){
    mongoose.disconnect();

    if(err) return console.log(err);

    console.log(docs);
});*/

                        // 6.9 EXPRESS И MONGOOSE

const mongoose = require("mongoose");
const express = require("express");
const Schema = mongoose.Schema;
const app = express();
const jsonParser = express.json();

/*                        var SimSchema = new Schema({
                            msisdn     : { type : String , unique : true, required : true, dropDups: true },
                            imsi       : { type : String , unique : true, required : true, dropDups: true },
                            status     : { type : Boolean, default: true},
                            signal     : { type : Number },
                            probe_name : { type:  String , required : true }
                        });*/

const userScheme = new Schema({
    name : { type : String },
    age : { type : Number },
    email : { type : String, unique : true }
});

const User = mongoose.model("User", userScheme);

app.use(express.static(__dirname + "/public"));

mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }, function(err){
    if(err) return console.log(err);
    app.listen(3000, function(){
        console.log("Сервер ожидает подключения...");
    });
});

app.get("/api/users", function(req, res){

    User.find({}, function(err, users){

        if(err) return console.log(err);
        res.send(users)
    });
});

app.get("/api/users/:id", function(req, res){

    const id = req.params.id;
    User.findOne({_id: id}, function(err, user){

        if(err) return console.log(err);
        res.send(user);
    });
});

app.post("/api/users", jsonParser, function (req, res) {

    if(!req.body) return res.sendStatus(400);

    const userName = req.body.name;
    const userAge = req.body.age;
    const userEmail = req.body.email;
    const user = new User({name: userName, age: userAge, email: userEmail});

    user.save(function(err){
        if(err) return console.log(err);
        res.send(user);
    });
});

app.delete("/api/users/:id", function(req, res){

    const id = req.params.id;
    User.findByIdAndDelete(id, function(err, user){

        if(err) return console.log(err);
        res.send(user);
    });
});

app.put("/api/users", jsonParser, function(req, res){

    if(!req.body) return res.sendStatus(400);
    const id = req.body.id;
    const userName = req.body.name;
    const userAge = req.body.age;
    const userEmail = req.body.email;
    const newUser = {age: userAge, name: userName, email: userEmail};

    User.findOneAndUpdate({_id: id}, newUser, {new: true}, function(err, user){
        if(err) return console.log(err);
        res.send(user);
    });
});

                            // ГЛАВА 7. MySQL

                     // (продолжение в папке MYSQLAPP)
