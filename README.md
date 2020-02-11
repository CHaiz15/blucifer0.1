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

#### Wins:
  - Building functional single-page application with React and testing all components
  - Getting SOLID MVP through use of iterations and project board
  
#### Challenges
  - Learning to test some asynchronous code with Jest/Enzyme
  - Dynamic React Router intricacies
  - Workflow with some remote days due to inclement weather

### Overview of Site:
- We utilize an external API that houses data about different areas of Denver and associated rentals available in the those areas.
- The user has ability to: 
  - Log in
  - Search through different areas with descriptions
  - Check listings in each area with details of each listing
  - 'Favorite' a listing to have all favorited listings show on a seperate page

### BluciferBNB
#### Login:
<img width="1440" alt="Screen Shot 2020-02-11 at 4 42 55 PM" src="https://user-images.githubusercontent.com/54483332/74289906-8f199500-4ced-11ea-88da-7df1420decb7.png">

#### Areas in Denver:
<img width="1440" alt="Screen Shot 2020-02-11 at 4 43 35 PM" src="https://user-images.githubusercontent.com/54483332/74289944-a8224600-4ced-11ea-872e-221f5c5f83e2.png">

#### Listings Available:
<img width="1440" alt="Screen Shot 2020-02-11 at 4 44 10 PM" src="https://user-images.githubusercontent.com/54483332/74289980-bd977000-4ced-11ea-9b3a-f5f3a5d5e4b1.png">

#### Listing Page: 
<img width="1440" alt="Screen Shot 2020-02-11 at 4 44 54 PM" src="https://user-images.githubusercontent.com/54483332/74290011-d6078a80-4ced-11ea-9e3a-7ff7680cf3df.png">

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

Then install the library dependencies for both repositories. Run:

```
npm install
```

To verify that it is setup correctly, run `npm start` in your terminal for both repositories.  One will launch browser with localhost.

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

