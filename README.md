# node-ts-mongo-api
node-ts-mongo-api
 README.md
md
Copy
Edit
# Node.js Backend Assignment

## 🚀 Project Overview
This project is a simple **Node.js** web server that provides a set of **RESTful APIs** using **TypeScript** and **MongoDB**.  
It fetches dummy user data from [JSON Placeholder](https://jsonplaceholder.typicode.com/) and stores it in the database.

## 📂 **Project Structure**
src/ │── controllers/ # Handles API logic │── models/ # Defines MongoDB schemas │── routes/ # API endpoints │── services/ # Business logic │── db.ts # MongoDB connection │── index.ts # Main entry point │── types/ # TypeScript types

bash
Copy
Edit

## 🛠️ **Setup Instructions**
### 1️⃣ **Clone the Repository**
```sh
git clone <repository-url>
cd node_assignment
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Set Up Environment Variables
Create a .env file in the root directory and add:

ini
Copy
Edit
MONGODB_URI=<your-mongodb-connection-string>
PORT=3000
4️⃣ Run the Server
sh
Copy
Edit
npm run dev
The server starts on: http://localhost:3000/

🔥 API Endpoints
Method	Endpoint	Description
GET	/load	Loads 10 users, posts, and comments into the database.
DELETE	/users	Deletes all users from the database.
DELETE	/users/:userId	Deletes a specific user by userId.
GET	/users/:userId	Fetches a user along with their posts and comments.
PUT	/users	Adds a new user (returns error if the user already exists).
🛠 Tech Stack
Node.js + Express
MongoDB + Mongoose
TypeScript
ts-node (for running TypeScript code)
JSON Placeholder API (for dummy data)
🐞 Error Handling
Returns appropriate status codes for missing or incorrect data.
Handles errors gracefully using try-catch in controllers.