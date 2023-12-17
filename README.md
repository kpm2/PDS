# Parallel Project

## Overview
This project is a parallel system containing a frontend and a backend. The frontend is built with React, and the backend is developed using Spring Boot. The goal is to create a simple To-do list application with features such as adding, deleting, and editing list elements.

## Project Structure
The project structure is organized into two main folders: `front` and `back`. Each folder contains the code for the frontend and backend, respectively.

### Frontend (`front` folder)
- The frontend is built with React.
- The main code is located in the `src` directory.
- The `App.js` file contains the main React component, handling the rendering of the To-do list and user interactions.
- The application communicates with the backend through HTTP requests to perform CRUD operations.

### Backend (`back` folder)
- The backend is developed using Spring Boot.
- The main code is organized in the `src` directory, following Spring Boot conventions.
- The `ListElementController` class defines REST endpoints for adding, retrieving, updating, and deleting list elements.
- The data model is represented by the `ListElement` class.

## Prerequisites
Make sure you have the following installed on your machine:
- Node.js for running the frontend.
- Maven for building and running the Spring Boot backend.
- Docker and Docker Compose for containerization (optional).

## Getting Started
1. Clone the repository to your local machine.
2. Navigate to the `front` folder and run the following commands:
   ```bash
   npm install
   npm start
