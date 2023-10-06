# Ticket Application

A ticketing system built with Vue for the frontend and a Node.js backend. This application allows users to create, view, and manage tickets with various categories and types.

## Features

- **Dynamic Form:** A custom form that adjusts based on user input, particularly the 'Type' dropdown which changes based on the 'Category' selection.
- **File Attachments:** Users can attach mock files to tickets. Each attachment increments a counter for easy tracking.
- **Ticket Details:** After submitting a ticket, users can view its details.
- **(Bonus) Ticket Listing:** A front page that displays all tickets, with the ability to view individual ticket details.

## Setup and Installation

**1. Clone the Repository:**

git clone https://github.com/suprayoungblood/Ticket-Application.git
cd Ticket-Application

**2. Docker Setup for MySQL Database:**

- Ensure Docker and Docker Compose are installed on your machine.
- From the root directory of the project, run the following command to start the MySQL container:

  `docker-compose up -d`

This will spin up a MySQL instance with the database configurations as specified in your docker-compose.yml file.

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

## Usage

### Creating a Ticket:

1. Navigate to the ticket creation form.
2. Fill in the required fields: Category, Type, Subject, and Description.
3. Attach mock files if needed.
4. Submit the form to create a ticket.

### Viewing Tickets:

1. From the main page, you can view a list of all tickets.
2. Click on a ticket to view its detailed information.
