# Ticket Application

A ticketing system built with Vue for the frontend and a Node.js backend. This application allows users to create, view, and manage tickets with various categories and types.

## Features

- **Dynamic Form:** A custom form that adjusts based on user input, particularly the 'Type' dropdown which changes based on the 'Category' selection.
- **File Attachments:** Users can attach mock files to tickets. Each attachment increments a counter for easy tracking.
- **Ticket Details:** After submitting a ticket, users can view its details.
- **(Bonus) Ticket Listing:** A front page that displays all tickets, with the ability to view individual ticket details.

## Setup and Installation Using Docker

**1. Clone the Repository:**

git clone https://github.com/suprayoungblood/Ticket-Application.git
cd Ticket-Application

**2.Docker Setup for the Entire Application:**

- Ensure you have both Docker and Docker Compose installed on your machine.
- From the root directory of the project, execute the following command:

  `docker-compose up --build`

### This command:

- Builds the Docker images for the frontend, backend, and the MySQL database.
- Starts the containers.
- Sets up a MySQL instance on port 3307 using the configurations specified in the **_docker-compose.yml_** file.
- Runs the frontend and backend applications.

### Once the containers are running:

- The frontend will be accessible at: http://localhost:5173
- The backend API will be accessible at: http://localhost:3500
- MySQL will be accessible on port 3307.

## Setup and Installation Without Docker

If you do not have Docker installed or prefer to set up the application manually, you can follow these steps:

**1. Clone the Repository:**

git clone https://github.com/suprayoungblood/Ticket-Application.git
cd Ticket-Application

**2. MySQL Database Setup:**

- Ensure you have MySQL installed on your machine.
- Create a database named ticket_system and import the schema using the provided ticket_schema.sql:
  `mysql -u root -p < ticket_schema.sql`

**3. Backend Setup:**

- Navigate to the backend directory:

  `cd Ticket-Application-Backend`

- Install the required packages:

  `npm install`

- Set up your environment variables for database connection.

- Start the backend server:

  `npm start`

**4. Frontend Setup:**

- Navigate to the Frontend directory:

  `cd Ticket-Application-Frontend`

- Install the required packages:

  `npm Install`

- Start the Frontend:

  `npm start`

  ### Once the containers are running:

- The frontend will be accessible at: http://localhost:5173
- The backend API will be accessible at: http://localhost:3500
- MySQL will be accessible on port 3307.

## Usage

### Creating a Ticket:

1. Navigate to the ticket creation form.
2. Fill in the required fields: Category, Type, Subject, and Description.
3. Attach mock files if needed.
4. Submit the form to create a ticket.

### Viewing Tickets:

1. From the main page, you can view a list of all tickets.
2. Click on a ticket to view its detailed information.
