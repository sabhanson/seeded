# Seeded 🪴 - Social Media Application [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
[Deployed Application](https://seed-ed.herokuapp.com/)

## Description
Seeded is a community-driven application for plant lovers and their plants.
Users can post pictures of plants to host in their `Greenhouse` and visit the `Community Garden` page to view other's plants. Users can `uproot` 🌱 plants to show that they "like" that plant. Users can also add and delete `comments` on particular plants.


## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Technology](#technology)
- [Questions](#questions)

## Installation  

### For Plant Lovers
Visit the [deployed webiste](https://seed-ed.herokuapp.com/) and sign up to create your account.

### For Developers
Interested in a template for your own social media platform? 

- Clone this repo to your local machine
- Be sure to add a .env file and include 'DB_NAME' and 'DB_USER'
- Open VSCode and run the command 'npm install' in the built-in terminal to install the necessary node packages
- To create the database and tables, login to MySQL in the terminal using 'mysql -u root -p'
- Once logged in, run 'SOURCE 'db/schema.sql' then exit MySQL
- If you want to use the existing seeds, run 'npm run seed' in the terminal or wait until you've added your own seeds 
- To view in browser, run 'node server.js' in the terminal, open the browser and visit 'http://localhost:3000'

The server is now running, feel free to modify the code to make changes. ✅
## Usage

Visit the [deployed site](https://seed-ed.herokuapp.com/).  
- Click the `Sign Up Now` button to create a new account.
- Click the `Log In` button to log in to an already existing account.
- Once logged in, click the `+` button to add a new plant post.
- The `Community Garden` button will direct you to the dashboard.
- Click the `My Greenhouse` button to navigate to your profile.
- Click your profile picture while on your Greenhouse to update your profile picture.
- Add `comments` by typing in the input field under plant images.
- Delete your own `comments` by clicking the 🗑️ next to your comment. (Comments can only be deleted by the author of the comment)
- Search for an existing user in the searchbar 🔎
- Click the 🌱 to `uproot` a plant (in other words, to "like" this plant)
- Be mindful, deleted plants and comments cannot be recovered! 

![GIF of deployed site usage](public/assets/Usage_Seeds.gif)  


## License
<p>
MIT License

  Copyright &copy; 2022 
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  </p>

## Tests
All tests were performed and passed by the developer team.

## Technology
* [Cloudinary](https://cloudinary.com/) Image API
* [Bootstrap](https://getbootstrap.com/) CSS Framework
* [HandlebarsJS](https://handlebarsjs.com/) template engine
* [Express](https://www.npmjs.com/package/express) npm package
* [bcrpyt](https://www.npmjs.com/package/bcrypt) npm package
* [Heroku](https://www.heroku.com/home) cloud application platform


## Questions
Contact the developers ⬇️
* Isaac Petersen [Github](http://www.github.com/idpetersen) | [Email](mailto:isaac.petersen5@gmail.com)
* Sabrina Hanson [Github](http://www.github.com/sabhanson) | [Email](mailto:sabhanson7@gmail.com)
* Andrew Tran [Github](http://www.github.com/andrewtranmsw) | [Email](mailto:andrewtranmsw@gmail.com)
* Megan McLean [Github](http://www.github.com/425megs) | [Email](mailto:425megs@gmail.com)