# City Explorers

**Author**: Bradley Hower

**Version**: 5.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

Via City Explorer, build an API web application which pulls location data for any input query. Properties which can be added are latitude, longitude, maps, weather, and more. This application creates a nice interface for interacting with the LocationIQ Geocoding API server via HTTP GET.

## Getting Started

Install the following stack to begin.

Node.js `npm install`

### Option 1

React `npm install react`

For previews launch the local server,
`npm run dev`
`npm start`

To test each iteration, terminal run `npm run build`.

### Option 2

For easier iteration, replace the last line of the above stack and use Vite instead to install React. `npm create vite@latest`

Whenever you want to test an iteration using vite as the server, in the terminal run `npm run dev`.

### Remaining Stack

+ React bootstrap `npm install react-bootstrap bootstrap`
+ Axios HTTP client  `npm install axios`
+ React Router `npm install react-router-dom`

Whenever you want to test an iteration using vite as the server, in the terminal run `npm run dev`.

For development documentation, see:

[https://reactrouter.com/en/main](https://reactrouter.com/en/main)

[https://react-bootstrap.netlify.app/docs/getting-started/introduction/](https://react-bootstrap.netlify.app/docs/getting-started/introduction/)

To obtain your own API key, see [https://locationiq.com/docs#search-forward-geocoding](https://locationiq.com/docs#search-forward-geocoding).

## Architecture

Technologies: Node.js, React, Bootstrap, Axios, React Router

![Architecture HTTP Model](https://github.com/Bradley-Hower/city-explorer/assets/139923955/94a5069e-4265-46fe-8999-cba2c9285ae1)

### Back-end Server

![Architecture HTTP Back-end Server Model 2](https://github.com/Bradley-Hower/city-explorer/assets/139923955/a48178a0-cbc9-404d-9c3f-8e37db2ed616)

### Server with Two APIs

![Architecture HTTP Back-end Server Model 3](https://github.com/Bradley-Hower/city-explorer/assets/139923955/a1b6d513-4187-4929-a8b6-1dee947410e7)


## Change Log

10-06-2023 - Geocoding is now working. Issues connecting to API now resolvd. Immediate features are latitude and longitude.

10-06-2023 14:00 - Location map image feature added. Loads map image of location upon page load.

10-06-2023 16:00 - Bootstrap styling added to elements (buttons, image thumbnail).

10-08-2023 14:00 - Error Handler added. Proper error codes pulled from error response properties and added to modal component.

10-08-2023 17:00 - Forward navigation now fixed. Link element does not work due to delayed response from submit. React does not await the completion of submit before running Link, thus loads a null location.

2023-10-16 20:00  Weather Back-end Componenet

2023-10-17 13:30  Weather Front-end componennt

2023-10-17 14:00 Error Handling

2023-10-17 17:00 Initilized Git

2023-10-17 17:30 Launched Server on Redender.

2023-10-17 18:00 Launched Netlify

2023-10-22 2:30 Add Weatherbit API

2023-10-22 16:35 Add Movie API

2023-10-23 10:00 Bootstrap for Movies

2023-11-22 19:24 Refactor Weather and Movies into own modules on back-end

2023-11-22 23:06 Refactor front-end components using nesting for weather and movie items

2023-11-27 23:57 Added Yelp API for restaurant searches

## Lighthouse

![Lighhouse Score](https://github.com/Bradley-Hower/city-explorer/assets/139923955/598fb016-fa32-4373-a24a-ad71374abefe)

## Credit and Collaborations

https://unsplash.com/photos/Q1p7bh3SHj8

----

Name of feature: Locations

Estimate of time needed to complete: 1 hours

Start time: 1:00 PM

Finish time: 1:30 PM

Actual time needed to complete: 30 minutes

---

Name of feature: Map

Estimate of time needed to complete: 1 hours

Start time: 1:30 PM

Finish time: 2:00 PM

Actual time needed to complete: 30 minutes

---
Part II ========
---

Name of feature: Bootstrap styling

Estimate of time needed to complete: 30 minutes

Start time: 3:00 PM

Finish time: 4:00 PM

Actual time needed to complete: 1 hour

---

Name of feature: Error Handling

Estimate of time needed to complete: 1 hour 30 minutes

Start time: 12:00 PM

Finish time: 2:00 PM

Actual time needed to complete: 2 hour

---

Name of feature: Set up your server repository.

Estimate of time needed to complete: 1 hour

Start time: 12:00

Finish time: 1:00

Actual time needed to complete: 1 hour

---

Name of feature: Weather Backend API

Estimate of time needed to complete: 2 hours

Start time: 2:00

Finish time: 8:00

Actual time needed to complete: 6 hours 

---

Name of feature: Weather Front-end Componenet

Estimate of time needed to complete: 2 hours

Start time: 10:30

Finish time: 1:30

Actual time needed to complete: 3 hours

---

Name of feature: Error Handling

Estimate of time needed to complete: 2 hours

Start time: 1:00

Finish time: 2:00

Actual time needed to complete: 1 hour

---
Part III ========

---

Name of feature: Add Weatherbit API

Estimate of time needed to complete: 2 hours

Start time: 2:30

Finish time: 3:15

Actual time needed to complete: 45 minutes

---

Name of feature: Add Movie API

Estimate of time needed to complete: 2 hours

Start time: 16:35

Finish time: 10:00

Actual time needed to complete: 3 hours

---

Name of feature: Bootstrap for Movies

Estimate of time needed to complete: 2 hours

Start time: 10:00

Finish time: 11:10

Actual time needed to complete: 1 hour 10 minutes

---
Part III ========

---

Name of feature: Refactor front-end components using nesting for weather and movie items

Estimate of time needed to complete: 1 hour

Start time: 21:30

Finish time: 23:00

Actual time needed to complete: 1 hour 30 minutes

---
Part IV ========

---

Name of feature: Added Yelp API for restaurant searches

Estimate of time needed to complete: 3 hours

Start time: 22:00

Finish time: 23:57

Actual time needed to complete: 2 hours

---
