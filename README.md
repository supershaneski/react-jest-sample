react-jest-sample
=================

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Objective
After several months of studying React, 
I decided to finally face the elephant in the room.<br>
Or was it an 800 pound gorilla?

So, this is my first attempt to learn testing in React using [Jest](https://jestjs.io/en/).<br>
I have been using [NextJS](https://nextjs.org/) in my recent exercises but went back to create-react-app since Jest is already pre-installed there. I want to dive immediately in learning testing in Jest rather than trying to figure out if my config is working or not.

I made a simple guestbook application with components that are used more than once to make things more challenging. With testing in mind, I feel like this is the most React application that I have ever made, with all the user interactions that I previously just use CSS pseudo-classes are now driven by states.

## Description

The GuestBook will show good tidings and well wishes by guests in events like a wedding. It will be loaded in a device infront of the reception where guests can add their messages upon checking in.

The initial data is taken from a dummy JSON file. Messages are shown in descending order.

A floating action button is located in the bottom right and opens up the input dialog.

## Installation
Clone repository and run

```
npm install
```


## Run
Runs the app in the development mode

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Test
Runs the test using [Jest](https://jestjs.io/en/).

```
npm test
```

## Todo
> Use [Enzyme](https://www.npmjs.com/package/enzyme)



