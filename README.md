# 🏠 StateHub — Real Estate Platform

StateHub is a full-stack real estate web application built using the **MERN stack**. It allows **Users** to search and explore properties, **Agents** to list and manage their properties, and an **Admin** to oversee the entire platform — each with role-based access. Buyers and agents can communicate directly through real-time chat, making property discovery and negotiation seamless.

This project was built as a learning journey to understand how real-world full-stack applications are structured — covering authentication, real-time communication, image handling, and API security.

---

## 📸 Screenshots

<img width="1895" height="861" alt="Screenshot 2026-06-11 224006" src="https://github.com/user-attachments/assets/474c22a8-911c-430e-b9c1-3e10bb6c37f7" />
<img width="1892" height="860" alt="Screenshot 2026-06-11 223718" src="https://github.com/user-attachments/assets/8324d81e-7680-483e-b039-4cb74c1d25bc" />
<img width="1886" height="857" alt="Screenshot 2026-06-11 224020" src="https://github.com/user-attachments/assets/35d186fd-6e69-4d85-83ad-e9a116766ecd" />



---

## ✨ Key Features

- 🔐 Multi-user authentication — User / Agent / Admin roles
- 🏘️ Property listing & management system
- 🔍 Advanced property search & filters
- ✏️ Add, edit, and delete property listings
- 🖼️ Image upload with cloud storage (Cloudinary)
- 💬 Real-time chat between buyers and agents (Socket.IO)
- 📧 OTP-based email verification on registration (Brevo)
- 🛡️ Secure REST APIs with JWT authentication & encrypted passwords
- 🚦 Rate limiting & HTTP security headers (Helmet)
- 📱 Fully responsive UI built with Tailwind CSS

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- Tailwind CSS

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB + Mongoose

**Real-time Communication**
- Socket.IO

**Authentication & Security**
- JWT (JSON Web Token)
- bcryptjs
- Helmet
- express-rate-limit

**Email Service**
- Brevo (for OTP verification)

**Image Upload & Storage**
- Multer
- Cloudinary

---

## 📂 Project Structure

```
StateHub/
├── frontend/              # React frontend
│   ├── src/
│   └── ...
├── backend/               # Node + Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── ...
├── .env.example
└── README.md
```

---

## ⚙️ Getting Started (Run Locally)

Follow these steps to run StateHub on your local machine.

### 1. Clone the repository
```bash
git clone https://github.com/SiddheshN2/StateHub.git
cd StateHub
```

### 2. Install dependencies

**Backend**
```bash
cd backend
npm install
```

**Frontend**
```bash
cd frontend
npm install
```

### 3. Set up environment variables

Create a `.env` file inside the `server` folder and add the following:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

CLOUD_NAME=your_cloudinary_name
CLOUD_KEY=your_cloudinary_api_key
CLOUD_SECRET=your_cloudinary_api_secret

BREVO_API_KEY=your_brevo_api_key
EMAIL_USER=your_verified_sender_email
```

### 4. Run the application

**Start backend server**
```bash
cd backend
npm run dev
```

**Start frontend**
```bash
cd frontend
npm run dev
```

The app should now be running on `http://localhost:5173` (or your configured port), with the backend on `http://localhost:5000`.

---

## 🧠 What I Learned

Building StateHub helped me understand how real-world full-stack applications work beyond just writing code:

- How **Socket.IO** enables real-time, two-way communication between users
- How third-party services like **Brevo** are integrated for email-based verification flows
- How **MongoDB, Express, React, and Node** connect end-to-end in a working application
- Why production apps need **security layers** like Helmet and rate limiting — not just functional code

---

## 🚀 Future Improvements
- Property comparison feature
- Map-based property search (Google Maps API)
---

## 📬 Contact

If you'd like to connect or have feedback on this project, feel free to reach out!

- **GitHub:** [your-github-profile](https://github.com/SiddheshN2)
- **LinkedIn:** [your-linkedin-profile](https://www.linkedin.com/in/siddhesh-nalawade-182b232b2)

---

