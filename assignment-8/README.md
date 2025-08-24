# 🏫 MERN Assignment 8 – Todo List App

This is a **dynamic school listing application** built using **MERN stack (MongoDB, Express, React, Node.js)**. The app allows users to browse schools by city, district, and tags, view school details, and includes an admin panel for editing school info. It is part of a larger monorepo containing multiple MERN assignments.


## 📁 Folder Structure (Monorepo)



MERN-Assignments/
├── assignment-8/     <-- 📌 This is what we’re deploying
      ├─ index.js
      ├─ package.json
      ├─ .env            # (create this with your MongoDB URI)
      ├─ views/
      │  └─ list.ejs
      └─ public/
         └─ css/
            └─ styles.css



## 🚀 Live Demo

👉 [Insert Deployment Link Here]  

*(Example: https://mern-assignment8-schoollisting.onrender.com)*


## ✨ Features

- 📌 Browse schools by **city**, **district**, and **tags** (level, gender, campus type)  
- 🔎 **Real-time search** for school names  
- 🖼️ Upload school **logos, banners, gallery images, YouTube links** (Admin Panel)  
- 📝 Edit school **descriptions** using rich text editor (Summernote)  
- 📚 View **school blogs** and **reviews**  
- 🌆 Display **popular cities grid**  
- 📱 Fully **responsive UI** for all devices  
- 🔐 Admin authentication for secure editing  



## 🖥️ Tech Stack

- **Frontend:** React.js, HTML5, CSS3, Bootstrap  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Templating:** EJS (for admin panel)  
- **Authentication:** JWT or session-based  
- **Deployment:** Render / Any cloud platform  


## 🛠️ How to Run Locally

### 1. Clone the Repo

git clone https://github.com/sujith0466/MERN-Assignments.git
cd MERN-Assignments/assignment-8

### 2. Install Dependencies

npm install
cd frontend
npm install

### 3. Setup Environment Variables

Create a `.env` file in the backend folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

### 4. Start Backend Server

cd backend
npm start

### 5. Start Frontend Server

cd frontend
npm start


### 6. Open in Browser

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend API: [http://localhost:5000](http://localhost:5000) (example port)


## 👨‍💻 Author

* **Name:** Sujith Kumar
* **Field:** B.Tech in AI & Data Science
* **Skills:** MERN Stack, Flask, Tailwind CSS, Firebase, Vertex AI
* **GitHub:** [@sujith0466](https://github.com/sujith0466)


## 📄 License

This project is open source and available under the [MIT License](LICENSE).



