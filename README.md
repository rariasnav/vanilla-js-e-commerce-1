# vanilla-js-e-commerce-1

This is a simple e-commerce project built using JavaScript, HTML, and CSS.

# How to run this project:

Follow these steps to set up and run the project on your local machine:

1- Install the python packages: $ pipenv install

2- Create a '.env' file based on the .env.example: $ cp .env.example .env

3- Install 'dotenv': $ npm install dotenv

4- Install 'ejs': $ npm install ejs

5- Run the '$ npm init -y' command to create a new package.json file with the default values(if it doesn't already exist).

6- Install 'live-server' by running: $ npm install live-server --save-dev

7- Set the startup script in your package.json:
    Ensure your `package.json` looks like this:

    {
    "name": "vanilla-js-e-commerce",
    "version": "1.0.0",
    "description": "",
    "type": "module",
    "main": "index.js",
    "scripts": {
        "start": "npm run generate-html && live-server",
        "generate-html": "node generate-html.mjs"
    },
    "devDependencies": {
        "live-server": "^1.2.2"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
        "dotenv": "^16.4.5",
        "ejs": "^3.1.10"
    }
}

8- Run the project: $ 'npm start' in your terminal.

By following these steps, you will be able to set up and run the e-commerce project on your local machine.

## Technologies Used
- JavaScript
- HTML
- CSS
- Node.js
- EJS
- Live Server

## Project Structure
- `index.template.html`: The EJS template file.
- `generate-html.mjs`: Script to generate the final `index.html`.
- `config.mjs`: Configuration file to load environment variables.
- `.env`: Environment variables file.
- `.env.example`: Example of the environment variables file.