# Task Manager App

## Project Overview

This is a simple task management application with user authentication, task creation, and task listing functionalities. The application uses React (with Material UI) for the front end and Node.js for the back end.

## Setup Instructions

### Backend

1. Navigate to the `backend` directory and install the dependencies:

   ```sh
   cd backend
   npm install
   ```

2. Start the Server

   ```sh
   npm start
   ```

3. Sign up on MongoDB Atlas for a free account to connect to MongoDB or use local mongodb server.

### Frontend

1. Navigate to the `frontend` directory and install the dependencies:

   ```sh
   cd frontend
   npm install
   ```

2. Start the React application

   ```sh
   npm start
   ```

3. Add BASE URL to the env file
   - Create a .env file in the root folder
   - Add this variable REACT_APP_API_URL and point it to the backend url of your project.

## Coding Challenge Tasks

1. **Add Task Prioritization:**

   - Extend the `Task` model to include a `priority` field with possible values: 'Low', 'Medium', 'High'.
   - Update the task creation form to include a dropdown for selecting task priority.
   - Ensure the priority is displayed on the task list.

2. **Fix Token Expiration Bug:**

   - Currently, the application does not handle token expiration correctly.
   - Implement a solution to handle token expiration on the frontend and redirect users to the login page if their token has expired.

3. **Enhance UI with Material UI:**

   - Refactor the existing components to use Material UI components.
   - Ensure that the application has a consistent and modern look and feel using Material UI styles.

## Submission Instructions

1. Fork the Repo:

   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/chumchumagency/senior-coding-interview-i?quickstart=1)

2. Create a New Branch:

   - Create a new branch for your changes.

     ```git
     git checkout -b feature-enhancements-[yourname]
     ```

3. Make the Necessary Changes:

   - Implement the features, bug fixes, and UI enhancements as described in the tasks.

4. Commit Your Changes:

   - Ensure you commit your changes with meaningful commit messages.
     ```git
      git commit -m "Add task prioritization feature"
      git commit -m "Fix token expiration bug"
      git commit -m "Enhance UI with Material UI components"
     ```

5. Push your changes

   Push your changes to the new branch on the remote repository.

   ```git
      git push origin feature-enhancements-[yourname]
   ```

6. Create a Pull Request:

   - Create a pull request (PR) from your branch to the main branch on GitHub. Include a description of the changes you made.
   - Send us your PR link in the email address and/or google meet chat.

## Important Notes

- Ensure that all functionality works as expected.
- Write clean, maintainable, and well-documented code.
- Make sure to handle any edge cases or errors appropriately.
- Focus on using Material UI for a consistent and modern user interface.
- Submissions with correct pr links and commits will be accepted.
