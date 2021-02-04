# Employee Search App


## User Story
As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



[Link to Deployed app](https://wyliedavid1984.github.io/employeeSearch/)

## Description 

It is a progressive web application. It can be used in a offline environment or online.

This project is a fullstack application that tracks the users money. The application uses node.js, express, MongoDB and mongoose. It also makes use of indexedDB to store things while offline. To add in functionality while off line it makes use of service worker application and manifest to apply offline native app look.  

GIVEN a user is on Budget App without an internet connection
WHEN the user inputs a withdrawal or deposit
THEN that will be shown on the page, and added to their transaction history when their connection is back online.

### Table Of Contents

-[Description](#Description)

-[Technologies](#Technologies)
   
-[Usages](#Usages)

-[Visuals](#Visuals)

-[Credits](#Credits)

-[License](#License) 

## Technologies

<details>
<summary>Expand to see technologies used</summary>

## Javascript

Javascript was use to make most of the program between nodeJS and jQuery. A part of the front end functionality was provided. We added in a service worker and also a manifest for native app purposes. In order for the data to persist after coming back on line we also introduce indexedDB which is a local database storage. In using this we are able to store the offline data and then insert it in the cloud database storage when the application comes back online.

### Mongodb

This was the application that we use to store our data, it is a noSql data base. It uses BSON objects when storing data or Binary Javascript Object Notation. When working locally, the robo app help us to see the data base and what was been stored in the collections as well as the break down of the object being stored.

### JQuery

I used jquery to help grab the data that the user input. It also gets other elements on the page, so that they can be manipulated. Each function that created has a corresponding route on the backend to help with the manipulation of the data being selected by the jQuery.

### Node

I used node to initialize package.json. After the initialization, I added mongoose, morgan, and express.  Also used node to make a connection with the data base.  We also use it to spin up a server instance. 

### NPM

I used npm to install the following dependencies mongoose, morgan, compression, and express. 

#### **Mongoose**

I used this to query data from our mongo data base. I also used it to create a schema. 

#### **Express**

Express made coding this application much easier. I made use of the express function through a variable named route.  It helped to reduce the amount of code needed to make requests and responses.  I built routes and stored them in the routes files. I used the express router function to make it easier to set up the requests. 

#### **Morgan**

Morgan was just used for our terminal to add a little color and make the readability of the back end console log just a little easier to read

#### **Compression**

Compression helped with compressing down bigger js files.  It takes all the code and help to minify it.

## HTML

This was provided to us, there were three html pages. Just used HTML5 and also used cdn of "charts" to help display the data on the stats page

## CSS

This was provided for us. It was use to position and style some of the html layouts.

</details>

## Usages

AS AN avid traveller, I WANT to be able to track my withdrawals and deposits with or without a data/internet connection. SO THAT my account balance is accurate when I am traveling.

## Installation Instructions

This app is deployed. If you do want to add it locally. After forking and cloning the repository, you'll just need to run the following code:

    npm i

### Visuals

<details>
<summary>Screen Shots and Gif with Video link</summary>

![Before Data](./public/assets/img/beforeData.png)

![With Data](./public/assets/img/withData.png)


Click on the gif to be linked to the video

[![Gif of video](./public/assets/img/budget.gif)](https://drive.google.com/file/d/12Aggf5kWRxrdSZCopDG7waL74Cc5FT8E/view)


</details>

## Credits

* [MongoDB](https://docs.mongodb.com/manual/tutorial/query-documents/)
* [npm Documents](https://www.npmjs.com/)
* [Express.js](https://expressjs.com/)
* [Mongoose](https://mongoosejs.com/docs/api)
* [Stack Overflow](https://stackoverflow.com/)
* [W3Schools](https://www.w3schools.com/sql/default.asp)
* [Vault photo](https://www.vectorstock.com/royalty-free-vector/bank-vault-background-with-money-gold-vector-20834249)
* [Google tutorial](https://developers.google.com/web/ilt/pwa/introduction-to-service-worker-slides)
* [Icon maker](https://makeappicon.com/download/c15e4bd2493f458791e2c13cb3c61044)
* [Icon origin-Pinterest](https://www.pinterest.com/pin/333547916153293823/)
## License

MIT License

Copyright (c) 2020 David Wylie

## Contact

* [David Wylie Github](https://github.com/wyliedavid1984)