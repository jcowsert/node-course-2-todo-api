const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=> {
    if(err){
        return console.log('Unable to connect to database');
    }
        console.log('Connected to MongoDB Server')
        const db = client.db('TodoApp')

        // deleteMany
        // db.collection('Todos').deleteMany({text: 'Each Lunch'}).then((result) => {
        //     console.log(result)
        // });
        //deleteOne
        // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
        //     console.log(result);
        // })

        //findOneandDelete
        // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        //     console.log(result);
        // });

        // db.collection('users').deleteMany({name: 'Joseph'}).then((result) => {
        //     console.log(result);
        //
        // });
        db.collection('users').deleteOne({_id: new ObjectID('5b2ae70d8d9a222b4c81a64a')}).then((result) => {
            console.log(result);
        });

        //client.close();
    });
