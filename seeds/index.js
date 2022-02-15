const sequelize = require("../config/connection");
const { User } = require("../models");

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


const seed = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(users, { individualHooks: true });
  console.log("all seeded!");
  process.exit(0);
};

seed();
