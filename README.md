🌐 SocialNest - A Reddit-Inspired MERN App
SocialNest is a full-stack social media application inspired by Reddit, built using the MERN stack and Redux for a dynamic, responsive, and feature-rich experience.

🚀 Demo
Frontend: Deployed on Vercel

Backend: Deployed on Render

🛠 Built Using
Frontend
ReactJS – Frontend framework

Redux with useDispatch & useSelector – State management

Redux Thunk – For async actions

React Router – Client-side routing

Formik – For flexible forms

Material-UI + CSS – UI components and custom styles

Yup – Form validation

Backend
Node.js – JS runtime environment

Express.js – Web framework for building REST APIs

MongoDB – NoSQL database

Mongoose – ODM for MongoDB

Cloudinary – For image upload and storage

JWT (JSON Web Tokens) – Secure user authentication

Bcrypt.js – Password hashing

Validator.js – Input validation

Mongoose Unique Validator – Schema field uniqueness handling

Dotenv – For environment variable management

✨ Features
User Authentication (Register/Login)

Create, Read, Update, Delete (CRUD) for posts & comments

Post content as text, links, or images

Upvote/Downvote posts and comments

Profile pages (e.g. u/priya)

Community/Subreddit-style pages (e.g. r/socialnest)

Sorting: Hot, Top, Controversial, etc.

Full-text search for posts

Pagination support

Form validations and error management

Avatar upload support for profiles

Toast notifications (e.g., post success, delete comment)

Loading spinners during data fetch

Dark/Light mode toggle (saved to local storage)

Fully responsive design

⚙️ Usage
📦 Environment Variables
In the server folder, create a .env file with the following keys:

env
Copy
Edit
MONGODB_URI = "Your Mongo URI"
PORT = 3005
SECRET = "Your JWT secret"
CLOUDINARY_NAME = "From your Cloudinary dashboard"
CLOUDINARY_API_KEY = "From your Cloudinary dashboard"
CLOUDINARY_API_SECRET = "From your Cloudinary dashboard"
UPLOAD_PRESET = "Optional: Folder/preset name from Cloudinary"
🔧 Update Client Config
In client/src/backendUrl.js, update the backend variable:

js
Copy
Edit
export const backend = "https://your-backend-service-url.onrender.com";
🖥️ Run Locally
Client
bash
Copy
Edit
cd client
npm install
npm start
Server
Make sure nodemon is installed globally:

bash
Copy
Edit
cd server
npm install
npm run dev

📝 Credits
This project is inspired by the open-source Reddit Clone by amand33p.


