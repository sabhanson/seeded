const sequelize = require("../config/connection");
const { User, Plant, Comment } = require("../models");

const users = [
  {
    username: "sabthegoodwitch",
    password: "password",
    email: "sabhanson7@gmail.com",
  },
  {
    username: "plantasia",
    password: "password",
    email: "isaac.petersen5@gmail.com",
  },
  {
    username: "mossbb",
    password: "password",
    email: "425megs@gmail.com",
  },
  {
    username: "kony2012",
    password: "password",
    email: "andrewtranmsw@gmail.com",
  },
];

const plants = [
  {
    title: "Golden Pothos",
    caption: "it's cool",
    UserId: 1,
    file_name: "/assets/plant1.jpeg",
    upVote_counter: 2,
  },
  {
    title: "Tradescantia",
    caption: "i love this plant!!!!",
    UserId: 2,
    file_name: "/assets/plant2.jpeg",
    upVote_counter: 2,
  },
  {
    title: "Megbert",
    caption: "cool plant! :)",
    UserId: 3,
    file_name: "/assets/plant3.jpeg",
    upVote_counter: 0,
  },
  {
    title: "Lancifolia",
    caption: "rattlesnake",
    UserId: 4,
    file_name: "/assets/plant4.jpeg",
    upVote_counter: 5,
  },
];

const comments = [
  {
    content: "this is a nice thing",
    PlantId: 3,
    UserId: 1,
  },
  {
    content: "cute af",
    PlantId: 4,
    UserId: 3,
  },
  {
    content: "lemme prop??",
    PlantId: 2,
    UserId: 4,
  },
  {
    content: "send nodes! or else",
    PlantId: 1,
    UserId: 2,
  },
];

const seed = async () => {
  await sequelize.sync({ force: false });
  await User.bulkCreate(users, { individualHooks: true });
  await Plant.bulkCreate(plants, { individualHooks: true });
  await Comment.bulkCreate(comments, { individualHooks: true });
  console.log("all seeded!");
  process.exit(0);
};

seed();
