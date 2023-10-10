# Project Name

**Author**: Bradley Hower
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

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

## Change Log

10-06-2023 13:30 - Geocoding is now working. Issues connecting to API now resolvd. Immediate features are latitude and longitude.

10-06-2023 14:00 - Location map image feature added. Loads map image of location upon page load.

10-06-2023 16:00 - Bootstrap styling added to elements (buttons, image thumbnail).

10-08-2023 14:00 - Error Handler added. Proper error codes pulled from error response properties and added to modal component.

10-08-2023 17:00 - Forward navigation now fixed. Link element does not work due to delayed response from submit. React does not await the completion of submit before running Link, thus loads a null location.

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
