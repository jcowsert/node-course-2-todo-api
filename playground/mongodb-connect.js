const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=> {
    if(err){
        return console.log('Unable to connect to database');
    }
        console.log('Connected to MongoDB Server')
        const db = client.db('TodoApp')

        // db.collection('Todos').insertOne({
        //     text: 'Something to do',
        //     completed: false
        // }, (err, result) =>{
        //     if(err){
        //         return console.log('Unable to insert Todo', err);
        //     }
        //     console.log(JSON.stringify(result.ops, undefined, 2));
        // });

        //users (name, age, location)
        //
        // db.collection('users').insertOne({
        //     name: 'Joseph Cowsert',
        //     age: 33,
        //     location: 'Kansas'
        // },(err, result) =>{
        //     if(err){
        //         return console.log('Unable to insert user', err);
        //     }
        //     console.log(JSON.stringify(result.ops, undefined, 2))
        // })

        client.close();
    });
