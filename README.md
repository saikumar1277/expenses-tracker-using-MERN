# Expense Tracker Web Application

This is a web application built using React.js, Node.js, Express.js, and MongoDB to help users track their income and expenses. It provides a user-friendly interface, filtering options, and data visualization for effective financial management.

## Features

- **Expense Tracking:** Record and categorize expenses to gain insights into spending habits.
- **Income Monitoring:** Track income sources to understand overall financial inflow.
- **Filtering Options:** Filter income and expenses by weekly, monthly, or custom time periods.
- **Data Visualization:** Visualize income and expenses through charts and graphs for better analysis.
- **User Authentication:** Secure user registration and login functionality.
- **Hashed the password to secure:** used bcryptjs library to secure the password. 

## Tech Stack

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- other : Ant Design UI library

## Installation

1. Clone the repository:

git clone https://github.com/saikumar1277/expenses-tracker-using-MERN.git
## Install client dependencies
 cd client <br/>
 npm install

## Install server dependencies
 cd .. <br/>
 npm install

## Configure Environment Variables:
Create a config.env file in the backend directory. <br/>
Set the required environment variables, such as database connection details. or paste the following two lines:<br/>
PORT = 5000 <br/>
MONGO_URL = mongodb+srv://username:password@cluster0.tolekia.mongodb.net/expanseApp


## Creating database
- create a cluster in mongodb
- then create new database with 
    - database name as : expanseApp 
    - collection name as : users

## start the server
npm run dev

