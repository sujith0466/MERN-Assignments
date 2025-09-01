# 🔐 MERN Assignment 9 – Secrets Web Application

The **Secrets Web Application** demonstrates robust authentication and security mechanisms, allowing users to anonymously share and view secrets.  
It focuses on implementing **best practices in web security**, including **password hashing, JWT-based authentication, and secure session management**.

## 🌍 Live Demo

🔗 [Click here to view the deployed app](https://secrets-pj72.onrender.com)

## 🚀 Features

- **User Registration & Login**
  - Register with **name, email, password**  
  - Passwords stored securely using **bcrypt hashing**  
  - Login via email and password with validation  

- **Authentication & Security**
  - **JWT (JSON Web Token)** used for stateless authentication  
  - **HttpOnly cookies** ensure secure session handling  
  - Passwords must meet format rules (uppercase, lowercase, number, 6–8+ characters)  

- **Secrets Management**
  - Authenticated users can **submit secrets anonymously**  
  - All secrets are displayed on the `/secrets` page  

- **UI Enhancements**
  - Clean, modern UI with a responsive design  
  - **Show/Hide password** toggle  
  - Logout option with session clearing  


## 🛠️ Tech Stack

- **Frontend:** EJS, CSS, Bootstrap  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Security:** bcrypt, JWT, cookie-parser  


## 📂 Project Structure

assignment-9/
│── app.js # Main application server
│── package.json # Dependencies
│── public/ # Static files (CSS, images)
│── views/ # EJS templates
│ │── partials/ # Header & footer includes
│ │── home.ejs
│ │── login.ejs
│ │── register.ejs
│ │── secrets.ejs
│ │── submit.ejs

yaml
Copy code

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   git clone https://github.com/<your-username>/MERN-Assignments.git
   
   cd MERN-Assignments/assignment-9
   
Install dependencies

bash
Copy code
npm install
Set up MongoDB

Run MongoDB locally on mongodb://localhost:27017/secrets

Or use MongoDB Atlas (replace connection string in app.js)

Run the server

bash
Copy code
node app.js
Server will start on http://localhost:8000

🔑 Usage
Visit /register → create an account

Login at /login

Submit secrets anonymously at /submit

View all submitted secrets at /secrets

Logout securely via /logout

🛡️ Security Highlights
Passwords never stored in plain text (hashed with bcrypt)

JWT ensures scalable, stateless authentication

Secure cookies prevent XSS attacks

Proper validation for email & password formats

📌 Future Improvements
Add Google OAuth / Social Logins

Implement secret categories & likes

Add pagination for secrets

Deploy on Render/Heroku + MongoDB Atlas

👨‍💻 Author
Sujith Kumar
B.Tech – Artificial Intelligence & Data Science

🌐 GitHub

💼 Frontend + Backend Developer | AI Enthusiast
