<h1 align="center">Employee-Tracker</h1> 

<figcaption align="center">👇🏿Click the .gif, below👇🏿 to view a video demonstation.</figcaption>

<a href="https://drive.google.com/file/d/1HwFEDjPvveDUOngH_O3HiffHMF7984Ve/view"><img src="./assets/media/Screen Shot 2021-04-05 at 11.50.14 PM.png" width="620" height="380" align="center"></a>


##### ![Badge](https://img.shields.io/badge/GitHub-Pro%20%20%20-blue)&nbsp;![Badge](https://img.shields.io/badge/GitHub-Arctic%20Code%20Vault%20Contributor-orange)&nbsp;<a href="https://github.com/supercodingninja" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="discoverfrederickthomas" height="30" width="30" /></a>&nbsp;<a href="https://linkedin.com/in/discoverfrederickthomas" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="discoverfrederickthomas" height="30" width="30"/></a>&nbsp;<a href="mailto:SuperCodingNinja@outlook.com" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/microsoftoutlook.svg" alt="supercodingninja" height="30" width="30"/></a>&nbsp;<a href="https://www.youtube.com/playlist?list=PLnxMwdxjTgTEN-xRODXLJ6sI5hgz1lFbu" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/youtube.svg" alt="# discoverfrederickthomas" height="30" width="30"/></a>&nbsp;<a href="https://fb.com/supercodingninja" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg" alt="supercodingninja" height="30" width="30"/></a>&nbsp;<a href="https://codepen.io/supercodingninja" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codepen.svg" alt="supercodingninja" height="30" width="30"/></a>
#### <i>Employee-Tracker</i> © 2021 All Rights Reserved.  MIT All material must be cited or credited, when using material (free to use).

## Table of Contents
* [Repository Description](#Repository)
* [User Story](#User)
* [Usage Information](#Usage)
* [Contribution Guidelines](#Contribution)
* [Functionality](#Functionality)
* [Overview](#Overview)
* [References](#Ref)
* [Acknowledgements](#Ack)
* [Repositiory End-Goal Criterea](#Criterea)

## Repository Description
###### [Back to Table of Contents](#Table-of-Contents)
Developers are often tasked with creating interfaces, which makes it easy for any non-developer to view, and even interact with the given information stored in a database.  Often, such an interface is known as a **C**ontent **M**anagement **S**ystem (CMS).  This repository shows an attempt to architect, and building a solution for managing a company's employees(with node, inquirer, and MySQL).

## User Story
###### [Back to Table of Contents](#Table-of-Contents)
        
### As A Business Owner
    1.  As a business owner, I need a developer to build a command-line application, that at a minimum, will allow the user to:

            * Add departments, roles, employees

            * View departments, roles, employees

            * Update employee roles

    2.  I would like to update an employee's manager(s).
    3.  I would like to view employees by their manager(s).
    4.  I would like to delete departments, roles, and employees.
    5.  I would like to view the total utilized budget of a department -- ie the combined salaries of all employees in that department.
    6.  In summation, as a business owner, I want to be able to view and manage the departments, roles, and employees in my company, so that I can organize and plan my business.

### As A Developer
    1.  Design the following database schema containing three tables:

![Database Schema](Assets/schema.png)

            A.  * **department**:

                    * **id** - INT PRIMARY KEY
                    * **name** - VARCHAR(30) to hold department name

            B.  * **role**:

                    * **id** - INT PRIMARY KEY
                    * **title** -  VARCHAR(30) to hold role title
                    * **salary** -  DECIMAL to hold role salary
                    * **department_id** -  INT to hold reference to department role belongs to

            C.  * **employee**:

                    * **id** - INT PRIMARY KEY
                    * **first_name** - VARCHAR(30) to hold employee first name
                    * **last_name** - VARCHAR(30) to hold employee last name
                    * **role_id** - INT to hold reference to role employee has
                    * **manager_id** - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager
  
    2.  Build a command-line application that at a minimum allows the user to:

            * Add departments, roles, employees

            * View departments, roles, employees

            * Update employee roles

    3.  Bonus points if you're able to:

            * Update employee managers

            * View employees by manager

            * Delete departments, roles, and employees

            * View the total utilized budget of a department -- ie the combined salaries of all employees in that department

## Usage Information
###### [Back to Table of Contents](#Table-of-Contents)
This repository is a great way to understand CLI, nodeJS and express, and MySQL.  Feel free to use it as a template for projects (build upon it, and write your own code), non-profit organizations, academic clubs; and much more!  Not for commercial use, unless granted by the author.

## Contribution Guidelines
###### [Back to Table of Contents](#Table-of-Contents)
I hope you enjoy this repository, and the application's link, given above and below (I love developing new projects).  Please feel free to fork and even collaborate with me on this awesome repository!  Thank you for viewing! - Frederick Thomas, [Super Coding Ninja™](https://github.com/supercodingninja).

## Test Instructions
###### [Back to Table of Contents](#Table-of-Contents)
1.  Ensure that your application includes the require dependacies, by typing the commnd in your integrated terminal "npm install inquirer".
2.  Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub.
3.  Run node app.js


## Functionality
###### [Back to Table of Contents](#Table-of-Contents)


<img src="./assets/media/Screen Shot 2021-04-05 at 11.50.58 PM.png">
<img src="./assets/media/Screen Shot 2021-04-05 at 11.51.08 PM.png">
<img src="./assets/media/Screen Shot 2021-04-05 at 11.52.14 PM.png">


## Overview: What We Accomplished!
###### [Back to Table of Contents](#Table-of-Contents)
Architect and built solution for managing a company's employees (using node, inquirer, and MySQL).; which can be utilize for future endeavors!  I hope you enjoy this repository, and the application's link, given above and below (I love developing new projects).  Please feel free to fork and even collaborate with me on this awesome repository!  Thank you for viewing! - Frederick Thomas, [Super Coding Ninja™](https://github.com/supercodingninja)


### Media
###### [Back to Table of Contents](#Table-of-Contents)

### Building Upon The Developed Code
<h4>
    <span align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(VIDEO LINKS BELOW) Building My Schema 👇🏿</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span align="right">(VIDEO LINKS BELOW) Building My Seed 👇🏿</span>
</h4>

<p float="center">
    <img src="/assets/media/mySchema.png" alt="Building My Schema" align="left" height="45%" width="45%"/>
    <img src="/assets/media/mySeed.png" alt="Building My Seed" align="right" height="45%" width="45%"/>
</p>

<br><br><br><br><br><br><br><br><br><br>

<p float="center">
    <ol align="right"><a href="https://drive.google.com/file/d/1f-RDGCSj9yTMibKaGBSLW9K10wY8RxpY/view">Developing The Seed.</a></ol>
    <ol align="left"><a href="https://drive.google.com/file/d/1mPa_gXlxk7pZr4Ks3kBNk9Atakoykmsp/view)">Building My Schema (Thought-flow) pt. 1 of 2</a></ol>
    <ol align="right"><a href="https://drive.google.com/file/d/1AQVuYY_kPW5NQ9Z3i3nZZevw1S7xsrsz/view">Schema: Wait, what about my Decimal?!</a></ol>
    <ol align="left"><a href="https://drive.google.com/file/d/145_rDjGIJZWTxObi5AFE6oSGq3sNgbEH/view)">Building My Schema (Thought-flow) pt. 2 of 2</a></ol>
    <ol align="right"><a href="https://drive.google.com/file/d/1GXI_co-9gZFj4ZzhzjWNYzTMkV5VbXnv/view">Putting It All, Together (The Schema and Seed).</a></ol>
</p>

## References
###### [Back to Table of Contents](#Table-of-Contents)
1.  [NPMjs](https://www.npmjs.com/) provides Documentation, Installation, Examples, Methods, Objects, Questions, Answers, Separator, Prompt Types, User Interfaces and Layouts, Reactive Interface, Support, Known issues, News, Contributing, License, and Plugins.

2.  [Shields IO](https://shields.io/) provides documentations on how to add your shield, for creditbility.  Please feel free to view this resource, for your future developments.

3.  **[Eloquent JavaScript](https://eloquentjavascript.net/)**, 3rd edition (2018)
This is a book about JavaScript, programming, and digital wonders. Read it online here; or get your own paperback copy.  Written by Marijn Haverbeke.  Licensed under a Creative Commons attribution-noncommercial license. All code in this book may also be considered licensed under an MIT license.

5.  [Guide to Handlebars: Templating Engine for Node/JavaScript](https://stackabuse.com/guide-to-handlebars-templating-engine-for-node/) explains that express is a routing, and middleware is a web framework; which has minimal functionality of its own (express applications are series of middleware function calls).

6.  [Markdown Syntax](https://www.markdownguide.org/basic-syntax/) provides documentations on how to add your shield, for creditbility.  Please feel free to view this resource, for your future developments.

## Ackowledgements
###### [Back to Table of Contents](#Table-of-Contents)

### Peer Code Review
I would like to thank my class peers, all of the Teacher Assistants, my tutor, my Student Success Manager; and my Instructor.

### CodeBase
Codebase provided by [University of Washington](https://www.pce.uw.edu/), and [Trilogy Education](https://www.trilogyed.com/) (a 2U, Inc. brand),  in coorelation to their Seattle Partnership [UW Coding Bootcamp](https://bootcamp.uw.edu/).

## Repositiory End-Goal Criterea
###### [Back to Table of Contents](#Table-of-Contents)
Make it a point to tackle new code, weekly (at least, periodaclly); and break it down.  Try to understand the concepts, yourself.  This only makes you more credible, and a stonger developer: because you've taken the tim to study!  Remember this also, as a developer, your goal should be designing NEW experiences that makes people's lives simple; because as developers, we solve problems that people didn't even knew they had- even better, in a way that they do not understand: We are the super heroes and heriones of tomorrow; so get coding, and I hope this repository helps you along your development.  Stay on task, Get Ahead, Change The World! - [Frederick Thomas](https://www.linkedin.com/in/discoverfrederickthomas/), Super Coding Ninja™

## License
![MIT](https://img.shields.io/badge/License-MIT-blue)

<i>Employee-Tracker</i><b>©</b>  2021 Frederick Thomas, [Super Coding Ninja™](https://github.com/supercodingninja).

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

<sub>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</sub>