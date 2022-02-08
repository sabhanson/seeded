//User by ID
//Basic home page/landing page -- 
//Login page
//Sign-up page
//Profile Page
const express = require("express");
const router = express.Router();
const { User, Plant, Comment, Upvote} = require("../models");
const withAuth = require("../utils/withAuth")