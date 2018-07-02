const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=> {
    if(err){
        return console.log('Unable to connect to database');
    }
        console.log('Connected to MongoDB Server')
        const db = client.db('TodoApp')

    //     db.collection('Todos').findOneAndUpdate({
    //         _id: new ObjectID('5b3a9a86fa80c8ca08c6cc08')
    //
    //     }, {
    //         $set: {
    //             complete: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    //     })
    //
    //     //client.close();
    // });

    db.collection('users').findOneAndUpdate({
        _id: new ObjectID('5b3a6e00fa80c8ca08c6c569')
    }, {
        $set: {
            name: 'Joseph'
        },
        $inc: {
            age: 1
        }
    }, { returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
});
