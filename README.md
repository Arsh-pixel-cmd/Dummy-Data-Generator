# ⚡ Dummy Data Generator

A full-stack **Node.js + MongoDB project** that generates random employee data with a sleek **Bootstrap UI**.  
Perfect for testing, seeding databases, and learning MERN stack basics.

---

## 🎯 Why This Project?
- Helps developers seed realistic data in MongoDB  
- Eliminates manual data entry for testing  
- A starter template for projects involving data generation  
- Showcases integration of **Node.js + Express + Mongoose + EJS + Bootstrap**  

---

## 🏆 Highlights
- ✨ One-click generation of employees  
- ✨ Data automatically stored in MongoDB  
- ✨ Responsive Bootstrap 5 UI  
- ✨ Success toast notifications  
- ✨ Auto-updating table of employees  

---

## 📌 Tech Stack Overview
| Layer      | Technology                           |
|------------|---------------------------------------|
| Backend    | Node.js, Express.js                  |
| Database   | MongoDB, Mongoose                    |
| Frontend   | EJS Templates, Bootstrap 5           |
| Utilities  | Nodemon (dev), Random data utilities |

---

## 🗂️ Project Layout

📦 DummyDataGenerator
┣ 📂 models/ # Mongoose models
┃ ┗ Empolyee.js
┣ 📂 views/ # EJS templates (frontend UI)
┃ ┗ index.ejs
┣ 📜 dummydata.js # Main Express server
┣ 📜 package.json # Dependencies & scripts
┣ 📜 package-lock.json # Lockfile
┣ 📜 .gitignore # Ignored files/folders


---

## ⚙️ Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/Arsh-pixel-cmd/DummyDataGenerator
cd DummyDataGenerator
```

2️⃣ Install dependencies
```bash
npm install
```

3️⃣ Setup MongoDB

Ensure MongoDB is running locally.
Default connection:

```bash
mongodb://your_connection_string/your_database_name
```

4️⃣ Start the server
```bash
npm run dev
```

✅ Console Output:
```bash
Example app listening on port 3000
```

## 🖥️ Usage Guide
- Open browser → `http://localhost:3000`  
- Click **⚡ Generate Employees**  
- Employees appear in the MongoDB `employees` collection  
- UI table displays the latest employees  
- ✅ Toast appears: *Employees generated successfully!*  

---

## 📊 Example Employee Document
```json
{
  "name": "Sanya",
  "salary": 78000,
  "language": "JavaScript",
  "city": "Pune",
  "position": "UX Designer",
  "isManager": true
}
```

## 🔥 Screenshots

### 🏠 Homepage  
 <img width="1469" height="832" alt="homepage" src="https://github.com/user-attachments/assets/248d3951-b124-4831-8f65-8c13cc979c05" />


### 📋 Employees Table  
<img width="1299" height="558" alt="table" src="https://github.com/user-attachments/assets/5cfd1863-bb44-48a9-908b-ecb41c1d5868" />


### ✅ Toast Notification  
<img width="388" height="56" alt="toast" src="https://github.com/user-attachments/assets/07764bae-87df-443d-9714-397120abdb83" />


---

## 📡 API Support 

You can also use the backend API without the UI:  

| Method | Endpoint     | Description                        |
|--------|--------------|------------------------------------|
| GET    | `/`          | Renders homepage (EJS)             |
| GET    | `/generate`  | Generates 10 new employees & returns JSON |


---

## 🤝 Contributing
1. Fork the project  
2. Create a feature branch (`git checkout -b feature/newFeature`)  
3. Commit changes (`git commit -m "Added new feature"`)  
4. Push & Open a PR  

---

## 📜 License
Licensed under the **MIT License** — feel free to use & modify.  

---

## 🌐 Connect with Me
💼 [LinkedIn](https://www.linkedin.com/in/arsh-mishra-030093325/)  
💻 [GitHub](https://github.com/Arsh-pixel-cmd)  
