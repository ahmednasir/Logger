const client = require('../services/dbService').mongodbClient;
module.exports.getDataFromDB = (collectionName, dbName)=>{
    try {
        return new Promise(function (resolve, reject) {
            try {
                client.connect(function (err, db) {
                    if (err) {
                        console.error(err);
                        reject(false)
                    }
                    let dbo = db.db(dbName);
                    dbo.collection(collectionName).find({}).toArray(function(err, result) {
                        if (err) throw err;
                        console.log(result);
                        resolve(result);
                        db.close();
                    });
                });
            } catch (error) {
                console.error(error);
                reject(false)
            }
        })
    }catch (e) {
        console.error(e);
        return false;
    }
};


module.exports.getErrorLogs = (schema)=>{
    return new Promise((resolve, reject)=>{
        schema.find({}, function(err,result){
            console.log(err)
            console.log(result)
            resolve(result)
        })
    })
    
}
