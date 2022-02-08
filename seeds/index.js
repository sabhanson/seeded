const sequelize = require("../config/connection");
const {users,plants,comments,upvotes} = require('../seeds')
const {User,Plant,Comment,Upvote} = require("../models")

const seed = async ()=>{
    await sequelize.sync({force:true});
    await User.bulkCreate(users,{individualHooks:true});
    await Comment.bulkCreate(comments);
    await Plant.bulkCreate(plants);
    await Upvote.bulkCreate(upvotes);
    console.log("all seeded!")
    process.exit(0);
}

seed();