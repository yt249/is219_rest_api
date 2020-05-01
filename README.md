# API Introduction and Setup an API Server with MySQL and Express

## Overview

In this project you will need to create a REST api and display the data in a jQuery Datatable.

[Assignment File and Install Instructions](restIntro.pdf)

### Videos
* 	[Video for the Project:](https://youtu.be/GEkrDLZLvY0)
* 	[What is an API - Part 1](https://www.youtube.com/watch?v=E1Xk5dk3Abc)
* 	[What is an API - Part 2 ](https://www.youtube.com/watch?v=LGNkFTE3DI8)

#### Note:  What is an API is for another course I made; however, it is identical information as to what you need.  It mentions C# but you could just replace C# with JavaScript.  Code is not what the video is about, its the general concepts and history of REST API.

### Reading(s)
* [What is the open API spec?](https://en.wikipedia.org/wiki/OpenAPI_Specification)
* [What is SOAP protocol?](https://www.guru99.com/soap-simple-object-access-protocol.html)
* [Comparison of REST and SOAP](https://www.c-sharpcorner.com/article/comparison-between-rest-and-soap-apis/)
* [REST API Explained](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/)
* [Another SOAP vs. REST Comparison](https://smartbear.com/blog/test-and-monitor/soap-vs-rest-whats-the-difference/)
* [Good critical comparison of GraphQL and REST](https://goodapi.co/blog/rest-vs-graphql)
* [Introduction to XML](https://www.w3schools.com/xml/xml_whatis.asp)
* [Introduction to JSON](https://www.google.com/search?client=safari&rls=en&q=introduction+to+json&ie=UTF-8&oe=UTF-8)
* [What is AJAX?](https://skillcrush.com/blog/what-is-ajax/)

### Part 1 – Get my code to work

This project is to setup a MySQL database and load it with cities data.  Then you need to create an express server to serve your static html files and send JSON data to your homepage to render a data table.  This project cannot run on GitHub pages because it has a server.  You will be using Docker to run your MySQL server, express is your API server, and express serves your static pages.  You will not use Browser Sync and I removed it for this assignment.  BrowserSync is good to know; however, in this assignment the main focus is the data from the server, and I set it up to use “NodeMon” to reload the front end and the server when files are changes.  Essentially, browser sync can’t automatically request data from the backend and that’s what we need for this.  You can find steps to setup my project at the end of this document.

### Part 2 – Build your own REST api with one of the following CSV files as the source:

https://people.sc.fsu.edu/~jburkardt/data/csv/csv.html

Create the REST API and the datatable view of that data.

Use this to convert 100 records of the CSV file to an SQL insert:
https://sqlizer.io/#/

https://codebeautify.org/csv-to-sql-converter
This one seems to work very well and does not seem to have a limit, but I haven’t tried it for the project.

#### Note: You can view and edit your CSV data in excel before you convert it, so you limit it to 100 records and can rename any fields, just save it as a CSV file.

## How to Submit your Project

### Create a new word document that includes the following:

1.	A link to your GitHub repository for a NEW project
2.	Submit screen shots of the following:
a.	The project showing that you can view YOUR data tables in WebStorm
b.	YOUR project running correctly in the browser displaying a data table
c.	A screen shot of Postman and YOUR data returned from the project.
d.	A screen shot of the browser console showing the XHR network request made from the browser when the page loads.

## References 
### Libraries Used:

* https://datatables.net
* https://expressjs.com
* https://jquery.com
* https://getbootstrap.com
* https://nodejs.org/en/
* https://www.npmjs.com
* https://www.mysql.com

### Technology Used:

* https://www.docker.com
* https://www.postman.com

## Project Setup Instructions

1. Clone the repo
2. Switch to assignment 3 branch
3. Run npm install
4. Setup docker in WebStorm
5. Right click the docker-compose.yml file and run it from the project explorer
6. Setup Gulp in WebStorm
