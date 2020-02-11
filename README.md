# BluciferBNB - Application for Vacation Rentals Around Denver

## Pair project by Caleb Haizlett and Kim McCaskill during Module 3 at Turing School of Software and Design

### Learning Goals:

- Make informed design decisions to create a user-friendly application.
- Keep state based components to a minimum and leverage more functional components.
- Use a modular architecture for your application file structure.
- Think deeply about React Lifecycle Methods.
- Become familiar with promises, nested fetch requests, and handling the UI based on acceptance of data.
- Become familiar with routing and how to handle dynamic routes.
- Use propTypes for every component receiving props.
- Write tests for React components and some asynchronous functionality.

### Overview of Site:
- We utilize an external API that houses data about different areas of Denver and associated rentals available in the those areas.
- The user has ability to: 
  - Log in
  - Search through different areas with descriptions
  - Check listings in each area with details of each listing
  - 'Favorite' a listing to have all favorited listings show on a seperate page

### BluciferBNB
#### Login:
<img width="1440" alt="Screen Shot 2020-02-11 at 4 23 55 PM" src="https://user-images.githubusercontent.com/54483332/74288891-e8cc9000-4cea-11ea-85cb-20b440a0aa62.png">

#### Listings Available:
<img width="1440" alt="Screen Shot 2020-02-11 at 4 24 44 PM" src="https://user-images.githubusercontent.com/54483332/74288940-04d03180-4ceb-11ea-8ae4-805aab92c058.png">

#### Listing Page: 
<img width="1440" alt="Screen Shot 2020-02-11 at 4 25 11 PM" src="https://user-images.githubusercontent.com/54483332/74288974-174a6b00-4ceb-11ea-828c-31430f6f2363.png">


### Technologies Used:
- Javascript/React
- HTML/CSS
- Jest/Enzyme

### Systems/Practices
- git/Version Control
- Trello/Project Management
- draw.io/Sketch & Wireframing
- OOP
- TDD


## Setup

Clone down this [external API](https://github.com/turingschool/VRAD-API "Denver apartments API")

Fork then clone down this repository. 

Then install the library dependencies. Run:

```
npm install
```

To verify that it is setup correctly, run `npm start` in your terminal. Go to `http://localhost:8080/` and you should see a page with some `h1` text and a pink background. If that's the case, you're good to go. Enter `control + c` in your terminal to stop the server at any time.


## How to View Your Code in Action

In the terminal, run:

```
npm start
```

Browser should open up with localhost:3000


## Running Tests

Run your test suite using the command:

```
npm test
```

The test results will output to the terminal.

