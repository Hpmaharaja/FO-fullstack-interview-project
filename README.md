# FinityOne Full Stack Interview Take-Home Project
This is the last step project for the interview of an internship position at FinityOne.

# Introduction

At FinityOne, we prioritize the quick iteration of clean, simple, and comprehensive UI designing. This is a take home project that focuses on building/testing skills with HTML/CSS, React.js, and Node.js. The primary objective of this is to get an understanding of the candidates aptitude to learn, adapt, and deliver code that works. Obviously, there are many optimizations that are possible, but getting the core delivered is the essence of the business at FinityOne. We hope to see the deliverance of the candidate through this project.

As a note, the length of this project is intentionally long. We do not expect you to finish it by any means within the given timeframe. We are instead looking for good effort, decent code, and a comprehensive deliverance on the project.

For example, if you are stronger at frontend, then feel free to only submit the frontend portions of this project. If you are more comfortable at backend, then feel free to only submit the backend portions of the project.

**DEADLINE: December 30, 2019 @ 12 PM MIDNIGHT. (Note: Again, you don't have to finish everything, but do your best!)**

# Instructions

FinityOne is launching a new product, and they need to build a marketing platform to advertise, draw attention, and gather pre-release user information. The product is called FinityOne Finance, a financial application through which users are able to input, organize, and monitor their expenses on trips. The product will be able to split expenses, show analytics on best use cases for their money to certain regions of the world, and efficiently split bills incurred during the group trip. The objective of this take home project is to build a 2-page HTML site with clean designs, convert it into a React.js application, and build a backend Node.js server to accomodate the site data. Each of the mentioned pieces are separate stages of the project.

## STAGE #1 - HTML/CSS [PRE-RELEASE SIGN UP]
The objective of the html/css page is to deliver some key information about a new product that is being released - FinityOne Finance, and to have a PRE-RELEASE SIGN UP form to allow users to fill out information.

1. You will code all your code within the following folder **/FO-fullstack-interview-project/concept/**
2. There are two files you will add code to build the web page. **index.html** is the main html page, and **style.css** is the styling for the web page.
3. You may ONLY use these 2 files to write code. Any other files created will be ignored.
4. You are welcome to use Bootstrap ONLY (which has already been imported) in the html page
5. The length of the webpage should be no more than a single height of the screen. In other words, do not have a scroll for the page to view more content. Everything should be viewable as soon as I land on the web page.
6. Content should include the following:<br />
&nbsp;- Empowering People to Understand and Advance Their Financial Situation<br />
&nbsp;- Splitting Bills on group trips<br />
&nbsp;- Making money management simple, intuitive, and seamless<br />
&nbsp;- Early Access pricing $10 for early sign up access for 2 years (normally $10/month)<br />
&nbsp;- The form should include the following:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. Name (first & last)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Email (REQUIRED)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. Number of Trips/Yr (the number of trips they go on per year)<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. Next Trip Location (which country are they planning on visiting next)<br />

Here are some inspirations to follow to guide your webpage:
* https://i.pinimg.com/originals/0a/50/84/0a508468b00b19f9ad4fd4aa1a3af7e8.gif
* https://static.collectui.com/shots/3431282/form-large
* https://i.pinimg.com/originals/20/31/3a/20313a8f809e465360fa4bab591aeed5.jpg

Outside of the inspirations, feel free to bring your creativity from the web to design and best appropriate the page to get people to sign up!

## STAGE #2 - REACT.JS [PRE-RELEASE SIGN UP ON REACT]
The objective of the this stage is to take the code you developed to design the new product launch page, and place it into a react skeleton application.

1. You will code all your code within the following folder **/FO-fullstack-interview-project/client/**
2. Take your code in **index.html** and place it in **/FO-fullstack-interview-project/client/src/components/Landing/Landing.js**
3. Take your code in **style.css** and place it in  **/FO-fullstack-interview-project/client/src/components/Landing/Landing.less**

Now, in order to run and test your code, run the following:
1. Terminal/Command Prompt #1
```sh
$ cd /FO-fullstack-interview-project/client
$ npm install
$ npm start
```
2. Terminal/Command Prompt #2
```sh
$ cd /FO-fullstack-interview-project/client
$ npm install gulp gulp-run gulp-watch less
$ gulp watch
```

Note: You must run both at the same time to ensure the css is compiled along with the react application. As you will notice, this part is easy if you know what you are doing. Just adjust the less files as you see fit to make sure the page loads up exactly as you intended from the HTML page you created in STAGE #1.

## STAGE #3 [NODE.JS]
The backend aspect of this project has to deal with the form data that needs to be stored, updated, and retrieved from a database.

1. You will code all your code within the following folder **/FO-fullstack-interview-project/server/**
2. Write the following code steps in the following file **/Users/radharani/hustle/FinityOne/hr/interviews/FO-fullstack-interview-project/server/api/launchFlow/index.js**<br />
&nbsp;- Step #1 : Write the code to take the form fields and return them exactly how they were received back as a response. Send the appropriate success/fail response.<br />
&nbsp;- Step #2 : Write the code to take the form fields and store it into a MySQL database. Send the appropriate success/fail response. Note: You DO NOT need to setup a database. Assume the database is setup already.<br />
&nbsp;- Step #3 : Write the code to update a form field given the database ID. Send the appropriate success/fail response.<br />
&nbsp;- Step #4 : Write the code to get all entries of forms in the database. Send the appropriate success/fail response.<br />


Now, in order to run and test your code, run the following:
1. Terminal/Command Prompt
```sh
$ cd /FO-fullstack-interview-project/server
$ npm install
$ npm start
```

## STAGE #4
FILE TO MODIFY: **/FO-fullstack-interview-project/documentation/synopsis.txt**

Write a few sentences to address the following points: (NO CODE NEEDED)
  1) What was the hardest part of the project?
  2) If you could make it better than you have made with more time, what would you improve?
