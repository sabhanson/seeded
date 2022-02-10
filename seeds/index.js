const sequelize = require("../config/connection");
// const {users,plants,comments,upvotes} = require('../seeds');
const {User,Plant,Comment,Upvote} = require("../models");

const users = [
    {
        username: "sabthegoodwitch",
        password: 'fsdfasgasdfg',
        email: 'sabhanson7@gmail.com'
    },
    {
        username: "plantasia",
        password: 'jkfhahjksd',
        email: 'isaac.petersen5@gmail.com'
    },
    {
        username: "bryophytebb",
        password: 'kjlsdfhsssad',
        email: '425megs@gmail.com'
    },
    {
        username: "kony2012",
        password: 'sdfasdf',
        email: 'andrewtranmsw@gmail.com'
    }
]

const plants = [
    {
        title:"Golden Pothos",
        caption:"it's cool",
        UserId:1
    },
    {
        title:"Wandering Jew",
        caption:"this name is derogatory maybe",
        UserId:2
    },
    {
        title:"Megbert",
        caption:"thick thighs, brown eyes",
        UserId:3
    },
    {
        title:"Lancifolia",
        caption:"rattlesnake",
        UserId:4
    },
]

const comments = [
    {
        content: "from sab to meg",
        PlantId: 3,
        UserId: 1
    },
    {
        content: "from meg to andrew",
        PlantId: 4,
        UserId: 3
    },
    {
        content: "from andrew to isaac",
        PlantId: 2,
        UserId: 4
    },
    {
        content: "from isaac to sab",
        PlantId: 1,
        UserId: 2
    }
]

const upvotes = [
    {
        isUpvote: true,
        PlantId: 1,
        UserId: 2
    },
    {
        isUpvote: false,
        PlantId: 2,
        UserId: 3
    },
    {
        isUpvote: true,
        PlantId: 3,
        UserId: 4
    },
    {
        isUpvote: true,
        PlantId: 4,
        UserId: 1
    },
]



const seed = async ()=>{
    await sequelize.sync({force:false});
    await User.bulkCreate(users,{individualHooks:true});
    await Plant.bulkCreate(plants,{individualHooks:true});
    await Comment.bulkCreate(comments,{individualHooks:true});
    await Upvote.bulkCreate(upvotes,{individualHooks:true});
    console.log("all seeded!")
    process.exit(0);
}

seed();