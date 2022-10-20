# Ghost Autonomy Code Screen

## Overview

The code screen has two components. Live and Take-Home. Both will utilize a sample application and a set of guidelines and requirements.

**Use the tech stack/patterns you are best familiar with**

- There are very few "Hard" requirements
- We want to assess your development practices and see what you are capable of in a full-stack ecosystem

## Live Session

Part discussion, part code screen. Fetch some data and display it in a list. Discussion and clarification encouraged.

- Time: 1hr
- Source code: live session, with interviewer
- Purpose: Interactive base-level assessment of common front end dev patterns
- Key concepts: reuse, error handling, code structure, http

### Basic Requirements

- Fetch a list of users
  - API DOCS: <https://randomuser.me/documentation>
  - Use `https://randomuser.me/api/?results=100`
- Render a list of users with a subset of attributes
  - Display users in alphabetical order by default
- Control to fetch / refresh users with an on-screen control
- Abstract the response data structure from the UI/ page components, UI should NOT know the shape or size of the raw response data

## Take Home

Export the project and flesh it out. Here, we want to see more advanced development patterns and a closer-to-production ready app.

We do not expect you to complete everything. Like many real-life scenarios, the ask is greater than the feature delivery timeframe. Complete what you can.

### Code Challenge Features (In Priority Order)

- Production ready app
  - git setup (any flavor) and commit history
  - dev/test/build/deploy configs
  - tests (any flavor)
- User List Page
  - Accounts: `https://randomuser.me/api/?inc=login,registered,id,picture&results=100&seed=abc`
- Details page
  - Personal Details: `https://randomuser.me/api/?inc=login,name,gender,email,phone,cell,dob&results=100&seed=abc`
  - Location: `https://randomuser.me/api/?inc=login,location,nat&results=100&seed=abc`
  - Agregate data from the three API calls into a user profile
    - Treat the queries as though the are separate API's (don't remove the `inc=`)
    - The "seed" param ensures you get the same result for that query each time
  - Set up the profile page however you wish using the combined data

### Bonus/Extra (Any Order)

- CICD, deployed to a server
- Details Page - maps integration (location)
- Localization features
- Summary Visualization Page
  - Use any visualization tooling you are familiar with (can be as simple as javascript, or as complex as d3js etc.)
  - Chart, graph, or otherwise visually represent one or more attributes in aggregate
- App/Page config enhancements
  - Ability to change number of users displayed and/or other filters
  - Show/Hide page features
  - Paginated http requests and caching
- Dark mode
