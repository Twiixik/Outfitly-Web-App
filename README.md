# Outfitly Web App 🌟

**A wardrobe organization app designed to help users manage their clothing efficiently and sustainably.**

---

## 📌 **Purpose of the Project**

Outfitly helps users organize, plan, and track their wardrobe items and outfits. By promoting conscious clothing management, it supports sustainability goals by:

- Reducing overconsumption of clothes.
- Helping users identify items they own and use them efficiently.
- Streamlining outfit planning for everyday and special occasions.

This project was developed as part of a **Frontend Specialisation** project with a focus on **sustainability**, **ethical design**, and **accessibility**.

---

## 🚀 **Live Demo**

The app is deployed on **GitHub Pages**.  
🔗 [Live Demo](https://twiixik.github.io/Outfitly-Web-App/)

---

## 🛠️ **Technologies Used**

- **React**: Framework for building user interfaces.
- **Firebase**: Used for real-time database storage and user authentication.
- **GitHub Pages**: For hosting the live version of the app.
- **Vite**: A fast build tool for modern web projects.
- **ARIA Labels**: Ensuring accessibility for users using assistive technologies.

---

## 🧩 **Features**

- **Add Wardrobe Items**: Add images, names, tags, and categorize your wardrobe items.
- **Organize by Categories**: View items categorized into layers, shirts, pants, shoes, etc.
- **Outfit Planner**: Mix and match wardrobe items to create outfits.
- **Sustainability Tips**: Learn tips to manage your wardrobe sustainably.
- **User Profiles**: Save your wardrobe and outfits by signing in.

---

## 🛠️ **How to Run Locally**

Follow these steps to run the project on your local machine:

### 1. **Prerequisites**

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### 2. **Clone the Repository**

git clone https://github.com/Twiixik/Outfitly-Web-App.git
cd Outfitly-Web-App

### 3. **Install Dependencies**
Run the following command to install all required packages:

bash
npm install

### 4. **Set Up Firebase**
Go to Firebase Console.
Create a new project and enable the Realtime Database and Authentication services.
Replace the Firebase configuration in firebaseConfig.js with your own project credentials.
Example Firebase config:

JS:
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

### 5. **Run the App**
Start the development server using:

npm run dev
The app will open in your browser at http://localhost:5173.

🌍 **Sustainability and Accessibility**
Sustainability: Promotes wardrobe management to avoid overconsumption.
Ethical Design: The app is inclusive, catering to different user needs.
Accessibility: ARIA labels and semantic HTML ensure a smooth experience for users with assistive technologies.

🤝 **Contributing**
We welcome contributions! To contribute:

Fork the repository.
Create a new branch: git checkout -b feature/YourFeatureName.
Commit your changes: git commit -m "Add feature description".
Push to the branch: git push origin feature/YourFeatureName.
Open a pull request.

📄 **License**
This project is licensed under the MIT License.

💻 **Contact**
For any questions, reach out to:

Name: Timotej Piontek
Email: timotejpiontek5@gmail.com

🎥 **Project Presentation**
📹 Check out the video presentation here:
🔗 

⭐ **Acknowledgments**
Special thanks to my teacher and peers for their feedback and guidance throughout the development of this project.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
