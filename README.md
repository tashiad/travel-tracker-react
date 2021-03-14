# COVID's Over Travel Tracker - React edition
---
## Table of Contents
* [Introduction](#Introduction)
* [Technologies](#Technologies)
* [How To Run](#How-To-Run)
* [Features](#Features)
* [Wins](#Wins)
* [Challenges](#Challenges)

## Introduction
Halfway through my time at Turing, I made an application in vanilla JavaScript called COVID's Over Travel Tracker. Users could log in, view their existing trips, get a quote for a new trip, add a new trip, filter trips by approved and pending (with the idea that an agent login/dashboard would be added later on), and view their trip stats.

I really loved how it turned out, so I decided to challenge myself to refactor it to be in React. Since I had different goals for this project, I made a few changes to the application, including updating the API endpoints so that it no longer needs to be run locally, adding the ability to delete a trip, and removing the login form, stats, approved/pending filters. The CSS didn't change much from before, which allowed me to focus almost solely on the React/JavaScript. Overall, it was a lot of fun to look back at how much I've learned over the past 2 months!

* [Original project repo](https://github.com/tashiad/travel-tracker)
* [Original project specifications](https://frontend.turing.io/projects/travel-tracker.html)

### Motivation & Goals
* Demonstrate knowledge of React and Asynchronous JavaScript by refactoring a past project in vanilla JavaScript
* Demonstrate knowledge of end to end testing with Cypress
* Demonstrate ability to perform basic CRUD operations on a database

---

## Technologies
JavaScript, React, RESTful APIs, Cypress, HTML, CSS

---

## How To Run
[Deployment Link](https://travel-tracker-react.vercel.app/)

There are 50 travelers in the API. Rather than spend time creating a login form like I did in my vanilla project, I chose to populate the traveler at random. To view trips for a different random traveler, simply refresh the page.

**To run locally:**
1. Clone down this repo
2. `npm install`
3. `npm run start`

**To run tests:**
1. Clone down this repo
2. `npm install`
3. `npm run start`
4. In `App`, comment out line 25 `const rand = Math.floor(Math.random() * 50) + 2`. Then, on line 29, change `getSingleTraveler(rand)` to `getSingleTraveler(1)`. (See "Challenges" section for details on why this step is necessary.)
5. `npx cypress open`
6. Click `travel_spec` in the popup window to run the tests

---

## Features
* [View Existing Trips](#View-Existing-Trips)
* [Quote A New Trip](#Quote-A-New-Trip)
* [Add A New Trip](#Add-A-New-Trip)
* [Delete A Trip](#Delete-A-Trip)


#### View Existing Trips
On load, existing trips for a random user are displayed.
<p align = "center">
<img width="1440" alt="Homepage" src="https://user-images.githubusercontent.com/66852774/111080369-cb588f80-84c3-11eb-8b6a-c71e96d10266.png">
</p>
  <details>
    <summary>Under the Hood</summary>
    In React's <code>componentDidMount</code> lifecycle method, a <code>Promise.all</code> allowed me to fetch data and set state from 3 different API endpoints at once. I rendered loading and error handling messages to the UI to make for a better user experience.
  </details>

#### Quote A New Trip
In the form, the user can select a date, duration, number of travelers, and destination and get a quote for how much the trip will cost based on flights and lodging prices for that location.
  <details>
    <summary>Under the Hood</summary>
    I created a controlled form so that state would be updated whenever the input changes. The destinations drop down menu displays all available destination options that come in from the destinations API endpoint. The "Get A Quote" button is disabled until all form fields are filled out correctly.
  </details>

#### Add A New Trip
Once they've gotten a quote, an "Add Trip" button will appear, which allows the user to add the trip to their dashboard.
<p align = "center">
<img width="1440" alt="Form" src="https://user-images.githubusercontent.com/66852774/111080396-e5926d80-84c3-11eb-84a5-b13da1b909d2.png">
</p>
  <details>
    <summary>Under the Hood</summary>
    This is a <code>POST</code> request that adds the new trip to the server and renders it to the UI. The body of the post had to be formatted exactly the way that it asks for in order for it to go through.
  </details>

#### Delete A Trip
If the user wants to cancel a trip, they can click the "X" in the top right corner of the card.
  <details>
    <summary>Under the Hood</summary>
    This was originally going to be a <code>DELETE</code> request, but I think something must be off with the endpoint I was provided for this because I wasn't even able to get it to work in Postman. My workaround was to simply remove the trip from the UI. Of course, this won't actually delete it from the server, so the trip will come back on page load for that same user. Another potential workaround could have been to send a <code>PATCH</code> request and change the trip status to "cancelled", but I don't have an endpoint for that.
  </details>

### Accessibility
This app was built with all users in mind. I used Lighthouse and [WAVE](https://wave.webaim.org/) to work towards including as broad of an audience as I could. Of course, as I am committed to including all users, I am ready to make future edits to address any areas that I may have missed.

### Future Improvements
- Figure out the issue with the `DELETE` request (did not do this in the interest of time)
- Figure out issues with stubbing the travelers endpoint and `POST` in Cypress (did not do this in the interest of time)
- Add trip stats section from previous project back in and make it more robust
- Bring back the login page (which could solve some of the Cypress issues I was having)
- Add trip filtering so that users can view past, present, and future trips, as well as approved, pending, or canceled trips.

---

## Wins
When I first built this project 2 months ago at Turing, we had only recently learned about network requests and did not yet know any frameworks. Since then, I've learned both React and Vue.js, become more comfortable with making network requests, and learned how to do end-to-end testing in Cypress (the original project used unit testing with Mocha and Chai).

It was a big win for me to see how far I've progressed in such a short amount of time. While a bit time-consuming, refactoring my original code into React felt like a breeze. And even though I ran into some network request issues (see explanation below), I still felt a lot more comfortable with trouble-shooting them and bringing in my first `Promise.all` to deal with multiple endpoints in React was much easier than I anticipated.

---

## Challenges
Like most projects, this one wasn't without its own blockers. In the interest of time, I chose not to struggle with the below issues for too long. Instead, I've documented my problem-solving process thus far and added them as things to fix in the future.

* I could not get the `DELETE` to work--even when attempting in Cypress. It's meeting all the requirements from what I can tell, and I didn't use it in my previous project so I can't say whether it worked then either. All I know is that the endpoints I used for this project were added by an unknown person to Heroku, so I'm sure sure if this is an issue with how I'm formatting the post, or if the endpoint is meant to work at all. For now, I've commented out my code that has to do with the server and am simply temporarily removing the trip from the UI, knowing that it will not persist on refresh for a given user.
* I ran into some issues with stubbing a couple of the endpoints in Cypress. Problem-solving process and workarounds have been documented in the PR [here](https://github.com/tashiad/travel-tracker-react/pull/8).
