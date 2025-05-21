# Promptly 🧠💬

**Promptly** is a simple AI chat interface built with **React** on the frontend and a lightweight **Node.js + Express** backend, using **Google's Gemini API** for generating responses.

This project was created as a practice to explore integrating **Gemini AI** into a fullstack app. It does **not include a database** (like MongoDB) yet, since the focus was on AI integration with a backend.

However, if you’d like to add chat history, user data, or authentication, it's very easy to connect MongoDB using Mongoose.  
You can check out my other MERN stack projects to see how Mongoose is used, or refer to the [official Mongoose documentation](https://mongoosejs.com/docs/) for a quick start.

---

## 🚀 Features

- 💬 Chat with Gemini AI (Google)
- 📡 Backend integration with Express.js
- 🔐 Ready for expansion with authentication or database
- 🎨 Clean UI with Tailwind CSS

---

## 🛠 Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **AI API**: Gemini API (Google)

---

## 📦 Installation

### 1. Clone the repo

```bash
git clone https://github.com/lavshah19/Promptly-MERN-AI


2. Install dependencies
Backend
cd backend
npm install

Frontend
cd frontend
npm install

3. Add environment variables
Create a .env file in the backend directory and add your Gemini API key:
GEMINI_API_KEY=your-api-key-here

PORT=3000

frontend .env
VITE_API_URL=http://localhost:3000

 Running the App
 Backend
cd backend
npm run dev

Frontend
cd frontend
npm run dev

📌 Note
This project does not use MongoDB or any database — it’s focused purely on practicing Gemini AI integration.
If you want to connect MongoDB for storing messages or users, it's pretty simple to set up using Mongoose

📃 License
This project is open-source under the MIT License

🤝 Contributions
Feel free to fork, improve, or experiment. Pull requests are welcome!

