# seeded
live site: https://seeded-app.herokuapp.com/

## Description
seeded is a platform where plant owners can share their nurseries with other enthusiasts. Users can upload pictures from their own collection or view pictures shared by other users. 

## Usage
To use our platform, simply create a new account and start sharing photos of your favorite plants. You can see your photos under 'My Greenhouse' or go to the 'Community Garden' to view other users plants. If you like what you see, give the picture an 'uproot' or leave them a comment! Our serch bar also allows you to look up accounts by username so you can keep up with your favorite collections. 

Happy seeding!

=====================================================================================================================================================

# For Developers

## Installation
Interested in a template for your own social media platform? 

1. Clone this repo to your local machine
2. Be sure to add a .env file and include 'DB_NAME' and 'DB_USER'
3. Open VSCode and run the command 'npm install' in the built-in terminal to install the necessary node packages
4. To create the database and tables, login to MySQL in the terminal using 'mysql -u root -p'
5. Once logged in, run 'SOURCE 'db/schema.sql' then exit MySQL
6. If you want to use the existing seeds, run 'npm run seed' in the terminal or wait until you've added your own seeds 
7. To view in browser, run 'node server.js' in the terminal, open the browser and visit 'http://localhost:3000'

The site is now running, feel free to tweak as needed!

## Tech Used
* Cloudinary
* Bootstrap
* Handlebars
* Express
* bcrpyt
* Heroku


## Contributers 
* Isaac Petersen | <a href="http://www.github.com/idpetersen" target="_blank" class="followmePLZ">Github</a>
* Sabrina Hanson | <a href="http://www.github.com/sabhanson" target="_blank">Github</a>
* Andrew Tran | <a href="http://www.github.com/andrewtranmsw" target="_blank">Github</a>
* Megan McLean | <a href="http://www.github.com/425megs" target="_blank">Github</a>