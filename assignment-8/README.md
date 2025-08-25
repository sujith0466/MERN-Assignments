✅ Assignment 8 – MongoDB Todo List Web App

This project is a **dynamic Todo List web application** built using **Node.js, Express, EJS, and MongoDB Atlas**.  
It allows users to **add, edit, delete, and manage tasks** with priority levels, and all tasks are stored **persistently in MongoDB Atlas**.



🚀 Features

- ➕ **Add Task** – Create a new task with a title and priority (Low, High, Urgent).  
- ✏️ **Edit Task** – Update an existing task’s title or priority.  
- 🗑️ **Delete Task** – Remove tasks easily.  
- ✅ **Toggle Complete** – Mark tasks as complete/incomplete.  
- ⚡ **Real-Time Updates** – UI updates dynamically via EJS templates.  
- 📦 **Persistent Storage** – All tasks are saved in **MongoDB Atlas** (cloud DB).  
- ⚠️ **Validation & Alerts** – Alerts for empty task titles, updates, and deletions.  
- 🌐 **Responsive UI** – Clean, modern UI with priority highlights.

 🛠️ Tech Stack

- **Frontend:** EJS (Embedded JavaScript Templates), CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas (NoSQL)  
- **Other Tools:** Mongoose, Method-Override, Dotenv  


 📂 Project Structure

assignment-8/
│── app.js              # Main server file
│── package.json        # Dependencies & scripts
│── .gitignore          # Ignores node\_modules & .env
│── .env (local only)   # MongoDB connection string (not uploaded to GitHub!)
│
├── public/
│   └── css/
│       └── styles.css  # Custom styling
│
└── views/
    └── list.ejs        # EJS template for Todo UI


 ⚙️ Setup & Installation

1️⃣ Clone the Repository
git clone https://github.com/sujith0466/MERN-Assignments.git
cd MERN-Assignments/assignment-8

 2️⃣ Install Dependencies

  npm install

 3️⃣ Configure Environment Variables

Create a `.env` file in the `assignment-8/` directory:
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=3000

 4️⃣ Run Locally

node app.js

Server will run at:
👉 `http://localhost:3000`

🌍 Deployment (Render)
This app is deployed using **Render**.
You can try the live version here:

🔗 **Live Demo:** [Deploy Link Here](https://sk-mern-assignment8.onrender.com/)

✨ Author

* 👨‍💻 Sujith Kumar
* 🎓 B.Tech in AI & Data Science | Web & AI Enthusiast
