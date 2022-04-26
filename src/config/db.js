const mongoose=require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb://shravya:shravya_123@cluster0-shard-00-00.bv2kc.mongodb.net:27017,cluster0-shard-00-01.bv2kc.mongodb.net:27017,cluster0-shard-00-02.bv2kc.mongodb.net:27017/pet-boarding?ssl=true&replicaSet=atlas-d23zqz-shard-0&authSource=admin&retryWrites=true&w=majority")
}