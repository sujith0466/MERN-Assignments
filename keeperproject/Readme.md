Keeper App (MERN Assignment 10)

A React-based note-keeping application** inspired by Google Keep, built as part of the MERN Assignments series. Users can create, view, and delete notes dynamically with a clean, responsive UI.

🚀 Live Demo

Check out the deployed application here: [https://mern-keeper-project.netlify.app/](https://mern-keeper-project.netlify.app/)


🛠 Features

- Add Notes: Create new notes with a title and content.
- Delete Notes: Remove notes you no longer need.
- Responsive Design: Works seamlessly on desktops, tablets, and mobile devices.
- Dynamic Rendering: Notes are rendered dynamically using React components.
- State Management: Utilizes React `useState` for efficient state updates.


🖥 Tech Stack

- **Frontend:** React, JSX, CSS
- **Build Tool:** Vite
- **Deployment:** Netlify
- **Version Control:** Git & GitHub


📂 Project Structure

keeperproject/
├── public/          # Static files
├── src/             # React source code
│   ├── components/  # Header, Note, Footer, CreateArea
│   ├── App.jsx      # Main App component
│   └── index.jsx    # Entry point
├── package.json
├── vite.config.js
└── dist/            # Production build


⚡ Installation & Running Locally

1. Clone the repository:
   git clone https://github.com/sujith0466/MERN-Assignments.git
   cd MERN-Assignments/keeperproject

2. Install dependencies:
   npm install

3. Run the app locally:

   npm run dev
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. Build for production:

   npm run build

   The build will be generated in the `dist` folder.


📌 Deployment

This project is deployed on **Netlify**:

1. Connect your GitHub repository to Netlify.
2. Set the **base directory** to `keeperproject`.
3. Set the **build command** to:
    npm run build
4. Set the **publish directory** to:
   keeperproject/dist
6. Deploy your site and access it via the provided Netlify link.

📄 License
This project is **open-source** and available under the [MIT License](https://opensource.org/licenses/MIT).

👤 Author

Sujith Kumar
